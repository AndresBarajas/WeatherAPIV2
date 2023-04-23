import React from 'react';
import logo from './logo.svg';
import './App.css';
import { getAuth, signInAnonymously } from 'firebase/auth';
import { getToken, onMessage } from "firebase/messaging";
import { messaging } from "./firebase";
import { ToastContainer, toast } from 'react-toastify';
import { async } from '@firebase/util';
import { useState } from 'react';






function App() {

  const [weatherData, setWeatherData] = useState([]);

  const WeatherDataCities = async () => {
    const cities = ['Osaka', 'Oita', 'Tokio', 'Nagoya', 'Kioto'];
    const apiKey = 'bb8c78d5f15dc590c735529204622ed1';
    const units = 'metric';
    const promises = cities.map(async city => {
      const response = await fetch(`https:api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`);
      const data = await response.json();
      return data;
    });
    const data = await Promise.all(promises);
    setWeatherData(data);
  };
  const WeatherDataCity = ({ data }) => (
    <div class="text-center"> <div class="card" style={{ "width": "18rem" }}>
        <img src="/images/weather.png" width={80}/>       
        <h3>{data.name}</h3>
        <br></br>
        <h3>{data.main.temp} °C</h3>
        <br></br>
        <h3>{data.weather[0].description}</h3>
        <br></br>
        <h3>humidity {data.main.humidity} %</h3>
        <br></br>
        <h3>Wind {data.wind.speed} km/h</h3>
        <br></br>
      </div>
    </div>

  );
  const WeatherPutData = weatherData.map((data, index) => <WeatherDataCity key={index} data={data} />);

  const login = () => {
    signInAnonymously(getAuth()).then(usuario => console.log
      (usuario));
  }

  const activarMensajes = async () => {
    const token = await getToken(messaging, {
      vapidKey: "BP-ApQyMRq8fJWrVY2GtE1lAokot5ek0r-DC23lUIDRiZfav8PWtVTBPhURzCKXZL0IGBrxOGeFVNw0Zx1Gvxe0"
    }).catch(error => console.log("error al generar el token perro :v"));

    if (token) console.log("Este es tu token: " + token);
    if (!token) console.log("No tienes token perro")
  }

  React.useEffect(() => {
    onMessage(messaging, message => {
      console.log("Tu mensaje: ", message);
      toast(message.notification.title);
    })

  }, []);

  return (
    <div className="details">
      <div className="weather">
        <div className="search">
          
          <button onClick={WeatherDataCities} type="button"><img src="/images/search.png" alt="" width={30} /></button>
          {WeatherPutData} {activarMensajes}

        </div>
      </div>
    </div>
  );

}

function isPushNotificationSupported() {
  return "serviceWorker" in navigator && "PushManager" in window;
}

isPushNotificationSupported()

export default App;

