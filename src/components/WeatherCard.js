import React from 'react';


class WeatherCard extends React.Component {
    state = { city: '' };



    render = (props) => {
        return (
            <div>
                <div className="ui card">
                    <form onSubmit={this.props.getWeather}>
                        <button className="ui button">Get Weather</button>
                        <select className="ui dropdown">
                            <option value="">London</option>
                            <option value="">Madrid</option>
                            <option value="">Paris</option>
                       </select>
                    </form>
                    <div className="image">
                        <img src={require('./sun.png')} />
                    </div>
                    <div className="content">
                        Today's temp is {this.props.temp}º
                    </div>
                    <div className="description">
                       Description:  {this.props.description}
                    </div>
                </div>
                
       
            </div>

            
        );
    }
};













export default WeatherCard;