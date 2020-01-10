import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "dvortsov/auth/SET-USER-DATA";

let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.userData
      };

    default:
      return state;
  }
};
export const setUserData = (userId, login, email, isAuth) => ({
  type: SET_USER_DATA,
  userData: {
    userId,
    login,
    email,
    isAuth
  }
});

export const authMeThunk = () => async dispatch => {
  const data = await authAPI.authMe();
  let { id, login, email } = data.data;
  data.resultCode === 1
    ? dispatch(setUserData(id, login, email, false))
    : dispatch(setUserData(id, login, email, true));
};
export const login = (email, password, rememberMe) => async dispatch => {
  const response = await authAPI.login(email, password, rememberMe);
  response.data.resultCode === 0
    ? dispatch(authMeThunk())
    : dispatch(stopSubmit("login", { _error: response.data.messages[0] }));
};
export const logout = () => async dispatch => {
  const response = await authAPI.logout();
  response.data.resultCode === 0 &&
    dispatch(setUserData(null, null, null, false));
};
export default authReducer;
