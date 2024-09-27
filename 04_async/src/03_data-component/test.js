import { useEffect, useState } from "react";

const Weather = ()=> {
    const API_KEY = '207a52923e0d2e1ca4acea1ce48628fc';

    const [position,setPosition] = useState({});
    const [cityName,setCityName] = useState("");
    const [weather,setWeather] = useState({});
    const [wind,setWind] = useState({});

    const getPosition = () =>{
        return (
            new Promise((resolve,reject) =>{
            
            navigator.geolocation.getCurrentPosition((currentPosition)=>{ //이거머였지...
                setPosition({
                    longitude : currentPosition.coords.longitude,
                    latitude : currentPosition.coords.latitude
                });
                resolve(currentPosition.coords);
            })
        })
        )
    }
    const getWeather = (coords) =>
    {
        return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${API_KEY}`)
        .then(r=>r.json())
    }

    useEffect(()=>{
        
        async function setWeatherState(){
            const Position = await getPosition();
            const Weather = await getWeather(Position);       
             
            setCityName(Weather.name);
            setWeather(Weather.weather[0]);
            setWind(Weather.wind);
           
        }
                            
        setWeatherState();
        },[]);
 

    return(
        <>
          <h3>오늘의 날씨</h3>
          <h4>{`경도 : ${position.longitude} 위도 : ${position.latitude}`}</h4>
          <h4>{`조회 도시 : ${cityName}`}</h4>
         <h4>{`날씨 : ${weather.main} 날씨 설명 : ${weather.description}`}</h4>
         <h4>{`풍향  : ${wind.deg}도 풍속 : ${wind.speed}m/s`}</h4>
        </>
    )
    
}
export default Weather;