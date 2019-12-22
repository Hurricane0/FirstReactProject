const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    // {
    //   id: 1,
    //   username: "Nikita Dvorstov",
    //   status: "I am junior developer...",
    //   location: { country: "Ukraine", city: "Kirovograd" },
    //   followed: false,
    //   avatarUrl:
    //     "  "
    // },
    // {
    //   id: 2,
    //   username: "Sonya Gurina",
    //   status: "I am junior developer...",
    //   location: { country: "Russia", city: "Moscow" },
    //   followed: true,
    //   avatarUrl:
    //     "https://i7.pngguru.com/preview/340/946/334/avatar-user-computer-icons-software-developer-avatar-thumbnail.jpg"
    // },
    // {
    //   id: 3,
    //   username: "Roman Dvortsov",
    //   status: "I am junior developer...",
    //   location: { country: "Belarus", city: "Mynsk" },
    //   followed: false,
    //   avatarUrl:
    //     "https://i7.pngguru.com/preview/340/946/334/avatar-user-computer-icons-software-developer-avatar-thumbnail.jpg"
    // }
  ]
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userID) {
            return { ...user, followed: true };
          }
          return user;
        })
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userID) {
            return { ...user, followed: false };
          }
          return user;
        })
      };

    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users]
      };

    default:
      return state;
  }
};

export const followAC = userID => ({
  type: FOLLOW,
  userID
});
export const unfollowAC = userID => ({
  type: UNFOLLOW,
  userID
});
export const setUsersAC = users => ({
  type: SET_USERS,
  users
});

export default usersReducer;
