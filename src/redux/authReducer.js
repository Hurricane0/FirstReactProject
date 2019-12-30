const SET_USER_DATA = "SET-USER-DATA";

let initialState = {
  isAuth: false,
  userId: null,
  login: null,
  email: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.userData,
        isAuth: true
      };

    default:
      return state;
  }
};

export const setUserData = (userId, login, email) => ({
  type: SET_USER_DATA,
  userData: {
    userId,
    login,
    email
  }
});

export default authReducer;
