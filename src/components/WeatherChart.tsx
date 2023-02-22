import React, { FC } from "react";
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { WeatherData } from "../store/types";

interface WeatherChartProps {
  data: WeatherData[] | undefined;
}

const WeatherChart: FC<WeatherChartProps> = ({ data }) => {
  const chartData = data?.map((item) => ({
    dt_txt: new Date(item.dt_txt).getDate(),
    tmp: (item.main.temp - 273.15).toFixed(2),
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={chartData}>
        <XAxis
          dataKey="dt_txt"
          label={{ value: "Date", position: "insideBottom", offset: -5 }}
        />
        <YAxis
          label={{
            value: "Temperature (C)",
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
