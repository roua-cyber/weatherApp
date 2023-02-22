import React, { FC, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

import { RootState } from "./store";
import { setAlert } from "./store/actions/alertActions";
import {
  getWeatherForecast,
  setError,
  setLoading,
} from "./store/actions/weatherActions";
import Carousel from "./components/Carousel";
import { ThunkDispatch } from "redux-thunk";
import { Container, Typography } from "@material-ui/core";
import { useStyles } from "./components/Search/Style";
import Search from "./components/Search/Search";
import WeatherChart from "./components/WeatherChart";
import TempSwitcher from "./components/TempSwitcher/TempSwitcher";
import Alert from "./components/Alert/Alert";

const App: FC = () => {
  const isMounted = useRef(false);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  useEffect(() => {
    if (isMounted.current) return;
    dispatch(setLoading());
    dispatch(getWeatherForecast("tunisia"));
    isMounted.current = true;
  }, []);
  const loading = useSelector(
    (state: RootState) => state.Forecastweather.loading
  );
  const weatherForecastData = useSelector(
    (state: RootState) => state.Forecastweather
  );
  const error = useSelector((state: RootState) => state.Forecastweather.error);
  const alertMsg = useSelector((state: RootState) => state.alert.message);
  const FiveDaysweatherForecastData = weatherForecastData.data?.list.filter(
    (el, index) => index % 8 === 0
  );
  const classes = useStyles();
  return (
    <Container className={classes.AppContainer}>
      <Search />
      {loading ? (
        <Typography variant="h4" className={classes.blogTitle}>
          Loading...
        </Typography>
      ) : (
        FiveDaysweatherForecastData && (
          <>
            <Typography variant="h4" className={classes.blogTitle}>
              {weatherForecastData.data?.city.name}
            </Typography>
            <TempSwitcher />
            <Carousel data={FiveDaysweatherForecastData} />
            <WeatherChart data={FiveDaysweatherForecastData} />
          </>
        )
      )}
      {alertMsg && (
        <Alert message={alertMsg} onClose={() => dispatch(setAlert(""))} />
      )}
      {error && <Alert message={error} onClose={() => dispatch(setError())} />}
    </Container>
  );
};

export default App;
