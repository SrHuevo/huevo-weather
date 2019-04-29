import { AxiosPromise } from 'axios';
import { CurrentWeather } from './dto/current-weather.dto';
export declare class WeatherService {
    private API_KEY;
    private currentWeatherResource;
    constructor();
    getCurrentWeatherByCity(city: string, countryCode?: string): AxiosPromise<CurrentWeather>;
}
