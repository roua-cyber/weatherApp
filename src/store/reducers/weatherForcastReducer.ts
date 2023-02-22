import { WeatherAction, SET_LOADING, SET_ERROR, WeatherForecastState, GET_WEATHER_FORECAST } from "../types";

const initialState: WeatherForecastState = {
    data: null,
    loading: false,
    error: ''
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: WeatherAction): WeatherForecastState => {
    switch (action.type) {
        case GET_WEATHER_FORECAST:
            return {
                data: action.payload,
                loading: false,
                error: ''
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
}