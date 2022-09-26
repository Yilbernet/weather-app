import axios from 'axios';
import { useEffect, useState } from 'react';
import Loading from './components/Loading';
import WeatherCard from './components/WeatherCard';

function App() {

  const [coords, setCoords] = useState();
  const [weather, setWeather] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [temperature, setTemperature] = useState();

  // ----- Petición de la ubicación ----- //

  useEffect(() => {
    const success = (pos) => {
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
      setCoords(obj);
    }
    
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  // ----- Petición del clima ----- //

  useEffect(() => {
    if (coords) {
      const KEY = '59583d516a36ed1f553d4d48236663f0';
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${KEY}`;
      axios.get(URL)
        .then(res => {
          setTimeout (() => {
            const celsius = (res.data.main.temp -273.15).toFixed(2);
            const farenheit = ((celsius * (9 / 5)) + 32).toFixed(2);
            setTemperature({celsius, farenheit});
            setWeather(res.data);
            setIsLoading(false);
          }, 100)
        })
        .catch(err => console.log(err))
    }
  }, [coords]);

  return (
    <div className="App">
      {
      isLoading ?
      (<Loading />)
      :
      (<WeatherCard weather={weather} temperature={temperature} />)
      }
    </div>
  )
}

export default App
