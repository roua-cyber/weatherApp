import { Typography } from "@material-ui/core";

export const WeatherCardField = ({ info, value, unity }: any) => {
  return (
    <Typography variant="body1">
      {info}
      <Typography variant="h4">
        {value}
        <sup>{unity}</sup>
      </Typography>
    </Typography>
  );
};
