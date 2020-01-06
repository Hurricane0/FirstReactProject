import { profileAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const SET_CURRENT_PROFILE = "SET_CURRENT_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";

let initialState = {
  posts: [
    { id: 1, postText: "It is the first post" },
    { id: 2, postText: "There is the second post" },
    { id: 3, postText: "The third post!" }
  ],
  profile: null,
  userStatus: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: 4,
            postText: action.postText
          }
        ],
        newPostText: ""
      };
    case SET_CURRENT_PROFILE:
      return {
        ...state,
        profile: action.profile
      };
    case SET_USER_STATUS:
      return {
        ...state,
        userStatus: action.userStatus
      };

    default:
      return state;
  }
};
//ActionCreators для того, чтобы передавать в качестве аргументов в dispatch
export const addPostAC = postText => ({ type: ADD_POST, postText });
export const setCurrentProfile = profile => ({
  type: SET_CURRENT_PROFILE,
  profile
});
export const setUserStatus = userStatus => ({
  type: SET_USER_STATUS,
  userStatus
});
/////////////////////////////////////////////////
export const setCurrentProflieThunk = userId => {
  return dispatch => {
    profileAPI.getProfile(userId).then(data => {
      dispatch(setCurrentProfile(data));
    });
  };
};
export const getUserStatus = userId => dispatch => {
  profileAPI.getUserStatus(userId).then(response => {
    dispatch(setUserStatus(response.data || "Write your status..."));
  });
};
export const updateUserStatus = userStatus => dispatch => {
  profileAPI.updateUserStatus(userStatus).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setUserStatus(userStatus || "Write your status..."));
    }
  });
};

export default profileReducer;
