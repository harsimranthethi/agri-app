
// App.js
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SensorFeedList from './SensorFeedList';
import BarChart from './BarChart';

function App() {
 
 
  return (
    <div className="App" className="container p-5">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigate to="/sensorfeed/list" replace={true} />}/>
            <Route path="/sensorfeed/list" exact element={<SensorFeedList/>} />
            <Route path="/bar" exact element={<BarChart/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
