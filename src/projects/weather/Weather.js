import React, { Component } from 'react';
import { Paper } from '@material-ui/core';
import './Weather.css';
import ZipForm from './ZipForm';
import WeatherList from './WeatherList';
import CurrentDay from './CurrentDay';
import get from 'axios';

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zipcode: "",
            city: {},
            dates: [],
            selectedDate: null
        };
        this.url = "https://api.openweathermap.org/data/2.5/forecast/daily?zip=";
        this.apikey = "&units=imperial&appid=4319ff27021579d6c2adf5fc9c83b5eb";

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onDayClick = this.onDayClick.bind(this);

    }//end of constructor

    onFormSubmit(zipcode) {
        //using axios for ajax call instead of fetch
        get(this.url + zipcode + this.apikey)
            .then(({ data }) => {
                const { city, list: dates } = data;     //good example of destructuring an object. this.state.dates is being assigned data.list
                this.setState({ zipcode, city, dates, selectedDate: null });
            })
            .catch(error => {
                alert(error);
            })
    }

    onDayClick(index) {
        let clickedDay = this.state.dates[index];
        this.setState({ selectedDate: clickedDay });
    }

    render() {
        let day = (this.state.selectedDate != null) ? <CurrentDay day={this.state.selectedDate} city={this.state.city} /> : "";
        return (
            <Paper>
                <div className="weatherbody">
                    This is my weather app. we'll use {this.url} for getting weather data.
       <ZipForm onSubmit={this.onFormSubmit} />
                    <WeatherList days={this.state.dates} city={this.state.city.name} onDayClick={this.onDayClick} />
                    {day}
                </div>
            </Paper>
        )
    }

} //end of App class

export default Weather;
