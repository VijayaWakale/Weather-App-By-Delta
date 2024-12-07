import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({ updateInfo }){
    let [City, setCity]= useState("");
    let [error, setError]= useState(false);
     const API_URL="http://api.openweathermap.org/data/2.5/weather";
     const API_KEY="5c51e88d539facdecfbc4f34cce5b23a";

     let getWeatherInfo= async()=>{
        try{
       let response= await fetch(`${API_URL}?q=${City}&appid=${API_KEY}&units=metric`
     );

       let jsonResponse= await response.json();
       console.log(jsonResponse);
       let result={
        city:City,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
       };
       console.log(result);
       return result;
    } catch(err){
        throw err;
    }
     };

    let handleChange=(evt)=>{
     setCity(evt.target.value);
    };

    let handleSubmit= async (evt)=>{
        try{
        evt.preventDefault();
        console.log(City);
        setCity("");
        let newInfo= await getWeatherInfo();
        updateInfo(newInfo);
        }catch(err){
            setError(true);
        }
    };
    return(
        <div className='SearchBox'>  
        {/* <h3>Search For The Wheather</h3> */}
        <form onSubmit={handleSubmit}>
        <TextField 
        id="City" 
        label="City Name" 
        variant="outlined" 
        required 
        value={City}
        onChange={handleChange}
        />
        <br/>
        <br/>
        <Button variant="contained" type='submit'>Search</Button>
        {error && <p>No such place exits!</p>};
      </form>
        </div>
    );
};