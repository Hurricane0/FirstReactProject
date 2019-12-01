import React from "react";
// import s from "./DialogsList.module.css";
import DialogBlock from "./DialogBlock/DialogBlock";

function DialogsList() {
  let user_dialogs = [
    { id: 1, name: "Nikita Dvortsov" },
    { id: 2, name: "Sonya Gurina" },
    { id: 3, name: "Dasha Dvortsova" }
  ];
  let dialog_block = user_dialogs.map(d => (
    <DialogBlock username={d.name} id={d.id} />
  ));
  return <div>{dialog_block}</div>;
}

export default DialogsList;
