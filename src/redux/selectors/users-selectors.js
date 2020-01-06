export const selectUsers = state => {
  return state.usersPage.users;
};
export const selectTotalUsersCount = state => {
  return state.usersPage.totalUsersCount;
};
export const selectPageSize = state => {
  return state.usersPage.pageSize;
};
export const selectCurrentPage = state => {
  return state.usersPage.currentPage;
};
export const selectIsFetching = state => {
  return state.usersPage.isFetching;
};
export const selectInFollowingProcess = state => {
  return state.usersPage.inFollowingProcess;
};
