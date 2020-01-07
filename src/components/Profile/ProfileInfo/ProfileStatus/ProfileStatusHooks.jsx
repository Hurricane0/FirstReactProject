import React, { useState, useEffect } from "react";
import s from "./ProfileStatus.module.css";

let ProfileStatusHooks = props => {
  const [editMode, setEditMode] = useState(false);
  const [userStatus, setUserStatus] = useState(props.userStatus);

  useEffect(() => {
    setUserStatus(props.userStatus);
  }, [props.userStatus]);

  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateUserStatus(userStatus);
  };
  const onStatusChange = e => {
    setUserStatus(e.currentTarget.value);
  };

  return (
    <div>
      {!editMode && (
        <span onDoubleClick={activateEditMode} className={s.about_user}>
          {userStatus}
        </span>
      )}
      {editMode && (
        <input
          value={userStatus}
          className={s.about_user}
          autoFocus={true}
          onBlur={deactivateEditMode}
          onChange={onStatusChange}
        />
      )}
    </div>
  );
};
export default ProfileStatusHooks;
