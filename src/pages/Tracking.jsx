import React, { useState, useEffect } from "react";
import ResponsiveAppBar from "../Components/ResponsiveAppBar.jsx";
import {
  Box,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  TextField,
  CircularProgress,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

function Dashboard() {
  const [deliveries, setDeliveries] = useState([]); // State to hold active deliveries
  const [searchQuery, setSearchQuery] = useState(""); // State to hold search query
  const [loading, setLoading] = useState(true); // State to show loading indicator

  useEffect(() => {
    setTimeout(() => {
      const fetchedDeliveries = [
        {
          id: 1,
          orderNumber: "ORD123456",
          currentLocation: "New York, NY",
          estimatedDeliveryTime: "2:30 PM",
          status: "In Transit",
        },
        {
          id: 2,
          orderNumber: "ORD123457",
          currentLocation: "Los Angeles, CA",
          estimatedDeliveryTime: "4:15 PM",
          status: "Out for Delivery",
        },
        {
          id: 3,
          orderNumber: "ORD123458",
          currentLocation: "Chicago, IL",
          estimatedDeliveryTime: "3:00 PM",
          status: "Delivered",
        },
        {
          id: 4,
          orderNumber: "ORD123459",
          currentLocation: "San Francisco, CA",
          estimatedDeliveryTime: "5:00 PM",
          status: "Delivered",
        },
      ];
      setDeliveries(fetchedDeliveries); // Update deliveries state
      setLoading(false); // Hide loading indicator
    }, 2000); // Simulate network delay
  }, []);

  // Filter deliveries based on search query
  const filteredDeliveries = deliveries.filter((delivery) =>
    delivery.orderNumber.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate statistics for the pie chart
  const totalDeliveries = deliveries.length;
  const completedDeliveries = deliveries.filter(
    (delivery) => delivery.status === "Delivered"
  ).length;
  const remainingDeliveries = totalDeliveries - completedDeliveries;

  const pieData = [
    { name: "Delivered", value: completedDeliveries },
    { name: "Remaining", value: remainingDeliveries },
  ];

  const COLORS = ["#4caf50", "#ff5722"]; // Colors for the pie chart

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
        <h1 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>Active Delivery Tracking</h1>
      </div>

      {/* Search Bar */}
      <Box sx={{ padding: "2rem", maxWidth: "600px" }}>
        <TextField
          label="Search by Order ID"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Box>

      <Box sx={{ display: "flex", gap: 2, padding: "2rem" }}>
        {/* Active Deliveries Card */}
        <Card sx={{ flex: 3, maxHeight: "500px", overflowY: "auto", padding: "1rem" }}>
          <CardContent>
            {loading ? (
              <CircularProgress />
            ) : filteredDeliveries.length > 0 ? (
              filteredDeliveries.map((delivery) => (
                <Accordion key={delivery.id}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="subtitle1">
                      Order Number: {delivery.orderNumber}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body1">
                      <strong>Current Location:</strong> {delivery.currentLocation}
                    </Typography>
                    <Typography variant="body1">
                      <strong>Estimated Delivery Time:</strong> {delivery.estimatedDeliveryTime}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: delivery.status === "Delivered" ? "green" : "blue" }}
                    >
                      <strong>Status:</strong> {delivery.status}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))
            ) : (
              <Typography>No deliveries found for the given Order ID.</Typography>
            )}
          </CardContent>
        </Card>

        {/* Pie Chart */}
        <Card sx={{ flex: 1, padding: "1rem", display: "flex", justifyContent: "center" }}>
          <Box>
            <Typography variant="h6" sx={{ textAlign: "center", marginBottom: "1rem" }}>
              Delivery Statistics
            </Typography>
            <PieChart width={200} height={200}>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label={(entry) => `${entry.name}: ${entry.value}`}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </Box>
        </Card>
      </Box>
    </>
  );
}

export default Dashboard;
