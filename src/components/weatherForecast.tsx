import React from 'react';
import Card from '@mui/material/Card';
import { CardContent, CardHeader } from '@mui/material';
import { WeatherResponse } from '../interfaces/weather';

interface WeatherForecastProps {
    weather: WeatherResponse | null;
}

const WeatherForecast = (props: WeatherForecastProps) => {
    const { weather } = props;
    return (
        <Card>
              <CardHeader title="Weather Forecast" />
              <CardContent>
                <ul>
                  {weather && weather.location.name ? <li className='pb-2'>Location: {weather.location.name}</li> : null}
                  {weather && weather.current.condition.text ? <li className='pb-2'>Condition: {weather.current.condition.text}</li> : null}
                  {weather && weather.forecast.forecastday.map((day) => (
                    <li key={day.date} className="grid grid-cols-3 items-center text-center p-4 bg-white shadow-md rounded-lg border border-gray-200">
                      <span className="text-gray-500 font-medium">{day.date}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-blue-500 font-bold">{day.day.maxtemp_c}°C</span>
                        <span className="text-gray-500">/</span>
                        <span className="text-red-500 font-bold">{day.day.mintemp_c}°C</span>
                      </div>
                      <span className="text-gray-700 font-semibold">{day.day.condition.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
    )
}

export default WeatherForecast;