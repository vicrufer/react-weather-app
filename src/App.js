import React from "react";
import Weather from "./Weather";

import './App.css';

export default function App() {
  return (
    <div className="App">
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
  );
}

