import Axios from "axios";

var AccessKey;

export function setAccessKey(_AccessKey) {
	AccessKey = _AccessKey;
}

function returnAxiosInstance() {
  return Axios.create({
    baseURL: "http://localhost:3001/api",
    timeout: 10000,
    headers: { "authorization": AccessKey },
  });
}

export function get(url) {
  const axios = returnAxiosInstance();
  return axios.get(url);
}

export function post(url, requestData) {
  const axios = returnAxiosInstance();
  return axios.post(url, requestData);
}
