import axios from 'axios';
// import WEATHER_KEY from '@env'
const WEATHER_KEY= '0574f7310aac987459fe294984066659';

const baseUrl = 'https://api.openweathermap.org';

const ApiService = {

    async get(lat, lon){
        return axios
        .get(`${baseUrl}/data/2.5/weather?lat=${lat}&lon=${lon}&unit=mettric&appid=${WEATHER_KEY}`);

    }


};

export { ApiService };