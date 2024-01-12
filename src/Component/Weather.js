import React, { useEffect, useState } from 'react';
import './Weather.css';
import CloudyIcon from '../cloudy.png';
import ThunderIcon from '../thunder.png';
import WindIcon from '../wind.png';

const WeatherApp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Delhi");
  const [temperature, setTemperature] = useState("24");

  const fetchApi = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=2196ed51639f7325c59259f2bfa0446d`;
      const response = await fetch(url);
      const resJson = await response.json();

      if (response.ok) {
        setCity(resJson.name);
        if (resJson.main) {
          const temperatureCelsius = (resJson.main.temp - 273.15).toFixed(2);
          setTemperature(temperatureCelsius);
        }
      } else {
        console.error('Error fetching weather data:', resJson.message);
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    fetchApi(); // Fetch and update weather data
  };

  useEffect(() => {
    fetchApi();
  }, [search]);
  return (
   

    <div className="container">
      <form className="d-flex" role="search">
        <input className="form-control me-2 justify-content" onChange={(event)=>{setSearch(event.target.value)}} value={search}style={{height:'50px'}} type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success "onClick={handleSearch} type="submit">Search</button>
      </form>
      
      <div className="weatherImage" style={{height:'150px'}}>
      <img src={CloudyIcon} alt=""style={{height:'150px'}} />
      </div>
      
      <div className="weather-location"style={{color:'white' ,fontFamily:`''Times New Roman', serif;'`}}>{city}</div>
      <div className="weather-temp" style={{color:'white' ,fontFamily:`''Times New Roman', serif;'`}}>{temperature}&deg;C </div>

      <div className="data-container">
        <div className="element">
          <img src={ThunderIcon} alt="" style={{height:'90px'}}/>
          <div className="data"style={{color:'white' ,fontFamily:`''Times New Roman', serif;'`}}>
            <div className="humdity-percentage">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={WindIcon} alt="" />
          <div className="data"style={{color:'white' ,fontFamily:`''Times New Roman', serif;'`}}>
            <div className="wind-rate">18km/h</div>
            <div className="text">Wind</div>
          </div>
        </div>
      </div>
    </div>
   
    
  );
};

export default WeatherApp;