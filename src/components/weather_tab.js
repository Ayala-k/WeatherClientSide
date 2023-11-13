import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';


export default function WeatherTab(props) {

    const [data, setData] = useState('');

    const fetchData = async () => {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.location}&appid=8ee633956bad6ae1965b557a94ecfcba&units=metric`;
        const response = await fetch(url);

        const fetchedData = await response.json();
        setData(fetchedData);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const translateWeatherCondition = (condition) => {
        const translations = {
            'Thunderstorm': 'סופה',
            'Drizzle': 'רסס',
            'Rain': 'גשם',
            'Snow': 'שלג',
            'Clear': 'בהיר',
            'Clouds': 'מעונן',
        };
        return translations[condition] || condition;
    };

    return (
        <div>
            <div className='top_div' dir="rtl">
                
                <section>
                    <h2>{props.location}</h2>
                    <p>{data && translateWeatherCondition(data.weather[0].main)}</p>
                </section>

                {data && data.main.feels_like < 20 &&
                    <FontAwesomeIcon icon={faBolt} size="3x" color="darkblue"/>}

                {data && data.main.feels_like >= 20 && data.main.feels_like<=30 &&
                    <FontAwesomeIcon icon={faCloud} size="3x" color="lightgray" />}

                {data && data.main.feels_like >=30  &&
                     <FontAwesomeIcon icon={faSun} size="3x" color="yellow" />}
            </div>

            <div className='bottom_div' dir="rtl">
                <section>
                    <span>טמפ' נמדדת</span>
                    <span dir="ltr">{data && data.main.temp}°C</span>
                </section>

                <section>
                    <span>טמפ' מורגשת</span>
                    <span dir="ltr">{data && data.main.feels_like}°C</span>
                </section>

                <section>
                    <span>לחות</span>
                    <span dir="ltr">{data && data.main.humidity}%</span>
                </section>

            </div>
        </div>
    );
}



