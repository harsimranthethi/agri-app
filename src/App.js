
// App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SensorFeedList from './SensorFeedList';

function App() {
  return (
    <div className="App" class="container p-5">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigate to="/sensorfeed/list" replace={true} />}/>
            <Route path="/sensorfeed/list" exact element={<SensorFeedList/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
