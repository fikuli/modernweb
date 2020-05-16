import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Result = (props) => {
    const [ weather, setWeather ] = useState({})

    const api_key = process.env.REACT_APP_API_KEY

    const url = 'http://api.weatherstack.com/current?access_key=' + api_key +  '&query=' + props.result.capital
    console.log(url)
    useEffect(() => {
        axios
          .get(url)
          .then(response => {
            setWeather(response.data.current)
          })
      }, [])

      console.log(weather.weather_icons)

    return (
        <div>
                <h1>{props.result.name}</h1>
                <div>capital {props.result.capital}</div>
                <div>population {props.result.population}</div>

                <h2>languages spoken</h2>
                {props.result.languages.map(eleman=> <li key={eleman.name}>{eleman.name}</li>)}

                <p><img height={'100px'} width={'100px'} src={props.result.flag}/></p>
                <h2>weather in {props.result.capital}</h2>
                <div>temperature: {weather.temperature} celcius</div>
                <div><img height={'100px'} width={'100px'} src={weather.weather_icons}/></div>
                <div>wind: {weather.wind_speed} mph direction {weather.wind_dir}</div>
                
            </div>
    )
}

export default Result