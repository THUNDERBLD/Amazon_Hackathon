import React, { useState } from "react";
import ResponsiveAppBar from "../Components/ResponsiveAppBar.jsx";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const CarbonQuest = () => {
  const [distance, setDistance] = useState("");
  const [emission, setEmission] = useState(null);

  const handleCalculate = () => {
    if (distance) {
      const emissionValue = (distance * 0.21).toFixed(2); // Assume 0.21 kg CO2 per km for the calculation
      setEmission(emissionValue);
    }
  };

  const journeyData = [
    { name: "Car", value: 240 },
    { name: "Bus", value: 120 },
    { name: "Bike", value: 20 },
    { name: "Walking", value: 0 },
  ];

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

  return (
    <div className="min-h-screen bg-gray-50">
      <ResponsiveAppBar />

      <div className="px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-900">CarbonQuest</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
        {/* Left (Master) Card */}
        <div className="border rounded-lg p-4 shadow-md lg:col-span-1">
          <h2 className="text-xl font-semibold mb-4">Journeys Completed</h2>
          <ul className="space-y-2">
            {journeyData.map((journey, index) => (
              <li key={index} className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">{journey.name}</span>
                <span className="text-gray-500">{journey.value} kg CO2</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right (Detail) Card */}
        <div className="border rounded-lg p-4 shadow-md lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Carbon Emission Calculator</h2>
          <div className="flex flex-col space-y-4">
            <input
              type="number"
              placeholder="Enter distance (km)"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              className="w-full max-w-md px-4 py-2 border rounded-lg"
            />
            <button
              onClick={handleCalculate}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Calculate Emission
            </button>
            {emission && (
              <div className="text-lg font-medium text-green-600">
                Estimated Emission: {emission} kg CO2
              </div>
            )}
          </div>
          <div className="mt-6">
            <PieChart width={400} height={250}>
              <Pie
                data={journeyData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                dataKey="value"
              >
                {journeyData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarbonQuest;
