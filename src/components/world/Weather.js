import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    WiDaySunny,
    WiCloud,
    WiCloudy,
    WiRain,
    WiSnow,
    WiThunderstorm,
    WiSprinkle,
  } from 'react-icons/wi';
  
import "./Weather.scss"

const Weather = ({c}) => {
    console.log(c)
    const defaultCity = 'New York';
    const city = c ? c : defaultCity;
    const [currentWeather, setCurrentWeather] = useState();
  const [forecastData, setForecastData] = useState([]);
  const apiKey = 'f6a1775bf8bc647827a8c1edbdaa0628'; // Replace with your OpenWeatherMap API key

  const getWeatherIcon = (weather) => {
    const lowerCaseWeather = weather.toLowerCase();
  
    if (lowerCaseWeather.includes('rain')) {
      return <WiRain />;
    }
    if (lowerCaseWeather.includes('snow')) {
        return <WiSnow />;;
      }
    if (lowerCaseWeather.includes('snows')) {
    return <WiSnow />;;
    }
    if (lowerCaseWeather.includes('clear')) {
    return <WiDaySunny />;
    }
    if (lowerCaseWeather.includes('clouds')) {
        return  <WiCloud />;
        }
      
  
    switch (lowerCaseWeather) {
      case 'sunny':
        return <WiDaySunny />;
      case 'clouds':
        return <WiCloud />;
      case 'overcast clouds':
        return <WiCloudy />;
      case 'snow':
        return <WiSnow />;
      case 'thunderstorm':
        return <WiThunderstorm />;
      case 'drizzle':
        return <WiSprinkle />;
      default:
        return null;
    }
  };

  
  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        // console.log(res)
        setCurrentWeather(res.data)
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
        );
        console.log(response)

        setForecastData(response.data.list);
        
      } catch (error) {
        console.error('Error fetching forecast data:', error);
      }
    };

    fetchForecast();
  }, [city]);

  return (
    <div className="weather">
        <h1 className="city">{city.toUpperCase()}</h1>
        <div className="weather-container">
        <div className="current-weather">
            <h3>Current Weather</h3>
            {currentWeather ?(

            <>
                <h1>{getWeatherIcon(currentWeather.weather[0].description)}</h1>
                <div className="current">
                    <p>Temperature: {currentWeather.main.temp}°C</p>
                    <p>Weather: {currentWeather.weather[0].description}</p>
                    <p>Wind Speed: {currentWeather.wind.speed} m/s</p>

                </div>
               
            </>
        ) : (
            <p>Loading...</p>
        )}

        </div>
        <div className="forecast-weather">
            <h3>5-Day Weather Forecast</h3>
            <div className="forecast-container">          
                {forecastData.length > 0 ? (
                    forecastData.filter((forecast) => forecast.dt_txt.endsWith('15:00:00'))
                    .map((forecast, index) => (
                    <div  className="forecast" key={index}>
                        <p className="bold">{forecast.dt_txt.split(' ')[0]}</p>
                        <h1>{getWeatherIcon(forecast.weather[0].description)}</h1>
                        <p>{forecast.weather[0].description}</p>
                        <p>{forecast.main.temp}°C</p>
                    </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            
        </div>
        

      
    </div>
        
    </div>
    
  );
};

export default Weather;
