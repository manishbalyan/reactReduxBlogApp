import axios from 'axios';

const API_KEY = '9b69bedd62fffda1a72f3ecea3eee793';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
export const FEATCH_WEATHER = 'FEATCH_WEATHER';

export function fetchWeather(city) {
    const URL = `${ROOT_URL}&q=${city}`;
    const request = axios.get(URL);

    return{
        type:FEATCH_WEATHER,
        payload:request
    }
}