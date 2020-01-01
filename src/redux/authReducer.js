import { authAPI } from "../api/api";

const SET_USER_DATA = "SET-USER-DATA";

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

export const authMeThunk = () => dispatch => {
  authAPI.authMe().then(data => {
    let { id, login, email } = data.data;
    data.resultCode === 1
      ? dispatch(setUserData(id, login, email, false))
      : dispatch(setUserData(id, login, email, true));
  });
};
export default authReducer;
