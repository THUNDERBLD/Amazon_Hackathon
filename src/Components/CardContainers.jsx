import React, { useState, useEffect } from "react";
import { Box, Card, CardContent, Typography, Grid, Button } from "@mui/material";

function CardContainer() {
  const [selectedCard, setSelectedCard] = useState(null); // State to hold the selected card details
  const [cardData, setCardData] = useState([]); // State for card data fetched from backend

  // Simulating backend data fetch
  useEffect(() => {
    // Mocked backend data
    const fetchedData = [
      {
        id: 1,
        orderNumber: "ORD123456",
        status: "Paid",
        orderDate: "2024-11-20",
        totalAmount: "$100.00",
        items: [
          { name: "Item 1", amount: "$30.00" },
          { name: "Item 2", amount: "$50.00" },
        ],
        taxes: "$20.00",
      },
      {
        id: 2,
        orderNumber: "ORD123457",
        status: "Unpaid",
        orderDate: "2024-11-19",
        totalAmount: "$250.00",
        items: [
          { name: "Item A", amount: "$100.00" },
          { name: "Item B", amount: "$130.00" },
        ],
        taxes: "$20.00",
      },
      {
        id: 3,
        orderNumber: "ORD123458",
        status: "Paid",
        orderDate: "2024-11-18",
        totalAmount: "$80.00",
        items: [
          { name: "Item X", amount: "$40.00" },
          { name: "Item Y", amount: "$30.00" },
        ],
        taxes: "$10.00",
      },
    ];
    setCardData(fetchedData); // Update state with fetched data
  }, []);

  // Redirect to payment vendor (mock implementation)
  const handlePayment = () => {
    alert("Redirecting to payment vendor...");
    // Replace with actual redirection logic:
    // window.location.href = "https://payment-vendor.com";
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={2}>
        {/* Card 1 - Master (Left Half) */}
        <Grid item xs={12} md={6}>
          <Card sx={{ maxHeight: "400px", overflowY: "auto" }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                My Orders
              </Typography>
              {cardData.map((card) => (
                <Card
                  key={card.id}
                  sx={{
                    marginBottom: 2,
                    cursor: "pointer",
                    backgroundColor: selectedCard?.id === card.id ? "#f0f0f0" : "white",
                  }}
                  onClick={() => setSelectedCard(card)}
                >
                  <CardContent>
                    <Typography variant="subtitle1">
                      Order Number: {card.orderNumber}
                    </Typography>
                    <Typography variant="body2" sx={{ color: card.status === "Paid" ? "green" : "red" }}>
                      Status: {card.status}
                    </Typography>
                    <Typography variant="body2">Order Date: {card.orderDate}</Typography>
                    <Typography variant="body2">Total: {card.totalAmount}</Typography>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </Grid>

        {/* Card 2 - Detail (Right Half) */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Order Summary
              </Typography>
              {selectedCard ? (
                <>
                  {/* Subcard Details */}
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    Order Number: {selectedCard.orderNumber}
                  </Typography>
                  <Typography variant="body2">
                    Status:{" "}
                    <span style={{ color: selectedCard.status === "Paid" ? "green" : "red" }}>
                      {selectedCard.status}
                    </span>
                  </Typography>
                  <Typography variant="body2">Order Date: {selectedCard.orderDate}</Typography>
                  <Typography variant="body2">Total: {selectedCard.totalAmount}</Typography>

                  {/* Order Items */}
                  <Typography variant="h6" sx={{ marginTop: 2 }}>
                    Order Items:
                  </Typography>
                  {selectedCard.items.map((item, index) => (
                    <Typography key={index} variant="body2">
                      {item.name}: {item.amount}
                    </Typography>
                  ))}

                  {/* Total Taxes and Amount */}
                  <Typography variant="body2" sx={{ marginTop: 2 }}>
                    <strong>Total Taxes:</strong> {selectedCard.taxes}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Total Amount:</strong> {selectedCard.totalAmount}
                  </Typography>

                  {/* Pay Button */}
                  {selectedCard.status === "Unpaid" && (
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ marginTop: 2 }}
                      onClick={handlePayment}
                    >
                      Pay Now
                    </Button>
                  )}
                </>
              ) : (
                <Typography variant="body2" sx={{ color: "gray" }}>
                  Select an order from the left to view details here.
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CardContainer;
