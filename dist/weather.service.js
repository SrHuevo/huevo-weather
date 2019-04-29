"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var environment_1 = __importDefault(require("./utils/environment"));
var WeatherService = /** @class */ (function () {
    function WeatherService() {
        this.API_KEY = environment_1.default.openweathermap.API_KEY;
        var url = environment_1.default.openweathermap.url;
        this.currentWeatherResource = "" + url + environment_1.default.openweathermap.resources.currentWeather;
    }
    WeatherService.prototype.getCurrentWeatherByCity = function (city, countryCode) {
        var query = [city, countryCode].filter(Boolean).join();
        return axios_1.default.get(this.currentWeatherResource + "?city=" + query + "&appid=" + this.API_KEY);
    };
    return WeatherService;
}());
exports.WeatherService = WeatherService;
//# sourceMappingURL=weather.service.js.map