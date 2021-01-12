import {
  GET_TASK,
  GET_TASK_SUCCESS,
  GET_TASK_FAILED,
  UPDATE_TASK,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAILED,
  SET_TIME,
  SET_TIME_SUCCESS,
  SET_TIME_FAILED,
} from '../action/task_types';
const initialState = {
  isLoading: false,
  listTask: [],
};

const task = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASK: {
      console.info('reducer GET_TASK');
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_TASK_SUCCESS: {
      console.info('reducer GET_TASK_SUCCESS');
      return {
        ...state,
        listTask: action.payload,
        isLoading: false,
      };
    }
    case GET_TASK_FAILED: {
      console.info('reducer GET_TASK_failed');
      return {
        ...state,
        isLoading: false,
      };
    }
    case UPDATE_TASK: {
      console.info('reducer UPDATE_TASK');
      return {
        ...state,
        isLoading: true,
      };
    }
    case UPDATE_TASK_SUCCESS: {
      console.info('reducer UPDATE_TASK_SUCCESS');
      return {
        ...state,
        isLoading: false,
      };
    }
    case UPDATE_TASK_FAILED: {
      console.info('reducer UPDATE_TASK_failed');
      return {
        ...state,
        isLoading: false,
      };
    }
    case SET_TIME: {
      console.info('reducer SET_TIME');
      return {
        ...state,
        isLoading: true,
      };
    }
    case SET_TIME_SUCCESS: {
      console.info('reducer SET_TIME_success');
      return {
        ...state,
        isLoading: false,
      };
    }
    case SET_TIME_FAILED: {
      console.info('reducer SET_TIME_failed');
      return {
        ...state,
        isLoading: false,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default task;
