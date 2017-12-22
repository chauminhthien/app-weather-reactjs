import * as base from './base';
const WEATHER_API = `${ base.API_BASE }/forecast.json?key=${base.API_KEY}`;

export const feactWeather = (q, days ) => {
  let url = `${ WEATHER_API }&q=${q}&days=${ days }`;
  return base.get(url)
    .then(obj =>{
      let info = {
        name : obj.location.name,
      };

      let { forecastday } = obj.forecast;
      let list = [];
      forecastday.forEach(e =>{
        let item = {
          date : e.date,
          data : e.hour[0]
        };

        list.push(item);
      });
      return {info, list};
    })
    .catch(er => console.log(er));
}