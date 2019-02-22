import WeatherCard from './WeatherCard';
import React from 'react';
import axios from 'axios';

const API_KEY = 'ab7484118739e4b06edd3a9e28990288';

class App extends React.Component {
    state = {
        temp: '',
        description: '',
    }





    getWeather = async (e) => {
        e.preventDefault();
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}&units=metric`)
        .then((res) => {
            console.log(res)
            this.setState({ temp: res.data.main.temp, description: res.data.weather[0].description });

        })
    }



    render() {
        return (
    <div className="ui container">
        <WeatherCard getWeather={this.getWeather} temp={this.state.temp} description={this.state.description}/>
    </div>
        )
    }
};

export default App;