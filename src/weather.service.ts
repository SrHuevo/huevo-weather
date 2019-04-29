import axios, {AxiosPromise} from 'axios'
import {CurrentWeather} from './dto/current-weather.dto'
import environment from './utils/environment'

export class WeatherService {

  private API_KEY: string
  private currentWeatherResource: string

  constructor() {
    this.API_KEY = environment.openweathermap.API_KEY
    const url = environment.openweathermap.url
    this.currentWeatherResource = `${url}${environment.openweathermap.resources.currentWeather}`
  }

  getCurrentWeatherByCity(city: string, countryCode?: string): AxiosPromise<CurrentWeather> {
    const query = [city, countryCode].filter(Boolean).join()

    return axios.get<CurrentWeather>(`${this.currentWeatherResource}?q=${query}&appid=${this.API_KEY}`)
  }

}