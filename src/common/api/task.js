import axios from 'axios';
import {baseUrl} from './index';

export function apiGetTask() {
  console.log('api get task :');
  return axios({
    method: 'POST',
    url: baseUrl + 'task',
  });
}

export function apiSetTimes(payload) {
  console.log('api set times :', payload);
  return axios({
    method: 'POST',
    url: baseUrl + 'task/times',
    data: payload,
  });
}
