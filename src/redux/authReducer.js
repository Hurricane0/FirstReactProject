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

export default authReducer;
