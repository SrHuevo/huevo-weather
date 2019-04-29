import { Coord } from './coord.dto';
import { Weather } from './weather.dto';
import { Main } from './main.dto';
import { Wind } from './wind.dto';
import { Clouds } from './clouds.dto';
import { Sys } from './sys.model';
export interface CurrentWeather {
    coord: Coord;
    weather: Weather[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    id: number;
    name: string;
    cod: number;
}
