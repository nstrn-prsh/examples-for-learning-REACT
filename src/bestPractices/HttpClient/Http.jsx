import axios from "axios";

// axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.defaults.baseURL = `https://jsonplaceholder.typicode.com/`;
axios.defaults.headers.common["Authorization"] = 555;

/* ***** FIRST WAY ***** */
// note: GET
export function get(url, config = {}) {
     return axios
          .get(url, config)
          .then((res) => res.data)
          .catch((er) => console.log(er));
}

// note: POST
export function post(url, data, config) {
     return axios
          .post(url, data, config)
          .then((res) => res.data)
          .catch((er) => console.log(er));
}

/* ***** SECOND WAY ***** */
export class HttpClient {
     constructor(config = {}) {
          this.service = axios.create({
               ...config,
               baseURL: config.baseURL || process.env.REACT_APP_BASE_URL,
          });
     }
     get(url, config = {}) {
          return new Promise((resolve, reject) => {
               axios.get(url, config)
                    .then((res) => resolve(res.data))
                    .catch((er) => reject(er));
          });
     }

     post(url, data, config) {
          return axios
               .post(url, data, config)
               .then((res) => res.data)
               .catch((er) => console.log(er));
     }
}

export default HttpClient;
