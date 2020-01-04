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
  ]
};

const dialogsReducer = (state = initialState, action) => {
  //state = this._state.dialogsPage
  switch (action.type) {
    case SEND_MESSAGE: {
      return {
        ...state,
        userMessages: [
          ...state.userMessages,
          { id: 4, message: action.newMessageText }
        ]
      };
    }
    default:
      return state;
  }
};
//ActionCreators для того, чтобы передавать в качестве аргументов в dispatch
export const sendMessage = newMessageText => ({
  type: SEND_MESSAGE,
  newMessageText
});

export default dialogsReducer;
