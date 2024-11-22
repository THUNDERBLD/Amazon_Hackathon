import React from "react";
import ResponsiveAppBar from "../Components/ResponsiveAppBar.jsx";
import CardContainer from "../Components/CardContainers.jsx"; // Adjust the path if needed

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

      {/* Card Container Section */}
      <div
        style={{
          marginTop: "2rem",
          paddingLeft: "4rem",
          paddingRight: "4rem",
        }}
      >
        <CardContainer />
      </div>
    </>
  );
}

export default Dashboard;
