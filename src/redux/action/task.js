import {GET_TASK, SET_TIME} from './task_types';

export const getTaskAction = () => {
  console.log('getTaskAction :');
  return {type: GET_TASK};
};

export const setTimeAction = (payload) => {
  console.log('setTimeAction :', payload);
  return {type: SET_TIME, payload};
};
