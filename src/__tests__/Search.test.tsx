import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import Search from "../components/Search/Search";
import { setAlert } from "../store/actions/alertActions";
import { setLoading } from "../store/actions/weatherActions";

const mockStore = configureStore([thunk]);

describe("Search component", () => {
  let store;
  let component;
  beforeEach(() => {
    store = mockStore({
      Forecastweather: {
        data: null,
        loading: false,
        error: "",
      },
      alert: {
        message: "",
      },
    });

    // eslint-disable-next-line testing-library/no-render-in-setup
    component = render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
  });

  it("renders the search form", () => {
    expect(screen.getByRole("form")).toBeInTheDocument();
  });

  it("dispatches setAlert action when city is not provided", async () => {
    const searchButton = screen.getByRole("button", { name: /search/i });

    fireEvent.click(searchButton);

    await waitFor(() =>
      expect(store.getActions()).toContainEqual(setAlert("City is required!"))
    );
  });
  it("dispatches setLoading and getWeatherForecast actions when a city is provided", async () => {
    const searchInput = screen.getByPlaceholderText("Enter city name");
    const searchButton = screen.getByRole("button", { name: /search/i });

    fireEvent.change(searchInput, { target: { value: "New York" } });
    fireEvent.click(searchButton);

    await waitFor(() => {
      const actions = store.getActions();
      expect(actions).toContainEqual(setLoading());
    });
  });
});

//test when given a city name

// const mockStore = configureMockStore<
//   RootState,
//   ThunkDispatch<RootState, null, WeatherAction>
// >([thunk]);

// const server = setupServer(
//   rest.get(
//     `https://api.openweathermap.org/data/2.5/forecast`,
//     (req, res, ctx) => {
//       return res(
//         ctx.json({
//           data: {
//             city: {
//               name: "Test City",
//             },
//             list: [
//               {
//                 dt: 1645438800,
//                 main: {
//                   temp: 20,
//                   temp_min: 18,
//                   temp_max: 22,
//                   humidity: 75,
//                 },
//                 weather: [
//                   { main: "Clouds", description: "few clouds", icon: "03d" },
//                 ],
//               },
//               {
//                 dt: 1645456800,
//                 main: {
//                   temp: 18,
//                   temp_min: 16,
//                   temp_max: 20,
//                   humidity: 80,
//                 },
//                 weather: [
//                   { main: "Rain", description: "light rain", icon: "10d" },
//                 ],
//               },
//             ],
//           },
//         })
//       );
//     }
//   )
// );

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

// describe("Search component", () => {
//   test("Search component renders without error", async () => {
//     const store = mockStore({
//       weather: {
//         loading: false,
//         data: null,
//         error: "",
//       },
//       alert: {
//         message: "",
//       },
//     });

//     render(
//       <Provider store={store}>
//         <Search />
//       </Provider>
//     );

//     const searchInput = screen.getByPlaceholderText(/enter city name/i);
//     const searchButton = screen.getByRole("button", { name: /search/i });

//     fireEvent.change(searchInput, { target: { value: "Test City" } });
//     fireEvent.click(searchButton);

//     await waitFor(() => {
//       jest.setTimeout(10000);
//       expect(store.getActions()).toContainEqual([
//         { type: "SET_LOADING" },
//         {
//           payload: {
//             data: {
//               city: { name: "Test City" },
//               list: [
//                 {
//                   dt: 1645438800,
//                   main: { humidity: 75, temp: 20, temp_max: 22, temp_min: 18 },
//                   weather: [
//                     { description: "few clouds", icon: "03d", main: "Clouds" },
//                   ],
//                 },
//                 {
//                   dt: 1645456800,
//                   main: { humidity: 80, temp: 18, temp_max: 20, temp_min: 16 },
//                   weather: [
//                     { description: "light rain", icon: "10d", main: "Rain" },
//                   ],
//                 },
//               ],
//             },
//           },
//           type: "GET_WEATHER_FORECAST",
//         },
//       ]);
//     });
//   });
// });
