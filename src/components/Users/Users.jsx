import React from "react";
import UserBlock from "./UserBlock/UserBlock";
import * as axios from "axios";

class Users extends React.Component {
  constructor(props) {
    super(props);
    axios("http://localhost:3000/items").then(response => {
      this.props.setUsers(response.data);
    });
  }
  render() {
    return (
      <div>
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
