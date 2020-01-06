import { authMeThunk } from "./authReducer";

const INITIALIZING_SUCCESS = "INITIALIZING_SUCCESS";

const initialState = {
  isInitialized: false
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZING_SUCCESS:
      return {
        ...state,
        isInitialized: true
      };
    default:
      return state;
  }
};

export const initializingSuccess = () => ({
  type: INITIALIZING_SUCCESS
});

export const initialize = () => dispatch => {
  let firstPromise = dispatch(authMeThunk());
  Promise.all([firstPromise]).then(() => {
    dispatch(initializingSuccess());
  });
};

export default appReducer;
