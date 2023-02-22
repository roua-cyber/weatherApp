import React, { FC, useState, FormEvent, ChangeEvent } from "react";
import { useDispatch } from "react-redux";

import { setAlert } from "../../store/actions/alertActions";
import {
  getWeatherForecast,
  setLoading,
} from "../../store/actions/weatherActions";
import { ThunkDispatch } from "redux-thunk";
import { Button, Container, TextField } from "@material-ui/core";
import { useStyles } from "./Style";

const Search: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const [city, setCity] = useState("");

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (city.trim() === "") {
      return dispatch(setAlert("City is required!"));
    }

    dispatch(setLoading());
    dispatch(getWeatherForecast(city));
    setCity("");
  };
  return (
    <Container role="form" className={classes.SearchContainer}>
      <form
        style={{
          display: "flex",
          justifyContent: "center",
        }}
        onSubmit={submitHandler}
      >
        <TextField
          value={city}
          onChange={changeHandler}
          hiddenLabel
          placeholder="Enter city name"
          variant="outlined"
        />
        <Button type="submit" variant="contained" style={{ boxShadow: "none" }}>
          Search
        </Button>
      </form>
    </Container>
  );
};

export default Search;
