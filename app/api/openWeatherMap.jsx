var axios = require("axios");

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=3232e3b7608ff006ca936191ed60ce2e&units=metric&lang=pl';

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    
       return axios.get(requestUrl).then(function (res) {

            if(res.data.cod !=200 && res.data.message) {
                throw new Error(res.data.message)
            }else {
                console.log(res.data);
                return res;
                 
            }
        }, function (res) {
            throw new Error(res.data.message);
        });
    }
}











