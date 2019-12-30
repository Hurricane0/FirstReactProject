const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  userDialogs: [
    { id: 1, name: "Nikita Dvortsov" },
    { id: 2, name: "Sonya Gurina" },
    { id: 3, name: "Dasha Dvortsova" },
    { id: 4, name: "Roman Dvortsov" }
  ],
  userMessages: [
    { id: 1, message: "I am Nikita Dvortsov" },
    { id: 2, message: "I am Sonya Gurina" },
    { id: 3, message: "I am Dasha Dvorstova" }
  ],
  newMessageText: ""
};

const dialogsReducer = (state = initialState, action) => {
  //state = this._state.dialogsPage
  switch (action.type) {
    case SEND_MESSAGE: {
      return {
        ...state,
        userMessages: [
          ...state.userMessages,
          { id: 4, message: state.newMessageText }
        ],
        newMessageText: ""
      };
    }
    case UPDATE_NEW_MESSAGE: {
      return {
        ...state,
        newMessageText: action.messageText
      };
    }
    default:
      return state;
  }
};
//ActionCreators для того, чтобы передавать в качестве аргументов в dispatch
export const sendMessage = () => ({ type: SEND_MESSAGE });

export const messageTextSynchronization = messageText => ({
  type: UPDATE_NEW_MESSAGE,
  messageText: messageText
});
export default dialogsReducer;
