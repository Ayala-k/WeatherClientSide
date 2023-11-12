import React, { useState } from 'react';
import WeatherTab from './weather_tab'
import "../style/main.css"

export default function Main(props) {

    return (
        <div>
            <h1>תחזית מסביב לעולם</h1>
            <div className='main_component'>
                <WeatherTab location="ניו יורק"></WeatherTab>
                <WeatherTab location="לונדון"></WeatherTab>
                <WeatherTab location="אלסקה"></WeatherTab>
                <WeatherTab location="אילת"></WeatherTab>
            </div>
        </div>
    );

}
