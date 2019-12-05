import React from "react";
// import s from "./DialogsList.module.css";
import DialogBlock from "./DialogBlock/DialogBlock";

function DialogsList(props) {
  let dialogBlock = props.dialogsPage.userDialogs.map(d => (
    <DialogBlock username={d.name} id={d.id} />
  ));
  return <div>{dialogBlock}</div>;
}

export default DialogsList;
