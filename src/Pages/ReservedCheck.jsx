import React, { useState, useEffect } from "react";
import headingCentralUnderline from "../assets/OurMenuBgImage/HeadingCentralUnderline.png";

function ReservedCheck() {
  const [selectedDate, setSelectedDate] = useState("");
  const [tableInfo, setTableInfo] = useState([]);

  useEffect(() => {
    if (selectedDate) {
      fetchReservedTables();
    }
  }, [selectedDate]);

  const fetchReservedTables = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/reserved-tables?date=${selectedDate}`
      );
      const data = await response.json();
      setTableInfo(data);
    } catch (error) {
      console.error("Error fetching reserved tables:", error);
    }
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div className="flex flex-col items-center font-monda py-16 lg:py-32 px-4 sm:px-8">
      <h2 className="text-[24px] sm:text-[32px] lg:text-[39px] leading-tight text-[#A5886D] text-center">
        Check Reserved Tables
      </h2>
      <img
        className="mx-auto block pt-3 sm:pt-5 pb-6 sm:pb-10"
        src={headingCentralUnderline}
        alt="Heading Central Underline"
      />

      <input
        type="date"
        className="bg-[#3D3D3D] text-[#9C9C9C] w-full sm:w-[400px] lg:w-[531px] p-3 mb-5 rounded-md"
        value={selectedDate}
        onChange={handleDateChange}
        min={new Date().toISOString().split("T")[0]}
        required
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
        {[...Array(10)].map((_, index) => {
          const tableNumber = index + 1;
          const reservation = tableInfo.find(
            (res) => res.tableNumber === tableNumber
          );

          return (
            <div
              key={tableNumber}
              className={`h-24 flex items-center justify-center rounded-lg ${
                reservation ? "bg-red-600" : "bg-green-600"
              }`}
            >
              {reservation ? (
                <span className="text-white text-center text-sm sm:text-lg font-bold">
                  Table {tableNumber} - Reserved by {reservation.username}{" "}
                  <br /> ordered:
                  {reservation.itemName}
                </span>
              ) : (
                <span className="text-white text-center text-sm sm:text-lg font-bold">
                  Table {tableNumber} - Available
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ReservedCheck;
