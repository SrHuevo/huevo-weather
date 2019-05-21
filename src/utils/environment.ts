export default {
  openweathermap: {
    API_KEY: '6dcf6a37658592f78d6de68a168afc72', // replace CI for var env
    url: 'https://api.openweathermap.org',
    resources: {
      currentWeather: '/data/2.5/weather',
      coordsWeather: '/data/2.5/find'
    }
  }
}
