import React, { useState, useEffect } from 'react'


const WeatherCapitalCity = ({capitalCity, imgStyle}) => {
    const [capitalWeatherObject, setCapitalWeatherObject] = useState(false);

    //if the dependency array it's not the empty array, will be loaded every second (or more)
    useEffect(() => {
        fetch(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_KEY_WEATHER}&query=${capitalCity}`)
        .then(resp => resp.json())
        .then(weatherObject => {
            setCapitalWeatherObject(weatherObject)
        })
    }, [])

    //this will return the full object only after the object is loaded
    if (capitalWeatherObject !== false) {
        return (
            <>
                <h1>Weather in {capitalCity}</h1>
                <p><b>Temperature: </b> {capitalWeatherObject.current.temperature} celcius.</p>
                <img alt={capitalWeatherObject.current.weather_descriptions[0] } style={imgStyle} src={capitalWeatherObject.current.weather_icons[0]}></img>
                <p><b>Wind: </b> {capitalWeatherObject.current.wind_speed} mph direction {capitalWeatherObject.current.wind_dir}</p>
            </>
        )
    }

    //If it's false, it's just the placeholder
    else {
        return (
            <p>
                Loading weather data...
            </p>
        )
    }
}
export default WeatherCapitalCity