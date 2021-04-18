import React from "react";
import Weather from "./Weather";
import background from "./images/background.jpg";

import './App.css';

export default function App() {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <div className="App">
        <div className="container">
          <Weather defaultCity="Orense" />
          <footer>
            This project was coded by Victoria Ruiz and is {""} 
            <a className="github" href="https://github.com/vicrufer/react-weather-app" target="_blank" rel="noreferrer">
              open-sourced on Github</a>
          </footer>
        </div>
      </div>
    </div>
  );
}

