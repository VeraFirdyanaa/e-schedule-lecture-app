import { call, put, takeLatest } from "redux-saga/effects";
import { LOADING_TP, ERROR_GET_TP, SUCCESS_GET_TP, START_GET_TP } from "../reducers/teachingPlanReducer";
import { getTeachingPlans } from "../services/teachingPlan";

function* doGetTeachingPlans(payload) {
  yield put({ type: LOADING_TP, loadingTP: true });
  try {
    let response = yield call(getTeachingPlans);
    if (response && response.data) {
      // payload.onSuccess(response.data);
      yield put({ type: LOADING_TP, loadingTP: false });
      yield put({ type: SUCCESS_GET_TP, data: response.data });
    } else {
      payload.onError(response.data);
      yield put({ type: LOADING_TP, loadingTP: false });
      yield put({ type: ERROR_GET_TP, error: response.data });
    }
  } catch (err) {
    yield put({ type: ERROR_GET_TP, error: err });
    // payload.onError(err);
  }
}

export function* watcherGetTeachingPlans() {
  yield takeLatest(START_GET_TP, doGetTeachingPlans);
}