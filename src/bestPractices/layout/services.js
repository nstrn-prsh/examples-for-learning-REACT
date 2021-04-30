import axios from "axios";

axios.default.baseURL = "http://localhost:5000";

export function get(url, config = {}) {
     return axios.get(url, config);
}

export function post(url, payload, config) {
     return axios.post(url, payload, config);
}

export function del(url, config = {}) {
     return axios.delete(url, config);
}

export function put(url, payload, config) {
     return axios.post(url, payload, config);
}
