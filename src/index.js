import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

let user_dialogs = [
  { id: 1, name: "Nikita Dvortsov" },
  { id: 2, name: "Sonya Gurina" },
  { id: 3, name: "Dasha Dvortsova" },
  { id: 4, name: "Roman Dvortsov" }
];
let user_messages = [
  { id: 1, message: "I am Nikita Dvortsov" },
  { id: 2, message: "I am Sonya Gurina" },
  { id: 3, message: "I am Dasha Dvortsova" }
];

ReactDOM.render(
  <App user_messages={user_messages} user_dialogs={user_dialogs} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
