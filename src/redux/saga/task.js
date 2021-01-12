import {takeLatest, put} from 'redux-saga/effects';
import {ToastAndroid} from 'react-native';
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
import {apiGetTask, apiUpdateTask, apiSetTime} from '../../common/api/task';

function* getTask(action) {
  try {
    console.info('resGetTask saga :', action);
    const resGetTask = yield apiGetTask();
    console.log('data resGetTask : ', resGetTask.data.data);
    yield put({type: GET_TASK_SUCCESS, payload: resGetTask.data.data});
  } catch (e) {
    console.info('e', e);
    // show alert
    ToastAndroid.showWithGravity(
      'Failed Get Task',
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
    yield put({type: GET_TASK_FAILED});
  }
}

function* updateTask(action) {
  try {
    console.info('UpdateTask saga :', action);
    const resUpdateTask = yield apiUpdateTask(action.id, action.payload);
    console.log('data resUpdateTask : ', resUpdateTask.data);
    yield put({type: UPDATE_TASK_SUCCESS});
    yield put({type: GET_TASK});
  } catch (e) {
    console.info('e', e);
    // show alert
    ToastAndroid.showWithGravity(
      'Failed Set Time',
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
    yield put({type: UPDATE_TASK_FAILED});
  }
}

function* setTime(action) {
  try {
    console.info('setTime saga :', action);
    const resSetTime = yield apiSetTime(action.payload);
    console.log('data resSetTime : ', resSetTime.data);
    yield put({type: SET_TIME_SUCCESS});
    yield put({type: GET_TASK});
  } catch (e) {
    console.info('e', e);
    // show alert
    ToastAndroid.showWithGravity(
      'Failed Set Time',
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
    yield put({type: SET_TIME_FAILED});
  }
}

function* taskSaga() {
  console.info('taskSaga()');
  yield takeLatest(GET_TASK, getTask);
  yield takeLatest(UPDATE_TASK, updateTask);
  yield takeLatest(SET_TIME, setTime);
}

export default taskSaga;
