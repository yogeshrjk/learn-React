import {useEffect} from "react";
import './App.css'
import Input from "./components/input.jsx";
import Card from "./components/card.jsx";
import Button from "./components/button.jsx";
import {useWeather} from "./context/weather.jsx";

function App() {
    const weather = useWeather();
    useEffect(() => {
        weather.fetchCurrentUserLocation();
    }, [])
    return (
        <div className="App">
            <h1>Weather Forecast</h1>
            <Input/>
            <Button onClick={weather.fetchData} value="Search"/>
            <Card/>
            {/*<Button value="Refresh"/>*/}
        </div>
    )
}

export default App
