import React from "react";
import undefinedUserAvatar from "../../../assets/images/undefinedUserAvatar.png";
import s from "./ProfileInfo.module.css";
import ProfileStatusHooks from "./ProfileStatus/ProfileStatusHooks";

class ProfileInfo extends React.Component {
  render() {
    return (
      <div className={s.wrapper}>
        <div className={s.inside_wrapper}>
          <div className={s.image_wrapper}>
            {!this.props.profile.photos.large ? (
              <img src={undefinedUserAvatar} alt="User Avatar" />
            ) : (
              <img src={this.props.profile.photos.large} alt="User Avatar" />
            )}
          </div>
          <div className={s.description}>
            <span className={s.username}>{this.props.profile.fullName}</span>
            <ProfileStatusHooks
              userStatus={this.props.userStatus}
              updateUserStatus={this.props.updateUserStatus}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileInfo;
