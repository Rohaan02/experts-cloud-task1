import React, { useState, useEffect } from "react";
import headingCentralUnderline from "../../assets/OurMenuBgImage/HeadingCentralUnderline.png";
import leftImage from "../../assets/ReservationSection/ReservationSectionImage.png";

function ReservationSection() {
  const [reservationData, setReservationData] = useState({
    username: "",
    contactNumber: "",
    tableNumber: "",
    seats: "",
    reservanceDate: "",
    itemName: "",
  });

  const [menuItems, setMenuItems] = useState([]);
  const [reservationSuccess, setReservationSuccess] = useState(false);
  const [reservationMessage, setReservationMessage] = useState("");

  // Fetching the item names from "menu"
  useEffect(() => {
    fetch("http://localhost:5000/api/menu")
      .then((response) => response.json())
      .then((data) => {
        setMenuItems(data);
      })
      .catch((error) => console.error("Error fetching menu items:", error));
  }, []);

  const handleInputChange = (e) => {
    setReservationData({
      ...reservationData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/reserve", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reservationData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Reservation successful:", result);

        setReservationMessage(
          `Your table ${reservationData.tableNumber} is reserved for ${reservationData.reservanceDate}. Thank you, ${reservationData.username}!`
        );
        setReservationSuccess(true);
      } else {
        const errorData = await response.json();
        alert(errorData.message);
      }
    } catch (error) {
      console.error("Error submitting reservation:", error);
    }
  };

  const handleNewReservation = () => {
    setReservationData({
      username: "",
      contactNumber: "",
      tableNumber: "",
      seats: "",
      reservanceDate: "",
      itemName: "",
    });
    setReservationSuccess(false);
  };

  return (
    <div className="bg-[#181818] flex lg:flex-row md:flex-row sm:flex-col lg:h-[1,071.06px] font-monda sm:flex sm:justify-center sm:items-center">
      <img
        className="lg:w-[50%] md:w-[40%] sm:w-[60%]"
        src={leftImage}
        alt="Reservation Section Image"
      />
      <div className="bg-[#181818] lg:w-[50%] md:w-[60%] sm:w-[60%] flex flex-col justify-center items-center">
        {!reservationSuccess ? (
          <>
            <h2 className="lg:text-[39px] leading-[48px] text-[#A5886D]">
              Reserve Your Table
            </h2>
            <img
              className="mx-auto sm:w-[50%] block lg:pt-5 lg:pb-10 md:pb-5 sm:pb-5"
              src={headingCentralUnderline}
              alt="Heading Central Underline"
            />
            <form
              className="h-[400px] flex flex-col gap-5"
              onSubmit={handleSubmit}
            >
              <input
                className="bg-[#3D3D3D] text-[#9C9C9C] lg:w-[531px] md:w-[331px] sm:w-[300px] sm:p-1 lg:p-3"
                type="text"
                name="username"
                value={reservationData.username}
                onChange={handleInputChange}
                placeholder="Name"
                required
              />
              <input
                className="bg-[#3D3D3D] text-[#9C9C9C] lg:w-[531px] md:w-[331px] sm:w-[300px] sm:p-1 lg:p-3"
                type="text"
                name="contactNumber"
                value={reservationData.contactNumber}
                onChange={handleInputChange}
                placeholder="Phone"
                required
              />
              <select
                className="bg-[#3D3D3D] text-[#9C9C9C] lg:w-[531px] md:w-[331px] sm:w-[300px] sm:p-1 lg:p-3"
                name="tableNumber"
                value={reservationData.tableNumber}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled>
                  Select Table Number
                </option>
                {[...Array(10)].map((_, index) => (
                  <option key={index} value={index + 1}>
                    Table {index + 1}
                  </option>
                ))}
              </select>
              <input
                className="bg-[#3D3D3D] text-[#9C9C9C] lg:w-[531px] md:w-[331px] sm:w-[300px] sm:p-1 lg:p-3"
                type="number"
                name="seats"
                value={reservationData.seats}
                onChange={handleInputChange}
                placeholder="No. of Persons"
                required
              />
              <input
                className="bg-[#3D3D3D] text-[#9C9C9C] lg:w-[531px] md:w-[331px] sm:w-[300px] sm:p-1 lg:p-3"
                type="date"
                name="reservanceDate"
                value={reservationData.reservanceDate}
                onChange={handleInputChange}
                min={new Date().toISOString().split("T")[0]}
                required
              />
              <select
                className="bg-[#3D3D3D] text-[#9C9C9C] lg:w-[531px] md:w-[331px] sm:w-[300px] sm:p-1 lg:p-3"
                name="itemName"
                value={reservationData.itemName}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled>
                  Select a Dish
                </option>
                {menuItems.map((menuItem, index) => (
                  <option
                    className="bg-[#8a8a8a] text-white"
                    key={index}
                    value={menuItem.itemName}
                  >
                    {menuItem.itemName}
                  </option>
                ))}
              </select>
              <div className="flex justify-center">
                <button
                  className="bg-gradient-to-b from-[#7B5638] to-[#CBBAAB] text-white font-bold w-[163px] h-[44px] rounded-tl-[150px] rounded-br-[150px] rounded-tr-none rounded-bl-none text-base mt-5"
                  type="submit"
                >
                  Reserve Now
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center text-[#A5886D]">
            <h2 className="text-[39px] leading-[48px]">
              Reservation Confirmed
            </h2>
            <p className="mt-5">{reservationMessage}</p>
            <button
              className="bg-gradient-to-b from-[#7B5638] to-[#CBBAAB] text-white lg:font-bold lg:w-[163px] lg:h-[44px] rounded-tl-[150px] rounded-br-[150px] rounded-tr-none rounded-bl-none lg:text-base sm:text-sm mt-10"
              onClick={handleNewReservation}
            >
              Reserve More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ReservationSection;
