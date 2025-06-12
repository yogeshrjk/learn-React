import React from 'react';
import {useWeather} from "../context/weather.jsx";

const Input = () => {
    const weather = useWeather()

    return (
        <div className="search">
            <input placeholder="search city" value={weather.searchCity}
                   onChange={(e) => weather.setSearchCity(e.target.value)}/>
        </div>
    );
};

export default Input;