var React = require("react");
var WeatherForm = require("WeatherForm");
var WeatherMessage = require("WeatherMessage");
var openWeatherMap = require("openWeatherMap");


var Weather = React.createClass({
    
    getInitialState: function () {
        return {
            isLoading: false
            }
    },
    
    handleSearch: function (location) {
        var that = this;

        this.setState({
            isLoading: true
        });
        openWeatherMap.getTemp(location).then(function (res) {
        
            that.setState({
                location: location,
                temp: res.data.main.temp,
                description: res.data.weather[0].description,
                humidity: res.data.main.humidity,
                isLoading: false
                
            })
        }, function (errorMessage) {
            that.setState({isLoading: false});
            alert(errorMessage);
        });
  
    },
    
    render: function() {
        var {isLoading, temp,location,description,humidity} = this.state;
       function renderMessage() {
        if(isLoading) {
            return <h3>Fetching weather...</h3>;
        } else if(temp && location){

             return <WeatherMessage  humidity={humidity} location ={location} temp={temp} description={description}  />;
        }
       }
        return (
         <div>
            <h3>Weather</h3>
            
                <WeatherForm onSearch = {this.handleSearch}/>
               {renderMessage()}
            
        </div>
            );
    }
    
});
module.exports = Weather;