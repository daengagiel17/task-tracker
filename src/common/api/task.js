import axios from 'axios';
import {baseUrl} from './index';

export function apiGetTask() {
  console.log('api get task', baseUrl);
  return axios({
    method: 'GET',
    url: 'http://localhost:5000/task',
  });
}

export function apiSetTime(payload) {
  console.log('api set times :', payload);
  return axios({
    method: 'POST',
    url: baseUrl + 'time',
    data: payload,
  });
}
