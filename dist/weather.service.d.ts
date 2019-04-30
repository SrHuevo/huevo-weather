import { AxiosPromise } from 'axios';
import { CoordsWeather, CurrentWeather } from './dto/current-weather.dto';
export declare class WeatherService {
    private API_KEY;
    private currentWeatherResource;
    private coordsWeatherResource;
    constructor();
    getCurrentWeatherByCity(city: string, countryCode?: string): AxiosPromise<CurrentWeather>;
    getCurrentWeatherByCoords(lat: number, lon: number): AxiosPromise<CoordsWeather>;
}
