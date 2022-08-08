import { Button, Card } from "react-bootstrap";
import moment from 'moment';

const refresh = () => {
    window.location.reload();
  }

function WeatherCard({weatherData}) {
    return (
    <>
    <Card className="weather-card">
        <Card.Body>
            <p className="header">{weatherData.name}</p>
            <Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh} />
            <div className="flex">
                <p className="day">Day: {moment().format('dddd')}</p>
                <p className="day">Date: {moment().format('LL')}</p>
            </div>
            <div className="flex">
                <p className="forecast">Forecast:{weatherData.main.forecastday_date}</p>
                <p className="temp">Temperature: {weatherData.main.temp_c} </p>
                <p className="temp">Humidity: {weatherData.main.humidity} %</p>
            </div>
            <div className="flex">
                <p className="sunrise-sunset">Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
                <p className="sunrise-sunset">Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
            </div>
        </Card.Body>
    </Card>
    <a href="https://www.weatherapi.com/" title="Free Weather API"><img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt="Weather data by WeatherAPI.com" border="0" /></a>
    </>
)
}

export default WeatherCard;