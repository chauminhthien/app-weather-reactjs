export const API_VERSION = 'v1';
export const API_KEY = "db8eb740f5e8427b9c090919163012"
export const API_BASE = `http://api.apixu.com/${API_VERSION}`;

export const get = (url) => {

  let headers:{
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };

  let opts = {
    method: 'GET',
    headers
  };

  return fetch(url, opts)
    .then(resp => {
      if (resp.status !== 200 ) {
        return Promise.reject(`Expect code 404`);
      }
      return resp.json();
    });
}