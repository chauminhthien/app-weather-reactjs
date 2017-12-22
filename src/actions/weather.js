import { api } from './../server';

export const feactWeather = (key, days) => {
  return (dispatch, getState) => {
    return api.weather.feactWeather(key, days );
  }
}