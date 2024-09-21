const express = require("express");
const sql = require("mssql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// -------------------------------------------------------------------------------------
// ------------------------------ SQL Server Configuration -----------------------------
// -------------------------------------------------------------------------------------
const dbConfig = {
  user: "sa",
  password: "1234",
  server: "localhost",
  database: "luxuryRestaurant",
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

// -------------------------------------------------------------------------------------
// --------------------- Connection check with Microsoft SQL Server --------------------
// -------------------------------------------------------------------------------------
sql.connect(dbConfig, (err) => {
  if (err) {
    console.error("Database connection error:", err);
    return;
  }
  console.log("Connected to the database");
});

// -------------------------------------------------------------------------------------
// ----------------------------------- For the "Menu" ----------------------------------
// -------------------------------------------------------------------------------------
// Getting the data from the "menu" table
app.get("/api/menu", async (req, res) => {
  try {
    const result = await sql.query`SELECT * FROM menu ORDER BY itemNumber ASC`;
    res.json(result.recordset);
  } catch (err) {
    console.error("Error fetching menu data:", err);
    res.status(500).send("Error fetching menu data");
  }
});

// -------------------------------------------------------------------------------------
// ----------------------------------- For the "Reserve" -------------------------------
// -------------------------------------------------------------------------------------

// ----------------------- POST request to save reservation data -----------------------
app.post("/api/reserve", async (req, res) => {
  const {
    username,
    contactNumber,
    tableNumber,
    seats,
    reservanceDate,
    itemName,
  } = req.body;

  if (
    !username ||
    !contactNumber ||
    !tableNumber ||
    !seats ||
    !reservanceDate ||
    !itemName
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const checkQuery = `
      SELECT COUNT(*) AS count 
      FROM reserveTable 
      WHERE tableNumber = @tableNumber 
      AND CAST(reservanceDate AS DATE) = CAST(@reservanceDate AS DATE)
    `;

    const checkRequest = new sql.Request();
    checkRequest.input("tableNumber", sql.Int, tableNumber);
    checkRequest.input("reservanceDate", sql.Date, reservanceDate);

    const checkResult = await checkRequest.query(checkQuery);

    if (checkResult.recordset[0].count > 0) {
      return res.status(400).json({
        message: "This table is already reserved for the selected date.",
      });
    }

    // -------------------------- Inserting the reservation data into the reserveTable --------------------------
    const query = `
      INSERT INTO reserveTable (username, contactNumber, tableNumber, seats, reservanceDate, itemName)
      VALUES (@username, @contactNumber, @tableNumber, @seats, @reservanceDate, @itemName)
    `;

    const request = new sql.Request();
    request.input("username", sql.VarChar, username);
    request.input("contactNumber", sql.VarChar, contactNumber);
    request.input("tableNumber", sql.Int, tableNumber);
    request.input("seats", sql.Int, seats);
    request.input("reservanceDate", sql.Date, reservanceDate);
    request.input("itemName", sql.VarChar, itemName);

    await request.query(query);

    res.status(200).json({ message: "Reservation successful!" });
  } catch (err) {
    console.error("Error saving reservation:", err);
    res.status(500).send("Error saving reservation");
  }
});

// ------------- GET functionality to fetch reserved tables based on the date which is selected -------------
app.get("/api/reserved-tables", async (req, res) => {
  const { date } = req.query;

  if (!date) {
    return res.status(400).json({ message: "Date is required" });
  }

  try {
    const query = `
      SELECT tableNumber, username, itemName 
      FROM reserveTable 
      WHERE CAST(reservanceDate AS DATE) = CAST(@date AS DATE)
    `;

    const request = new sql.Request();
    request.input("date", sql.Date, date);

    const result = await request.query(query);
    res.json(result.recordset);
  } catch (err) {
    console.error("Error fetching reserved tables:", err);
    res.status(500).send("Error fetching reserved tables");
  }
});

// -------------------------------------------------------------------------------------
// -------------------------------- Starting the server --------------------------------
// -------------------------------------------------------------------------------------
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
