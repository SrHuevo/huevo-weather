import axios, {AxiosPromise} from 'axios'
import {CurrentWeather} from './dto/current-weather.dto'
import environment from './utils/environment'

export class WeatherService {

  private API_KEY: string
  private currentWeatherResource: string
  private coordsWeatherResource: string

  constructor() {
    this.API_KEY = environment.openweathermap.API_KEY
    const url = environment.openweathermap.url
    this.currentWeatherResource = `${url}${environment.openweathermap.resources.currentWeather}`
    this.coordsWeatherResource = `${url}${environment.openweathermap.resources.coordsWeather}`
  }

  getCurrentWeatherByCity(city: string, countryCode?: string): AxiosPromise<CurrentWeather> {
    const query = [city, countryCode].filter(Boolean).join()

    return axios.get<CurrentWeather>(`${this.currentWeatherResource}?q=${query}&appid=${this.API_KEY}&units=metric`)
  }

  getCurrentWeatherByCoords(lat: number, lon: number): AxiosPromise<CurrentWeather> {
    return axios.get<CurrentWeather>(`${this.coordsWeatherResource}?lat=${lat}&lon=${lon}&cnt=1&appid=${this.API_KEY}&units=metric`)
  }

}