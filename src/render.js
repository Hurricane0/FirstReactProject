import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { addPost, updateNewTextareaText } from "./redux/state";

export let rerenderEntireTree = state => {
  ReactDOM.render(
    <App
      state={state}
      addPost={addPost}
      updateNewTextareaText={updateNewTextareaText}
    />,
    document.getElementById("root")
  );
};
