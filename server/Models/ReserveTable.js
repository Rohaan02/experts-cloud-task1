import React, { useState, useEffect } from "react";

function ReservedCheck() {
  const [date, setDate] = useState("");
  const [reservedTables, setReservedTables] = useState([]);
  const totalTables = 10;

  const fetchReservedTables = async () => {
    if (!date) return;

    try {
      const response = await fetch(
        `http://localhost:5000/api/reservations/${date}`
      );
      const data = await response.json();
      setReservedTables(data.map((reservation) => reservation.tableNumber));
    } catch (error) {
      console.error("Error fetching reserved tables:", error);
    }
  };

  useEffect(() => {
    fetchReservedTables();
  }, [date]);

  return (
    <div className="flex flex-col items-center py-32">
      <h2 className="text-2xl mb-4">Check Reserved Tables</h2>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="mb-4 p-2 border border-gray-300"
      />
      <button
        onClick={fetchReservedTables}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Check Reservations
      </button>

      <div className="grid grid-cols-5 gap-4 mt-4">
        {[...Array(totalTables)].map((_, index) => {
          const tableNumber = index + 1; // Table numbers start from 1
          const isReserved = reservedTables.includes(tableNumber);

          return (
            <div
              key={tableNumber}
              className={`h-20 w-20 flex items-center justify-center border ${
                isReserved ? "bg-red-500" : "bg-green-500"
              }`}
            >
              {tableNumber}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ReservedCheck;
