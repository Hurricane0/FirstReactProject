const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";

let initialState = {
  posts: [
    { id: 1, postText: "It is the first post" },
    { id: 2, postText: "There is the second post" },
    { id: 3, postText: "The third post!" }
  ],
  newPostText: ""
};

const profileReducer = (state = initialState, action) => {
  //state = this._state.profilePage
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 4,
        postText: state.newPostText
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newtext;
      return state;

    default:
      return state;
  }
};
//ActionCreators для того, чтобы передавать в качестве аргументов в dispatch
export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = newtext => ({
  type: UPDATE_NEW_POST_TEXT,
  newtext: newtext
});

export default profileReducer;
