// import profileReducer from "./profileReducer";
// import dialogsReducer from "./dialogsReducer";

// const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
// const ADD_POST = "ADD-POST";
// const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE";
// const SEND_MESSAGE = "SEND-MESSAGE";

// let store = {
//   _state: {
//     profilePage: {
//       posts: [
//         { id: 1, postText: "It is the first post" },
//         { id: 2, postText: "There is the second post" },
//         { id: 3, postText: "The third post!" }
//       ],
//       newPostText: ""
//     },
//     dialogsPage: {
//       userDialogs: [
//         { id: 1, name: "Nikita Dvortsov" },
//         { id: 2, name: "Sonya Gurina" },
//         { id: 3, name: "Dasha Dvortsova" },
//         { id: 4, name: "Roman Dvortsov" }
//       ],
//       userMessages: [
//         { id: 1, message: "I am Nikita Dvortsov" },
//         { id: 2, message: "I am Sonya Gurina" },
//         { id: 3, message: "I am Dasha Dvorstova" }
//       ],
//       newMessageText: ""
//     }
//   },
//   dispatch(action) {
//     this._state.profilePage = profileReducer(this._state.profilePage, action);
//     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//     this._callSubscriber(this._state);
//   },
//   //Default stab (Заглушка)
//   _callSubscriber() {
//     console.log("State has been changed");
//   },
//   getState() {
//     return this._state;
//   },
//   //Pattern  (Observer) for rerenderinng with no mistakes in cyclic dependence
//   subscribe(observer) {
//     this._callSubscriber = observer; //Changing _callSubscriber() function
//   }
// };
// export const addPostActionCreator = () => ({ type: ADD_POST });

// export const updateNewPostTextActionCreator = newtext => ({
//   type: UPDATE_NEW_POST_TEXT,
//   newtext: newtext
// });
// export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

// export const updateNewMessageActionCreator = messageText => ({
//   type: UPDATE_NEW_MESSAGE,
//   messageText: messageText
// });

// export default store;
