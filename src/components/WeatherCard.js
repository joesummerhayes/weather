import React from 'react';
import { EventEmitter } from 'events';


class WeatherCard extends React.Component {
state = {term: ''};

onInputChange = (event) => {
    this.setState({ term: event.target.value })
};

onFormSubmit = (e) => {
    e.preventDefault();
    this.props.getWeather(this.state.term)
}
    


    render = (props) => {


        return (
            <div>
                <div className="ui card">
                    <form onSubmit={this.onFormSubmit} className="ui form">
                        <div className="field">
                            <label>Search For Your City</label>
                            <input
                            placeholder="city"
                            type ="text"
                            value = {this.state.term}
                            onChange={this.onInputChange}
                            />
                        </div>
                    </form>
                    <div className="image">
                        <img src={require('./sun.png')} />
                    </div>
                    <div className="content">
                        Location: {this.state.term}
                    </div>
                    <div className="content">
                        Temperature: {this.props.temp}º
                    </div>
                    <div className="content">
                       Description:  {this.props.description}
                    </div>
                </div>
                
       
            </div>

            
        );
    }
};













export default WeatherCard;