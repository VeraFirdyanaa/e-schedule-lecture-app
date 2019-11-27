import { call, put, takeLatest } from "redux-saga/effects";
import { LOADING_COURSE, ERROR_GET_MY_COURSE, SUCCESS_GET_MY_COURSE, START_GET_MY_COURSE } from "../reducers/coursesReducer";
import { getMyCourse } from "../services/course";
import { AsyncStorage } from "react-native";

function* doGetMyCourse(payload) {
  yield put({ type: LOADING_COURSE, loadingCourse: true });
  try {
    console.log('token you got', payload.token);
    let response = yield call(getMyCourse, payload.token);
    console.log('responseee', response);
    if (response && response.data) {
      // payload.onSuccess(response.data);
      yield put({ type: LOADING_COURSE, loadingCourse: false });
      yield put({ type: SUCCESS_GET_MY_COURSE, data: response.data });
    } else {
      // payload.onError(response.data);
      yield put({ type: LOADING_COURSE, loadingCourse: false });
      yield put({ type: ERROR_GET_MY_COURSE, error: response.data });
    }
  } catch (err) {
    console.log('err', err.response);
    yield put({ type: ERROR_GET_MY_COURSE, error: err });
    // payload.onError(err);
  }
}

export function* watcherDoGetMyCourse() {
  yield takeLatest(START_GET_MY_COURSE, doGetMyCourse);
}