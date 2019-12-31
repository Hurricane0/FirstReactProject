const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURREN_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IN_FOLLOWING_PROCESS = "TOGGLE_IN_FOLLOWING_PROCESS";

let initialState = {
  users: [],
  totalUsersCount: 270,
  pageSize: 30,
  currentPage: 1,
  isFetching: true,
  inFollowingProcess: []
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
        users: action.users
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case TOGGLE_IN_FOLLOWING_PROCESS:
      return {
        ...state,
        inFollowingProcess: action.isFollowing
          ? [...state.inFollowingProcess, action.userId]
          : state.inFollowingProcess.filter(id => id !== action.userId)
      };
    default:
      return state;
  }
};

export const follow = userID => ({
  type: FOLLOW,
  userID
});
export const unfollow = userID => ({
  type: UNFOLLOW,
  userID
});
export const setUsers = users => ({
  type: SET_USERS,
  users
});
export const setCurrentPage = currentPage => ({
  type: SET_CURRENT_PAGE,
  currentPage
});
export const toggleIsFetching = isFetching => ({
  type: TOGGLE_IS_FETCHING,
  isFetching
});
export const toggleInFollowingProcess = (isFollowing, userId) => ({
  type: TOGGLE_IN_FOLLOWING_PROCESS,
  isFollowing,
  userId
});

export default usersReducer;
