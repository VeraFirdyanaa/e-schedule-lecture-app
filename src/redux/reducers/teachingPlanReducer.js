export const LOADING_TP = "LOADING_TP";
export const START_GET_TP = "START_GET_TP";
export const SUCCESS_GET_TP = "SUCCESS_GET_TP";
export const ERROR_GET_TP = "ERROR_GET_TP";

export const initialState = {
  teachingPlans: [],
  error: null,
  loadingTP: false
}

export const doGetTp = (onSuccess, onError) => ({
  type: START_GET_TP,
  onSuccess,
  onError
});

export const teachingPlanReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_TP:
      return { ...state, loadingTP: action.loadingTP, error: null };
    case SUCCESS_GET_TP:
      return { ...state, error: null, teachingPlans: action.data };
    case ERROR_GET_TP:
      return { ...state, error: action.error };
  }

  return state;
}