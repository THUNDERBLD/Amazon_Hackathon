import React from 'react';
import { Box, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { Box, Typography } from '@mui/material';
import { PieChart, Pie, Cell, Tooltip } from 'recharts'; // Importing Recharts components
import ResponsiveAppBar from "../Components/ResponsiveAppBar.jsx"; // Navbar component
import Chatbot from "../Components/Chatbot.jsx"; // Chatbot component

function Analytics() {
  const headings = [
    "Booked",
    "To be Packed",
    "Ready to Ship",
    "Shipped",
    "Delivered",
    "Total Sales",
  ];

  // Sample data for the pie charts (5 partitions)
  const pieData = [
    { value: 400 },
    { value: 300 },
    { value: 300 },
    { value: 200 },
    { value: 500 }, // Added 5th partition
  ];
  return (
    <>
      <ResponsiveAppBar /> {/* Navbar */}

      {/* Horizontal Row with 7 Rectangles */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          padding: '2rem 0',
        }}
      >
        {/* First Rectangle with Divided Sections */}
        <Box
          sx={{
            width: '180px',
            height: '100px',
            backgroundColor: 'primary.main', // Default Material UI Blue
            borderRadius: '8px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '0.5rem',
          }}
        >
          {/* Top Part: Sales Review */}
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              fontSize: '0.875rem',
              fontWeight: 'bold',
              color: 'white', // White text on blue background
            }}
          >
            Sales Review
          </Typography>

          {/* Bottom Part: Dropdown Menu */}
          <FormControl fullWidth>
            <InputLabel id="year-select-label" sx={{ color: 'white' }}>Select Year</InputLabel>
            <Select
              labelId="year-select-label"
              label="Select Year"
              defaultValue={2024}
              size="small"
              sx={{
                color: 'white', // White text on the select menu
                '.MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white', // White border for the dropdown
                },
              }}
            >
              <MenuItem value={2024}>2024</MenuItem>
              <MenuItem value={2023}>2023</MenuItem>
              <MenuItem value={2022}>2022</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Other Rectangles */}
        {headings.map((heading, index) => (
          <Box
            key={index}
            sx={{
              width: '180px',
              height: '100px',
              backgroundColor: 'primary.main', // Default Material UI Blue
              borderRadius: '8px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              position: 'relative',
            }}
          >
            {/* Empty content for placeholders */}
                        {/* Heading at the Top Center */}
                        <Typography
              variant="h6"
              sx={{
                position: 'absolute',
                top: '10px',
                left: '50%',
                transform: 'translateX(-50%)',
                fontSize: '0.75rem', // Adjusted font size
                fontWeight: 'bold',
                color: 'white',
                textAlign: 'center',
                whiteSpace: 'normal', // Allow text to wrap
                wordWrap: 'break-word', // Enable wrapping of long words
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {heading}
            </Typography>

            {/* Placeholder Text at the Center */}
            <Typography
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '0.875rem',
                fontWeight: 'light',
                color: 'rgba(255, 255, 255, 0.7)',
              }}
            >
              [Data]
            </Typography>

          </Box>
        ))}
      </Box>

      {/* Bottom Row of 4 Rectangles Below */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '2rem',
          padding: '2rem 0',
          height: 'calc(100vh - 380px)',
        }}
      >
        {/* First Two Rectangles with Headings */}
        <Box
          sx={{
            width: '790px',
            height: '250px',
            backgroundColor: 'primary.main',
            borderRadius: '8px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            position: 'relative',
          }}
        >
          {/* Heading for Top 5 Category */}
          <Typography
            sx={{
              position: 'absolute',
              top: '10px',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: '0.8rem',
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              maxWidth: '90%',
            }}
          >
            Top 5 Product Performance
          </Typography>
          {/* Placeholder Text or Data */}
          <Typography
            sx={{
              fontSize: '1rem',
              fontWeight: 'light',
              color: 'rgba(255, 255, 255, 0.7)',
            }}
          >
            [Tabular Data]
          </Typography>
        </Box>

        <Box
          sx={{
            width: '790px',
            height: '250px',
            backgroundColor: 'primary.main',
            borderRadius: '8px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            position: 'relative',
          }}
        >
          {/* Heading for Performance */}
          <Typography
            sx={{
              position: 'absolute',
              top: '10px',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: '0.8rem',
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              maxWidth: '100%',
            }}
          >
            Top 5 Category Performance
          </Typography>
          {/* Placeholder Text or Data */}
          <Typography
            sx={{
              fontSize: '1rem',
              fontWeight: 'light',
              color: 'rgba(255, 255, 255, 0.7)',
            }}
          >
            [Tabular Data]
          </Typography>
        </Box>

        {/* Last Two Rectangles with Pie Charts */}
        <Box
          sx={{
            width: '380px',
            height: '250px',
            backgroundColor: 'primary.main',
            borderRadius: '8px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            position: 'relative',
          }}
        >
          {/* Heading for Top 5 Product Performance */}
          <Typography
            sx={{
              position: 'absolute',
              top: '10px',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: '0.8rem',
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              maxWidth: '90%',
            }}
          >
            Top 5 Product Performance
          </Typography>
          {/* Pie Chart */}
          <PieChart width={150} height={150}>
            <Pie
              data={pieData}
              dataKey="value"
              outerRadius={50}
              fill="#8884d8"
              label={false}
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
          <Typography
            sx={{
              position: 'absolute',
              bottom: '0px',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: '0.875rem',
              fontWeight: 'light',
              color: 'rgba(255, 255, 255, 0.7)',
            }}
          >
            [Data]
          </Typography>
        </Box>

        <Box
          sx={{
            width: '380px',
            height: '250px',
            backgroundColor: 'primary.main',
            borderRadius: '8px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            position: 'relative',
          }}
        >
          {/* Heading for Top 5 Category Performance */}
          <Typography
            sx={{
              position: 'absolute',
              top: '10px',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: '0.8rem',
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              maxWidth: '90%',
            }}
          >
            Top 5 Category Performance
          </Typography>
          {/* Pie Chart */}
          <PieChart width={150} height={150}>
            <Pie
              data={pieData}
              dataKey="value"
              outerRadius={50}
              fill="#82ca9d"
              label={false}
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
          <Typography
            sx={{
              position: 'absolute',
              bottom: '0px',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: '0.875rem',
              fontWeight: 'light',
              color: 'rgba(255, 255, 255, 0.7)',
            }}
          >
            [Data]
          </Typography>
        </Box>
      </Box>

      {/* Space between Bottom Row and Last Section */}
      <Box sx={{ paddingBottom: '2rem' }} />

      {/* Last Row: Year Wise and Last 12 Months Sales Trend */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '2rem',
          paddingTop: '8rem',
        }}
      >
        {/* First Rectangle: Year Wise Sales Trend */}
        <Box
          sx={{
            width: '50%',
            height: '250px',
            backgroundColor: 'primary.main',
            borderRadius: '8px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            position: 'relative',
          }}
        >
          <Typography
            sx={{
              position: 'absolute',
              top: '10px',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: '0.8rem',
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              maxWidth: '90%',
            }}
          >
            Year Wise Sales Trend
          </Typography>
          <Typography
            sx={{
              fontSize: '1rem',
              fontWeight: 'light',
              color: 'rgba(255, 255, 255, 0.7)',
            }}
          >
            [Graph]
          </Typography>
        </Box>

        {/* Second Rectangle: Last 12 Months Sales Trend */}
        <Box
          sx={{
            width: '50%',
            height: '250px',
            backgroundColor: 'primary.main',
            borderRadius: '8px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            position: 'relative',
          }}
        >
          <Typography
            sx={{
              position: 'absolute',
              top: '10px',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: '0.8rem',
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              maxWidth: '90%',
            }}
          >
            Last 12 Months Sales Trend
          </Typography>
          <Typography
            sx={{
              fontSize: '1rem',
              fontWeight: 'light',
              color: 'rgba(255, 255, 255, 0.7)',
            }}
          >
            [Graph]
          </Typography>
        </Box>
      </Box>

      {/* Add chatbot at the bottom */}
      <Chatbot />
    </>
  );
}

export default Analytics;

