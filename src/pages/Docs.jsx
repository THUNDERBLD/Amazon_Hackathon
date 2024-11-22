import React from "react";
import ResponsiveAppBar from "../Components/ResponsiveAppBar.jsx"; // Navbar component
import Chatbot from "../Components/Chatbot.jsx"; // Chatbot component
import SearchBar from "../Components/Searchbar.jsx"; // Search bar component

function Docs() {
  return (
    <>
      <ResponsiveAppBar /> {/* Navbar */}

      {/* Active Delivery Request Heading */}
      <div
        style={{
          marginTop: "1rem", // Adjusted for spacing
          display: "flex",
          justifyContent: "flex-start",
          paddingLeft: "4rem",
        }}
      >
        <h1 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>Active Delivery Request</h1>
      </div>

      {/* Search Bar */}
      <div
        style={{
          marginTop: "1rem", // Adjusted for spacing
          display: "flex",
          justifyContent: "center",
        }}
      >
        <SearchBar placeholder="Search from your Active Delivery Requests..." />
      </div>

      {/* Layout below the search bar */}
      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          justifyContent: "center",
          gap: "2rem", // Space between the left and right sections
          padding: "0 4rem", // Padding on the sides
        }}
      >
        {/* Left Section */}
        <div
          style={{
            backgroundColor: "white",
            width: "55%", // Occupies 45% of the screen width
            height: "17rem", // Height resembling a credit card
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            padding: "0.5rem",
          }}
        >
          <div style={{ width: "100%", height: "2rem", marginBottom: "3rem" }}>
          <SearchBar placeholder="Search for Regulations..." />
          </div>
          <p
            style={{
              marginBottom: "2rem",
              paddingLeft: "10px",
              fontSize: "1rem",
              fontWeight: "bold",
              color: "#333",
            }}
          >
            Hazardous Goods
          </p>
          <p
            style={{
              marginBottom: "2rem",
              paddingLeft: "10px",
              fontSize: "1rem",
              fontWeight: "bold",
              color: "#333",
            }}
          >
            Banned Comodites
          </p>
          <p
            style={{
              margin: "0",
              paddingLeft: "10px",
              fontSize: "1rem",
              fontWeight: "bold",
              color: "#333",
            }}
          >
            International Laws
          </p>
        </div>

        {/* Right Section */}
        <div style={{ width: "55%", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {/* Upper Rectangle */}
          <div
            style={{
              backgroundColor: "white",
              height: "8rem",
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              padding: "0.5rem",
            }}
          >
            <div style={{ width: "100%", height: "2rem", marginBottom: "2rem" }}>
            <SearchBar placeholder="Search from your Completed Deliveries..." />
            </div>
            <p
              style={{
                margin: "0",
                paddingLeft: "10px",
                fontSize: "1rem",
                fontWeight: "bold",
                color: "#333",
              }}
            >
              XX Journeys Completed 🎉
            </p>
          </div>

          {/* Lower Rectangle */}
          <div
            style={{
              backgroundColor: "white",
              height: "8rem",
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              padding: "0.5rem",
            }}
          >
            <div style={{ width: "100%", height: "2rem", marginBottom: "2rem" }}>
            <SearchBar placeholder="Search for Important Links..." />
            </div>
            <p
              style={{
                margin: "0",
                paddingLeft: "10px",
                fontSize: "1rem",
                fontWeight: "bold",
                color: "#333",
              }}
            >
              Check Important Updates!
            </p>
          </div>
        </div>
      </div>

      {/* Chatbot in the bottom-right corner */}
      <Chatbot />
    </>
  );
}

export default Docs;
