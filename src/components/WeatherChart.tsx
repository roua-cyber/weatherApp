import React, { FC } from "react";
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { WeatherData } from "../store/types";
import { useSelector } from "react-redux";
import { RootState } from "../store";

interface WeatherChartProps {
  data: WeatherData[] | undefined;
}

const WeatherChart: FC<WeatherChartProps> = ({ data }) => {
  const tempUnit = useSelector((state: RootState) => state.tempunit);

  const chartData = data?.map((item) => {
    const tmp =
      tempUnit.temp === "celsius"
        ? (item.main.temp - 273.15).toFixed(2)
        : ((item.main.temp * 9) / 5 - 459.67).toFixed(2);

    return {
      dt_txt: new Date(item.dt_txt).getDate(),
      tmp,
    };
  });

  const tempLabel =
    tempUnit.temp === "celsius" ? "Temperature (C)" : "Temperature (F)";

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={chartData}>
        <XAxis
          dataKey="dt_txt"
          label={{ value: "Date", position: "insideBottom", offset: -5 }}
        />
        <YAxis
          label={{
            value: tempLabel,
            angle: -90,
            position: "insideLeft",
          }}
        />
        <Line type="monotone" dataKey="tmp" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default WeatherChart;
