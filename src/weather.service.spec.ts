import nock from 'nock'
import {WeatherService} from './weather.service'
import environment from './utils/environment'
import {CURRENT_WEATHER_MOCK} from './dto/current-weather.mock'

describe("weather service", () => {

  const weatherService = new WeatherService();

  test("get current weather by city name and country code", async () => {

    const city = 'london'
    const countryCode = 'ES'

    const scope = nock(environment.openweathermap.url)
      .get(environment.openweathermap.resources.currentWeather)
      .query({
        appid: environment.openweathermap.API_KEY,
        q: `${city},${countryCode}`,
      })
      .reply(200, CURRENT_WEATHER_MOCK)

    const response = await weatherService.getCurrentWeatherByCity(city, countryCode)

    expect(response.data).toEqual(CURRENT_WEATHER_MOCK)

    scope.done()
  })

  test("get current weather by city name", async () => {

    const city = 'london'
    const countryCode = 'ES'

    const scope = nock(environment.openweathermap.url)
      .get(environment.openweathermap.resources.currentWeather)
      .query({
        appid: environment.openweathermap.API_KEY,
        city: `${city}`,
      })
      .reply(200, CURRENT_WEATHER_MOCK)

    const response = await weatherService.getCurrentWeatherByCity(city)

    expect(response.data).toEqual(CURRENT_WEATHER_MOCK)

    scope.done()
  })
})