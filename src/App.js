import React from "react";
import Weather from "./Weather";
import Penguin from "./Penguin";

import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-11 application">
          <div className="container">
            <Weather defaultCity="Orense" />
            <footer>
              This project was coded by Victoria Ruiz and is {""} 
              <a href="https://github.com/vicrufer/react-weather-app" target="_blank" rel="noreferrer">
                open-sourced on Github
              </a>
            </footer>
          </div>
        </div>      
        <div className="col-1 penguin">
          <Penguin /> 
        </div>
      </div>
    </div>
  );
}

