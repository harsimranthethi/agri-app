import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios'; //for http requests
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Bar Chart',
    },
  },
};

Chart.register(CategoryScale);


export default function App() {


  function loadData(){
    var server = process.env.NODE_ENV=="development"?"http://localhost:5566":"" //"http://localhost:5556"
    axios.get(server +'/sf/findAverageTemperatureBySensor')
      .then(response => {
        // Update state with fetched data
        console.log(response.data)
        var obj = response.data
        console.log(obj)
        setChartData({
          labels: obj[0], 
          datasets: [
            {
              label: "Sensors Avg Temp",
              data: obj[1],
              backgroundColor: [
                "rgba(75,192,192,1)",
                "#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0"
              ],
              borderColor: "red",
              borderWidth: 2
            }
          ]
        })
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
  useEffect(loadData, []); // Empty dependency array ensures the effect runs once on mount


  const [chartData, setChartData] = useState({
    labels: [], 
    datasets: [
    ]
  });
 
  return (
    <div>
      <p>Using Chart.js in React</p>
      <div class="row">
        <div class="col-6">
          <Bar options={options} data={chartData}></Bar>
        </div>
      </div>
    </div>
  );
}

