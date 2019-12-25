import React from "react";
import UserBlock from "./UserBlock/UserBlock";
import * as axios from "axios";
import s from "./Users.module.css";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  }
  onPageChanged = newPage => {
    this.props.setCurrentPage(newPage);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${newPage}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  };
  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
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
                onClick={() => {
                  this.onPageChanged(page);
                }}
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
