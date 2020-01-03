import React from "react";
import s from "./ProfileStatus.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    userStatus: this.props.userStatus
  };
  activateEditMode = () => {
    this.setState({
      editMode: true
    });
  };
  deactivateEditMode = () => {
    this.setState({
      editMode: false
    });
    this.props.updateUserStatus(this.state.userStatus);
  };
  onStatusChange = e => {
    this.setState({
      userStatus: e.currentTarget.value
    });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.userStatus !== this.props.userStatus) {
      this.setState({
        userStatus: this.props.userStatus
      });
    }
  }
  render() {
    return (
      <div>
        {!this.state.editMode && (
          <span onDoubleClick={this.activateEditMode} className={s.about_user}>
            {this.props.userStatus}
          </span>
        )}
        {this.state.editMode && (
          <input
            onDoubleClick={this.deactivateEditMode}
            value={this.state.userStatus}
            className={s.about_user}
            autoFocus={true}
            onBlur={this.deactivateEditMode}
            onChange={this.onStatusChange}
          />
        )}
      </div>
    );
  }
}

export default ProfileStatus;
