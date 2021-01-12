import {GET_TASK, UPDATE_TASK, SET_TIME} from './task_types';

export const getTaskAction = () => {
  console.log('getTaskAction :');
  return {type: GET_TASK};
};

export const updateTaskAction = (id, payload) => {
  console.log('updateTaskAction :');
  return {type: UPDATE_TASK, id, payload};
};

export const setTimeAction = (payload) => {
  console.log('setTimeAction :', payload);
  return {type: SET_TIME, payload};
};
