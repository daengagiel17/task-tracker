import axios from 'axios';
import {baseUrl} from './index';

export function apiGetTask() {
  return axios({
    method: 'GET',
    url: 'http://localhost:5000/task',
  });
}

export function apiUpdateTask(taskId, payload) {
  console.log('apiUpdateTask', taskId, payload);
  return axios({
    method: 'PATCH',
    url: 'http://localhost:5000/task/' + taskId,
    data: payload,
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
