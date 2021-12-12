import React, { useState } from 'react'

export default function WeatherInfo(props) {
    return (
        <>
            <div className="weatherInfo">
                <div className='temp'>
                    <label>Temperature: </label>
                    <label>{Math.round(Number(props.weatherData?.main?.temp)) + '℃'}</label>
                </div>
            </div>
        </>
    )
}
