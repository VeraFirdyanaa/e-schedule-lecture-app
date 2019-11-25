import { all } from "redux-saga/effects";
import { watcherLogin, watcherLogout, watcherGetUserAuthentication } from "./loginSaga";
import { watcherDoRegister } from "./registerSaga";
import { watcherGetGuest } from "./guestSaga";
import { watcherGetNearby, watcherGetRestaurant, watcherGetCriteria, watcherSetCriteria } from "./restaurantSaga";
import { watcherGetTeachingPlans } from "./teachingPlanSaga";

export default function* rootSaga() {
    yield all([
        watcherLogin(),
        watcherLogout(),
        watcherGetTeachingPlans(),

        watcherDoRegister(),
        watcherGetUserAuthentication(),
        watcherGetGuest(),
        watcherGetNearby(),
        watcherGetRestaurant(),
        watcherGetCriteria(),
        watcherSetCriteria()
    ])
}