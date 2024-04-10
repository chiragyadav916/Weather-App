import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import React from 'react';
import "./SearchBox.css";

export default function SearchBox() {
    let [city, setCity] = useState("");
    const API_URL = process.env.REACT_APP_API_URL;
    const API_KEY = process.env.REACT_APP_API_KEY;

    // async function getWeatherInfo() {
    let getWeatherInfo = async () => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        // console.log(jsonResponse);

        //object to store weather info
        let result = {
            //city:city
            city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        };
        console.log(result);
    };

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        setCity("");
        getWeatherInfo();
    }

    return (
        <div className='SearchBox'>
            {/* <h1>Search for Weather!</h1> */}
            {/* for every form we need to associate state variable */}
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined"
                    // after adding onChange, we able to add text in TextField
                    required value={city} onChange={handleChange} />
                <br></br>
                <br></br>
                <Button variant="contained" type='submit'>Search</Button>
            </form>
        </div>
    )
}