import { combineReducers } from "redux";

// List Reducers
import { GuestReducer } from "./guestReducer";
import { loginReducer } from "./loginReducer";
import { registerReducer } from "./registerReducer";
import { restaurantReducer } from "./restaurantReducer";
import { teachingPlanReducer } from "./teachingPlanReducer";

export default combineReducers({
    // GuestReducer,
    loginReducer,
    // registerReducer,
    // restaurantReducer,
    teachingPlanReducer
});