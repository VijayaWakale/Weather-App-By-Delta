import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo]= useState({
        city: "Delhi",
        feelsLike: 31.24,
        humidity: 27,
        temp: 24.05,
        tempMax: 24.05,
        tempMin: 24.05,
        weather: "haze",

    });


    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);

    };
    
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App By Delta</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox Info={weatherInfo} />
        </div>
     
    );
}