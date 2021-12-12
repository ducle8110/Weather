import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'
import { API_KEY } from './Config/key';
import axios from 'axios';
import WeatherInfo from './WeatherInfo';

function App() {
  const [weatherData, setWeatherData] = useState([])

  useEffect(() => {
    getWeatherData();
  }, []);
  const getWeatherData = async (event) => {
    try {
      let result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&appid=${API_KEY}&units=metric`)
      await setWeatherData(result.data);
    } catch (error) {
      setWeatherData(null);
      console.log(error);
    }
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      getWeatherData(event);
      showWeatherInfo()
      console.log(weatherData);
    }
  }
  const showWeatherInfo = () => {
    if (weatherData != null) {
      return (
        <span>
          weatherData?.main?.temp
        </span>

      )
    }
  }
  return (
    <div className={!weatherData ? 'AppDefault' : weatherData?.main?.temp > 16 ? 'App' : 'App2'}>
      <input type="text" onKeyPress={(event) => handleKeyPress(event)} className="search"></input>
      {weatherData ? <WeatherInfo weatherData={weatherData} /> : null}
    </div>
  );
}

export default App;
