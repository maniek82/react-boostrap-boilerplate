var React = require("react");

var WeatherMessage = ({temp,location,description,humidity}) => {
   
        return (
        	
            <h3> It's it {temp} in {location} weather {description} humidity {humidity} </h3>
            )
        };
module.exports = WeatherMessage;