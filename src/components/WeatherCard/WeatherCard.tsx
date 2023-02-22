import React, { FC } from "react";
import { useSelector } from "react-redux";
import { WeatherData } from "../../store/types";
import { Card, CardContent, CardHeader, Typography } from "@material-ui/core";
import { useStyles } from "./Styles";
import { WeatherCardField } from "../WeatherCardField/WeatherCardField";
import { RootState } from "../../store";

interface WeatherProps {
  data: WeatherData;
}

const WeatherCard: FC<WeatherProps> = ({ data }) => {
  const tempUnit = useSelector((state: RootState) => state.tempunit);
  const celsius = (data.main.temp - 273.15).toFixed(2);
  const fahrenheit = ((data.main.temp * 9) / 5 - 459.67).toFixed(2);
  const classes = useStyles();
  const date = new Date(data.dt_txt).toDateString();

  return (
    <Card>
      <CardHeader subheader={date} className={classes.cardStyle} />
      <CardContent>
        <Typography variant="h4">{data.weather[0].description}</Typography>
        <img
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
          alt=""
        />
        {tempUnit.temp === "celsius" ? (
          <WeatherCardField info="temp" value={celsius} unity="&#8451;" />
        ) : (
          <WeatherCardField info="temp" value={fahrenheit} unity="&#8457;" />
        )}
        {/* <WeatherCardField info="humidity" value={data.main.humidity} unity="" /> */}
        {/* <WeatherCardField info="pressure" value={data.main.pressure} unity="" /> */}
        {/* <WeatherCardField info="wind" value={data.wind.speed + "m/s"} unity="" /> */}
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
