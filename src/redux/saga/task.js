import {takeLatest, put} from 'redux-saga/effects';
import {ToastAndroid} from 'react-native';
import {
  GET_TASK,
  GET_TASK_SUCCESS,
  GET_TASK_FAILED,
} from '../action/task_types';
import {apiGetTask} from '../../common/api/task';

function* getTask(action) {
  try {
    // LOGIN
    console.info('Task saga :', action);
    const resTask = yield apiGetTask();
    console.log('data resTask : ', resTask.data);

    if (resTask && resTask.data) {
      // save token to local storage
      yield put({type: GET_TASK_SUCCESS});

      ToastAndroid.showWithGravity(
        'Wellcome ' + resTask.data.fullName,
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
    } else {
      // show alert
      ToastAndroid.showWithGravity(
        'Task gagal',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
      yield put({type: GET_TASK_FAILED});
    }
  } catch (e) {
    console.info('e', e);
    // show alert
    ToastAndroid.showWithGravity(
      'Gagal Task',
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
    yield put({type: GET_TASK_FAILED});
  }
}

function* taskSaga() {
  console.info('taskSaga()');
  yield takeLatest(GET_TASK, getTask);
}

export default taskSaga;
