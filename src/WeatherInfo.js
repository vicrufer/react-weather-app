import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function WeatherInfo(props) {
    return (
        <div className="Weatherinfo">
            <h1>
                {props.data.city}
            </h1>
            <ul>
                <li><FormattedDate date={props.data.date} /></li>
                <li className="text-capitalize">{props.data.description}</li>
            </ul>
            <div className="row main-temp">
                <div className="col-6 right down">
                    <WeatherIcon code={props.data.icon} color="white" size={82} />
                </div>
                <div className="col-6 no-margin">
                    <WeatherTemperature celsius={props.data.temperature} />
                </div>
            </div> 
            <div className="row side-data">
                <div className="col-6 right">
                    Humidity: {props.data.humidity}%
                </div>
                <div className="col-6">
                    Wind: {props.data.wind} km/h
                </div>
            </div>
        </div>
    );
}