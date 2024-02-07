import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios'; //for http requests

var currentPage = 1;

var searchStr = ""

const MovieList = () => {
  const [items, setItems] = useState([]);


  function moveNext(){
    currentPage++;
    loadData()
  }
  function movePrevious(){
    if(currentPage>1){currentPage--}
    loadData()
  }

  function searchChangeHandler(str){
    searchStr = str
    currentPage = 1 ;
    loadData()

  }


  function loadData(){
    var server = process.env.NODE_ENV=="development"?"http://localhost:5566":"" //"http://localhost:5556"
    axios.get(server +'/sf/list?page='+currentPage + "&searchStr=" + searchStr)
      .then(response => {
        // Update state with fetched data
        setItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
  useEffect(loadData, []); // Empty dependency array ensures the effect runs once on mount

  /*const handleEditClick = (id) => {
    console.log(`Edit button clicked for movie with ID ${id}`);
  };*/

  return (
    <div >
      <h1>Agri Sensor Feed - {process.env.NODE_ENV}</h1>


      <div class="row">
        <div class="col-md-3 pb-3">
          <input type="text" name="stringSearch" autocomplete="off" value={searchStr} onChange={(evt) => { searchChangeHandler(evt.target.value); }}/>
        </div>
        <div class="col-md-5">
        </div>
        <div class="col-md-4">
          <div class="pr-3">
            <button onClick={()=>movePrevious()}>&lt; Prev</button>
            <span class="p-2">{currentPage}</span>
            <button onClick={()=>moveNext()}>Next &gt;</button>
          </div>
        </div>
      </div>
      <br></br>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th width="10%">ID</th>
            <th>Sensor</th>
            <th>Field</th>
            <th>Temperature</th>
            <th>Humidity</th>
            <th>DateTime_Reading</th>
            
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>
                <Link to={`/movies/${item._id}/show`}>{item._id}</Link>
              </td>
              <td>{item.Sensor_Id}</td>
              <td>{item.Field_Id}</td>
              <td>{item.Temperature}</td>
              <td>{item.Humidity}</td>
              <td>{item.DateTime_Reading}</td>
                {/*
                <td>
                  <Link to={`/movies/${item._id}/edit`}>
                    <button>Edit</button>
                  </Link>
                </td>
                */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovieList;
