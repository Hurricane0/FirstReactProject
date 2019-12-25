import React from "react";
import UserBlock from "./UserBlock/UserBlock";
import * as axios from "axios";
import s from "./Users.module.css";

class Users extends React.Component {
  constructor(props) {
    super(props);
    axios("https://social-network.samuraijs.com/api/1.0/users").then(
      response => {
        this.props.setUsers(response.data.items);
      }
    );
  }
  render() {
    debugger;
    let pagesCount = this.props.totalUsersCount / this.props.pageSize;
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div>
        <div className={s.pagesNumbersBlock}>
          {pages.map(page => {
            return (
              <span
                className={this.props.currentPage === page && s.selectedPage}
              >
                {page}
              </span>
            );
          })}
        </div>
        {this.props.users.map(user => (
          <div key={user.id}>
            <UserBlock
              user={user}
              follow={this.props.follow}
              unfollow={this.props.unfollow}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
