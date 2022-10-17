import { React, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Sidebar } from "./sidebar.js"
import { fetchMetar } from './fetch-metar.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const icaoChanged = event => 
{
  departure_metar = fetchMetar(event.target.value)
  ReactDOM.render(departure_metar, document.getElementById("dep_metar"))
}

let departure_metar = "";

class HomePage extends React.Component
{
  render()
  {
    return (
      <div className="homepage">
        <Sidebar />
        <div className="info">
          <p>Callsign:</p>
        </div>
        <div id="icao">
          <div id="dep">
            <label>Departure</label> <br/>
            <input onChange={icaoChanged}></input>
          </div>
          <div id="arr">
            <label>Arrival</label> <br/>
            <input onChange={icaoChanged}></input>
          </div>
          <div className="metar">
            <p id="dep_metar" name="dep">
              
            </p>
            <p name="arr">
              metar
            </p>
          </div>
        </div>
      </div>
    )
  }
  
}
root.render(<HomePage />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
