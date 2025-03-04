import React from 'react';
import Header from './components/header';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';
import { WeatherResponse } from './interfaces/weather';
import WeatherForecast from './components/weatherForecast';



function App() {
  const [weather, setWeather] = React.useState<WeatherResponse | null>(null);

  const getCityWeather = async (cityName: string) : Promise<void> => {
    if (cityName || cityName.trim() !== '') {
      const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=2156c13c4ca2465fab2105823250403&q=${cityName}&days=5&aqi=no&alerts=no`);
      if(res.ok) {  
        const data:WeatherResponse = await res.json();
        setWeather(data);
      }
    }
  }

  return (
    <div>
      <Header />
      <Container maxWidth="md" className='mt-12'>
          <Typography variant="body1" gutterBottom>
              Stay ahead of the weather with our easy-to-use Weather Forecast App! 
              Simply search for any city to get real-time weather updates
          </Typography>
          <div className='mt-4'>
            <Box sx={{ width: '75%' }}>
            <TextField
              id="outlined-multiline-flexible"
              label="City Name"
              placeholder="Enter the city name that you want to know the weather"
              multiline
              maxRows={4}
              fullWidth
              onBlur={(event) => getCityWeather(event.target.value)}
            />
            </Box>
            <div className='mt-4'>
              <WeatherForecast weather={weather} />
            </div>
          </div>
      </Container>
    </div>
  );
}

export default App;
