import store from ".";

export const GET_WEATHER_FORECAST = 'GET_WEATHER_FORECAST';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_ALERT = 'SET_ALERT';
export const SET_TEMP = 'SET_TEMP';
export interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}
export interface WeatherData {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lon: number;
    lat: number;
  };
  dt: number;
  dt_txt: string;
  id: number;
  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    sea_level: number,
    grnd_level: number,
    humidity: number,
    temp_kf: number,
  };
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  visibility: number;
  weather: Weather[];
  wind: {
    speed: number;
    deg: number;
  };
}

export interface WeatherError {
  cod: string;
  message: string;
}

export interface WeatherState {
  data: WeatherData | null;
  loading: boolean;
  error: string;
}
export interface City {

  id: number,
  name: string,
  coord: {
    lat: number,
    lon: number
  }
}
export interface WeatherForecastState {
  data: WeatherForecastData | null;
  loading: boolean;
  error: string;
}
export interface WeatherForecastData {
  cod: string,
  message: number,
  cnt: number,
  list: WeatherData[],
  city: City
}

interface GetWeatherForecastAction {
  type: typeof GET_WEATHER_FORECAST;
  payload: WeatherForecastData;
}

export interface SetLoadingAction {
  type: typeof SET_LOADING;
}

export interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: string;
}

export type WeatherAction = SetLoadingAction | SetErrorAction | GetWeatherForecastAction;
export interface SetTempAction {
  type: typeof SET_TEMP;
  payload: string;
}

export interface AlertAction {
  type: typeof SET_ALERT;
  payload: string;
}

export interface AlertState {
  message: string;
}
export interface TempState {
  temp: string;
}
export type AppDispatch = typeof store.dispatch
