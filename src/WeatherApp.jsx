import { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        //general weather information
        city: "Agra",
        feelsLike: 35.95,
        humidity: 5,
        temp: 39.54,
        tempMax: 39.54,
        tempMin: 39.54,
        weather: "scattered clouds"
    });

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Weather App</h2>
            <SearchBox ></SearchBox>
            {/* passing info as prop */}
            <InfoBox info={weatherInfo}></InfoBox>
            <hr style={{ marginTop: "1rem" }}></hr>
            <a href='https://github.com/chiragyadav916' target='blank'><i class="fa-brands fa-github"></i></a>
        </div>
    );
}