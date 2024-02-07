// BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import data from './data'; // Assuming data.js is in the same directory

const BarChart = () => {
  // Extracting labels and data from the imported data object
  const labels = data.map(item => item.label);
  const chartData = data.map(item => item.value);


  const chartDataObject = {
    labels: labels,
    datasets: [
      {
        label: 'Bar Chart',
        data: chartData,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h1>Bar Chart</h1>
      <div style={{ width: '600px', height: '400px' }}>
        <Bar data={chartDataObject} />
      </div>
    </div>
  );
};

export default BarChart;
