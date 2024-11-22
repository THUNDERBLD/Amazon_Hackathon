import React from "react";
import ResponsiveAppBar from "../Components/ResponsiveAppBar.jsx";
import Activeship from "../Components/Activeship.jsx";
import Chatbot from "../Components/Chatbot.jsx"; // Import the chatbot component

function Dashboard() {
  return (
    <>
      <ResponsiveAppBar />

      {/* Dashboard Heading */}
      <div
        style={{
          marginTop: "1.5rem",
          display: "flex",
          justifyContent: "flex-start",
          paddingLeft: "4rem",
        }}
      >
        <h1 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>Dashboard</h1>
      </div>

      {/* Rectangles */}
      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        {["Active Shipments", "Pending Documents", "Available Carriers", "Monthly Revenue"].map(
          (title, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "white",
                padding: "1rem",
                width: "14rem",
                height: "8rem",
                borderRadius: "8px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                transition: "box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
              }}
            >
              <h2 style={{ fontSize: "1rem", fontWeight: "600" }}>{title}</h2>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "#6b7280",
                  marginTop: "0.5rem",
                }}
              >
                [Data]
              </p>
            </div>
          )
        )}
      </div>

      {/* Graph Heading */}
      <div
        style={{
          marginTop: "3rem", // Add some space below the rectangles
          display: "flex",
          justifyContent: "flex-start",
          paddingLeft: "82px", // Same padding as Dashboard heading
        }}
      >
        <h1 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>Graph</h1>
      </div>

      {/* Graph Layout - 2x2 Matrix */}
      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          flexWrap: "wrap", // Wraps after two elements
          gap: "2rem", // Space between each graph
          justifyContent: "center", // This will center the graphs horizontally
        }}
      >
        {/* Graphs */}
        {["Graph 1", "Graph 2", "Graph 3", "Graph 4"].map((graph, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "white",
              padding: "8rem",
              width: "45%", // Ensures each graph takes half space in the row
              height: "20rem",
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              transition: "box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
            }}
          >
            <h2 style={{ fontSize: "1rem", fontWeight: "600" }}>{graph}</h2>
            <p
              style={{
                fontSize: "0.875rem",
                color: "#6b7280",
                marginTop: "0.5rem",
              }}
            >
              [Graph Data]
            </p>
          </div>
        ))}
      </div>

      {/* Active Shipments Heading */}
      <div
        style={{
          marginTop: "3rem", // Add some space below the graphs
          display: "flex",
          justifyContent: "flex-start",
          paddingLeft: "4rem", // Same padding as Dashboard and Graph heading
        }}
      >
        <h1 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>Active Shipments</h1>
      </div>

      {/* Active Shipments Rectangle with Button */}
      <div
        style={{
          width: "100%", // Makes the rectangle take full width of the screen
          height: "10rem", // Height of the rectangle
          backgroundColor: "#ffffff", // Light grey background color
          display: "flex",
          justifyContent: "center", // Centers the button horizontally
          alignItems: "center", // Centers the button vertically
          marginTop: "-20px", // Adds space below the active shipments heading
        }}
      >
        <Activeship />
      </div>

      {/* Quick Links Heading */}
      <div
        style={{
          marginTop: "3rem", // Adds some space below the Active Shipments section
          display: "flex",
          justifyContent: "flex-start",
          paddingLeft: "4rem", // Same padding as the other headings
        }}
      >
        <h1 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>Quick Links</h1>
      </div>

     {/* Quick Links Rectangles */}
<div
  style={{
    marginTop: "2rem", // Adds space below the Quick Links heading
    display: "flex",
    justifyContent: "center", // Centers the rectangles horizontally
    gap: "7rem", // Increased space between the rectangles
    flexWrap: "wrap", // Allows wrapping if the screen size is small
  }}
>
  {["New Shipment", "Upload Docs", "Find Carrier", "Generate Report"].map((title, index) => (
    <div
      key={index}
      style={{
        backgroundColor: "white",
        padding: "1rem", // Increased the padding inside the boxes
        width: "10rem", // Adjust the width as needed
        height: "4rem", // Height remains the same as before
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        transition: "box-shadow 0.3s ease",
        display: "flex",
        justifyContent: "center", // Centers the text horizontally
        alignItems: "center", // Centers the text vertically
        textAlign: "center", // Ensures text is centered
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
      }}
    >
      <h2 style={{ fontSize: "1rem", fontWeight: "600" }}>{title}</h2>
    </div>
  ))}
</div>



      {/* Chatbot in the bottom-right corner */}
      <Chatbot />
    </>
  );
}

export default Dashboard;
