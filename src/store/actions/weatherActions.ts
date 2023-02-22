import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { WeatherAction, SET_LOADING, SET_ERROR, GET_WEATHER_FORECAST, WeatherForecastData, SetTempAction, SET_TEMP } from '../types';
import axios from 'axios';
import { setAlert } from './alertActions';
const appid = process.env.REACT_APP_OPENWEATHER_API_KEY
export const getWeatherForecast = (city: string): ThunkAction<void, RootState, null, WeatherAction> => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${appid}`);
      const resData: WeatherForecastData = response.data;
      dispatch({
        type: GET_WEATHER_FORECAST,
        payload: resData,
      });
    } catch (err: any) {
      if (err.message === "Request failed with status code 404") {
        dispatch({
          type: SET_ERROR,
          payload: "city is invalid",
        });
      }
      else {
        dispatch({
          type: SET_ERROR,
          payload: err.message,
        });
      }
    }
  };
};


export const setLoading = (): WeatherAction => {
  return {
    type: SET_LOADING
  }
}

export const setError = (): WeatherAction => {
  return {
    type: SET_ERROR,
    payload: ''
  }
}
export const setTemp = (temp): SetTempAction => {
  return {
    type: SET_TEMP,
    payload: temp
  }
}