import React, { useState, useEffect } from 'react';


export default function WeatherTab (props) {

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
                {data && data.weather[0].icon && (
                    <img
                        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                        alt="Weather Icon"
                    />
                )}
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



