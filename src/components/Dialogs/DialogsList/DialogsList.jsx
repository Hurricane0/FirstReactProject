import React from "react";
// import s from "./DialogsList.module.css";
import DialogBlock from "./DialogBlock/DialogBlock";

function DialogsList(props) {
  let dialog_block = props.user_dialogs.map(d => (
    <DialogBlock username={d.name} id={d.id} />
  ));
  return <div>{dialog_block}</div>;
}

export default DialogsList;
