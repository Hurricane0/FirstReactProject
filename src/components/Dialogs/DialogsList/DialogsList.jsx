import React from "react";
import DialogBlock from "./DialogBlock/DialogBlock";

function DialogsList(props) {
  let dialogBlock = props.userDialogs.map(d => (
    <DialogBlock key={d.id} username={d.name} id={d.id} />
  ));
  return <div>{dialogBlock}</div>;
}

export default DialogsList;
