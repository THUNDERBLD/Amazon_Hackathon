import React, { useState } from "react";
import ResponsiveAppBar from "../Components/ResponsiveAppBar.jsx"; // Navbar component
import Chatbot from "../Components/Chatbot.jsx"; // Chatbot component

const Agents = () => {
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [date, setDate] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State for controlling popup
  const [selectedVendor, setSelectedVendor] = useState(""); // State to track selected vendor

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with: ", { fromLocation, toLocation, category, quantity, date });
  };

  const openPopup = (vendor) => {
    setSelectedVendor(vendor);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const commonStyle = {
    width: "200px", // Uniform width for all inputs and button
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "14px",
  };

  return (
    <div>
      <ResponsiveAppBar /> {/* Navbar */}
      <div
        style={{
          textAlign: "center",
          marginTop: "30px",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        Millions of Vendors at One Simple Search
      </div>

      {/* Interactive Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          maxWidth: "90%",
          margin: "30px auto",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
        }}
      >
        {/* From */}
        <input
          type="text"
          value={fromLocation}
          onChange={(e) => setFromLocation(e.target.value)}
          placeholder="From..."
          style={commonStyle}
        />

        {/* To */}
        <input
          type="text"
          value={toLocation}
          onChange={(e) => setToLocation(e.target.value)}
          placeholder="To..."
          style={commonStyle}
        />

        {/* Category */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={commonStyle}
        >
          <option value="" disabled>
            Select category...
          </option>
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
          <option value="category3">Category 3</option>
        </select>

        {/* Quantity */}
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Enter quantity..."
          style={commonStyle}
        />

        {/* Date */}
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Enter Date"
          style={commonStyle}
        />

        {/* Search Vendors Button */}
        <button
          type="submit"
          style={{
            ...commonStyle,
            backgroundColor: "#007bff",
            color: "#fff",
            cursor: "pointer",
            border: "none",
          }}
        >
          Search Vendors
        </button>
      </form>

      {/* Selected Vendors Heading */}
      <div
        style={{
          textAlign: "center",
          marginTop: "40px",  // Adjust this if you need more space
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        Selected Vendors
      </div>

      {/* Vendor Table */}
      <div
        style={{
          width: "90%",
          margin: "20px auto",
          borderCollapse: "collapse",
        }}
      >
        <table
          style={{
            width: "100%",
            border: "1px solid #ddd",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          <thead>
            <tr>
              <th style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>Column 1</th>
              <th style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>Column 2</th>
              <th style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>Column 3</th>
              <th style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>Column 4</th>
              <th style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>Column 5</th>
              <th style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>Column 6</th>
              <th style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>Column 7</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                style={{ padding: "8px", borderBottom: "1px solid #ddd", cursor: "pointer" }}
                onClick={() => openPopup("Vendor A")}
              >
                Vendor A
              </td>
              <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>Data 1</td>
              <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>Data 2</td>
              <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>Data 3</td>
              <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>Data 4</td>
              <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>Data 5</td>
              <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>Data 6</td>
            </tr>
            <tr>
              <td
                style={{ padding: "8px", borderBottom: "1px solid #ddd", cursor: "pointer" }}
                onClick={() => openPopup("Vendor B")}
              >
                Vendor B
              </td>
              <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>Data 1</td>
              <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>Data 2</td>
              <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>Data 3</td>
              <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>Data 4</td>
              <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>Data 5</td>
              <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>Data 6</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.7)", // Darken background
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "1000",
          }}
          onClick={closePopup} // Close when clicking outside
        >
          <div
            style={{
              width: "80%",
              height: "45%",
              backgroundColor: "white",
              borderRadius: "8px",
              padding: "20px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <h2>{selectedVendor}</h2> {/* Vendor name as the title */}
            <p>More details about {selectedVendor} will go here.</p>
            <button onClick={closePopup} style={{ padding: "10px 20px", marginTop: "20px" }}>
              Close
            </button>
          </div>
        </div>
      )}

      <Chatbot /> {/* Chatbot */}
    </div>
  );
};

export default Agents;
