import React, {useEffect, useState} from 'react'
import Resume from '../../assets/Talha_Tahmid_Resume.pdf'
import axios from 'axios'

const Data = () => {

  const [temperature, setTemperature] = useState(null);
  const [weatherCondition, setWeatherCondition] = useState(null);

  

  useEffect(() => {
  const apiKey = '7908af7160052365c213b727ff96791a';
  const city = 'Arlington,us';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  
  
  

  axios.get(apiUrl)
      .then((response) => {
        setTemperature(response.data.main.temp);
        setWeatherCondition(response.data.weather[0].main);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  }, []);

  let aboutText;


  if (weatherCondition === 'Clear') {
    aboutText = `enjoying clear skies with a pleasant ${temperature}°F. Perfect day for outdoor activities!`;
  } else if (weatherCondition === 'Rain') {
    aboutText = `staying cozy indoors on this rainy day with ${temperature}°F. Reading a good book and sipping hot cocoa.`;
  } else if (weatherCondition === 'Snow') {
    aboutText = `embracing the winter wonderland with ${temperature}°F. Time for snowball fights and building snowmen!`;
  } else if (weatherCondition === 'Clouds') {
    aboutText = `having partly cloudy skies with a temperature of ${temperature}°F. It's a good day for outdoor activities.`;
  } else if (weatherCondition === 'Drizzle') {
    aboutText = `feeling the gentle drizzle with a temperature of ${temperature}°F. It's a perfect day for a cup of tea.`;
  } else if (weatherCondition === 'Thunderstorm') {
    aboutText = `battling the thunderstorm with a temperature of ${temperature}°F. Stay safe and cozy indoors.`;
  } else if (weatherCondition === 'Mist') {
    aboutText = `navigating through the mist with a temperature of ${temperature}°F. Stay cautious on the road.`;
  } else if (weatherCondition === 'Tornado') {
    aboutText = `warning: Tornado conditions with a temperature of ${temperature}°F. Seek shelter immediately!`;
  } else if (weatherCondition === 'Smoke') {
    aboutText = `dealing with smoky conditions with a temperature of ${temperature}°F. Stay indoors and limit outdoor activities.`;
  } else if (weatherCondition === 'Haze') {
    aboutText = `experiencing hazy weather with a temperature of ${temperature}°F. Reduced visibility, be cautious while driving.`;
  } else if (weatherCondition === 'Dust') {
    aboutText = `dealing with dusty conditions with a temperature of ${temperature}°F. Protect your eyes and respiratory system.`;
  } else if (weatherCondition === 'Fog') {
    aboutText = `navigating through dense fog with a temperature of ${temperature}°F. Drive carefully and use headlights.`;
  } else if (weatherCondition === 'Sand') {
    aboutText = `bracing for sandy conditions with a temperature of ${temperature}°F. Protect your eyes and stay indoors.`;
  } else if (weatherCondition === 'Ash') {
    aboutText = `dealing with ashfall with a temperature of ${temperature}°F. Protect yourself and your property.`;
  } else if (weatherCondition === 'Squall') {
    aboutText = `experiencing squally weather with a temperature of ${temperature}°F. Secure loose objects and be cautious.`;
  } else {
    // Default text for other conditions
    aboutText = `currently experiencing ${weatherCondition} weather with ${temperature}°F.`;
  }

  return (
    <div className="home__data">
        <h1 className="home__title">Talha Tahmid
        </h1>

        <h3 className="home__subtitle">CS@UTA</h3>
        <p className="home__description">Hey! I am {aboutText} 
        </p>

        <a href={Resume} className="button button--flex" without rel="noopener noreferrer" target="_blank">Resume 
        <svg
                class="button__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z"
                  fill="var(--container-color)"
                ></path>
                <path
                  d="M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z"
                  fill="var(--container-color)"
                ></path>
                <path
                  d="M13.25 13.7502H7.25C6.84 13.7502 6.5 13.4102 6.5 13.0002C6.5 12.5902 6.84 12.2502 7.25 12.2502H13.25C13.66 12.2502 14 12.5902 14 13.0002C14 13.4102 13.66 13.7502 13.25 13.7502Z"
                  fill="var(--container-color)"
                ></path>
                <path
                  d="M11.25 17.7502H7.25C6.84 17.7502 6.5 17.4102 6.5 17.0002C6.5 16.5902 6.84 16.2502 7.25 16.2502H11.25C11.66 16.2502 12 16.5902 12 17.0002C12 17.4102 11.66 17.7502 11.25 17.7502Z"
                  fill="var(--container-color)"
                ></path>
              </svg>
        </a>

        
    </div>
  )
}

export default Data