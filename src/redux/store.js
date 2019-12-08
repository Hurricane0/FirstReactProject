const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";

let store = {
  _state: {
    dialogsPage: {
      userDialogs: [
        { id: 1, name: "Nikita Dvortsov" },
        { id: 2, name: "Sonya Gurina" },
        { id: 3, name: "Dasha Dvortsova" },
        { id: 4, name: "Roman Dvortsov" }
      ],
      userMessages: [
        { id: 1, message: "I am Nikita Dvortsov" },
        { id: 2, message: "I am Sonya Gurina" },
        { id: 3, message: "I am Dasha Dvortsova" }
      ]
    },
    profilePage: {
      posts: [
        { id: 1, postText: "It is the first post" },
        { id: 2, postText: "There is the second post" },
        { id: 3, postText: "The third post!" }
      ],
      newPostText: ""
    }
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 4,
        postText: this._state.profilePage.newPostText
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newtext;
      this._callSubscriber(this._state);
    }
  },
  //Default stab (Заглушка)
  _callSubscriber() {
    console.log("State has been changed");
  },
  getState() {
    return this._state;
  },
  //Pattern (Observer) for rerenderinng with no mistakes in cyclic dependence
  subscribe(observer) {
    this._callSubscriber = observer; //Changing rerenderEntireTree() function
  }
};
export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  };
};

export const updateNewPostTextActionCreator = newtext => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newtext: newtext
  };
};

export default store;
