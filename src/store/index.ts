import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import alertReducer from './reducers/alertReducer';
import weatherForcastReducer from './reducers/weatherForcastReducer';
import tempReducer from './reducers/tempReducer';

const rootReducer = combineReducers({
  Forecastweather: weatherForcastReducer,
  alert: alertReducer,
  tempunit: tempReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;

export default store;