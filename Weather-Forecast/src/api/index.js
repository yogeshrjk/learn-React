const baseURL = "https://api.weatherapi.com/v1/current.json?key=b693bcd92f1449cabbc154639250406"
export const getWeatherData = async (city) => {
    const response = await fetch(`${baseURL}&q=${city}&aqi=no`);
    return await response.json();
}

export const getWeatherDataForLocation = async (lat, lon) => {
    const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=no`);
    return await response.json();
}
