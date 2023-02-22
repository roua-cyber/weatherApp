import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setTemp } from "../../store/actions/weatherActions";

const TempSwitcher = () => {
  const dispatch = useDispatch();
  const unit = useSelector((state: RootState) => state.tempunit);

  const handleTempChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    dispatch(setTemp(value));
  };
  console.log(unit);
  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="temp-switcher-label"
        name="temp-switcher"
        value={unit.temp}
        onChange={handleTempChange}
        defaultValue="celsius"
      >
        <FormControlLabel
          value="celsius"
          control={<Radio color="primary" />}
          label={
            <span
              style={{ color: unit.temp === "celsius" ? "#1976d2" : "inherit" }}
            >
              Celsius
            </span>
          }
        />
        <FormControlLabel
          value="fahrenheit"
          control={<Radio color="primary" />}
          label={
            <span
              style={{
                color: unit.temp === "fahrenheit" ? "#1976d2" : "inherit",
              }}
            >
              Fahrenheit
            </span>
          }
        />
      </RadioGroup>
    </FormControl>
  );
};
export default TempSwitcher;
