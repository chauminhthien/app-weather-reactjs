import configCitys from './configCitys';

export default function () {
  let citys = {};
  let ordered = [];
  configCitys.forEach(e =>{
    citys[e.id] = e;
    ordered.push(e.id);
  });

  return {
    citys,
    ordered
  }
}