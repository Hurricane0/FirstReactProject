import { profileAPI } from "../api/api";

const INPUT_SYNCHRONIZATION = "INPUT-SYNCHRONIZATION";
const ADD_POST = "ADD-POST";
const SET_CURRENT_PROFILE = "SET-CURRENT-PROFILE";

let initialState = {
  posts: [
    { id: 1, postText: "It is the first post" },
    { id: 2, postText: "There is the second post" },
    { id: 3, postText: "The third post!" }
  ],
  newPostText: "",
  profile: null
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
            postText: state.newPostText
          }
        ],
        newPostText: ""
      };
    case INPUT_SYNCHRONIZATION:
      return {
        ...state,
        newPostText: action.newtext
      };
    case SET_CURRENT_PROFILE:
      return {
        ...state,
        profile: action.profile
      };
    default:
      return state;
  }
};
//ActionCreators для того, чтобы передавать в качестве аргументов в dispatch
export const addPost = () => ({ type: ADD_POST });
export const inputSynchronization = newtext => ({
  type: INPUT_SYNCHRONIZATION,
  newtext
});
export const setCurrentProfile = profile => ({
  type: SET_CURRENT_PROFILE,
  profile
});

export const setCurrentProflieThunk = userId => {
  return dispatch => {
    if (!userId) {
      userId = 2;
    }
    profileAPI.getProfile(userId).then(data => {
      dispatch(setCurrentProfile(data));
    });
  };
};

export default profileReducer;
