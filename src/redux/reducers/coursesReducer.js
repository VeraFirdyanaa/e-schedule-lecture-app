export const LOADING_COURSE = "LOADING_COURSE";
export const START_GET_MY_COURSE = "START_GET_MY_COURSE";
export const SUCCESS_GET_MY_COURSE = "SUCCESS_GET_MY_COURSE";
export const ERROR_GET_MY_COURSE = "ERROR_GET_MY_COURSE";

export const initialState = {
  courses: [],
  error: null,
  loadingCourse: false
}

export const doGetCourse = (onSuccess, onError) => ({
  type: START_GET_MY_COURSE,
  onSuccess,
  onError
});

export const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_COURSE:
      return { ...state, loadingCourse: action.loadingCourse, error: null };
    case SUCCESS_GET_MY_COURSE:
      return { ...state, error: null, courses: action.data };
    case ERROR_GET_MY_COURSE:
      return { ...state, error: action.error };
  }

  return state;
}