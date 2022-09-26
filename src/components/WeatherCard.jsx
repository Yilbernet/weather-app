import React, { useState } from 'react'

const WeatherCard = ({weather, temperature}) => {

  const [isCelsius, setIsCelsius] = useState(true);

  const changeTemperature = () => {setIsCelsius(!isCelsius)};

   console.log(weather);
   // library.add(faCloud);

  return (
    <article className='Card'>
      <h1 className='Card__Title'>Weather App</h1>
      <h2 className='Card__City'> {`${weather?.name}, ${weather?.sys.country}`} </h2>
      <img className='Card__Img' src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="Weather Icon" />
      <h3 className='Card__Item0'> <span>Temperature : </span> { (isCelsius) ? (`${temperature?.celsius} °C`) : (`${temperature?.farenheit} °F`)} </h3>
      <h3 className='Card__Item1'> <span>Description : </span> {`"${weather?.weather[0].description}"`} </h3>
      <h3 className='Card__Item2'> <span>Wind Speed : </span> {`${weather?.wind.speed} m/s`} </h3>
      <h3 className='Card__Item3'> <span>Clouds : </span> {`${weather?.clouds.all} %`} </h3>
      <h3 className='Card__Item4'> <span>Humidity : </span> {`${weather?.main.humidity} %`} </h3>
      <h3 className='Card__Item5'> <span>Pressure : </span> {`${weather?.main.pressure} hPa`} </h3>
      <button className='Card__Btn' onClick={changeTemperature}> {(isCelsius) ? ('Change to °F') : ('Change to °C') } </button> {/*Temp °F/°C*/}
    </article>
  )
}

export default WeatherCard