import React from 'react';
import './Weather.css';
//import ClearIcon from '../Clear.png';  // Adjust the path based on the actual location of Clear.jpeg
import CloudyIcon from '../cloudy.png';  // Adjust the path based on the actual location of cloudy.jpg
 import ThunderIcon from '../thunder.png';  // Adjust the path based on the actual location of thunder.jpg
import WindIcon from '../wind.png';  // Adjust the path based on the actual location of wind.jpg
//import searchIcon from '../search.png';
const WeatherApp =() => {
  
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(element.value)}&units=Metric&appid=${apiKey}`;
    let response = await fetch(url);
  
    //  
    let data = await response.json();
  
    // Check if the required properties exist in the response
    if (!data || !data.main || !data.main.humidity || !data.wind || !data.wind.speed || !data.main.temp || !data.name) {
      console.error("Invalid data structure received from the API");
      return;
    }
  
    const Humidity = document.getElementsByClassName("humidity-percentage");
    const Wind = document.getElementsByClassName("wind-rate");
    const temperature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");
  
    Humidity[0].innerHTML = data.main.humidity;
    Wind[0].innerHTML = data.wind.speed;
    temperature[0].innerHTML = data.main.temp;
    location[0].innerHTML = data.name;
  };
  
  return (
   

    <div className="container">
      <form className="d-flex" role="search">
        <input className="form-control me-2 justify-content"style={{height:'50px'}} type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success "onClick={()=>{search()}} type="submit">Search</button>
      </form>
      
      <div className="weatherImage" style={{height:'150px'}}>
      <img src={CloudyIcon} alt=""style={{height:'150px'}} />
      </div>
      <div className="weather-temp" style={{color:'white' ,fontFamily:`''Times New Roman', serif;'`}}>24&deg;C </div>
      <div className="weather-location"style={{color:'white' ,fontFamily:`''Times New Roman', serif;'`}}>London</div>

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