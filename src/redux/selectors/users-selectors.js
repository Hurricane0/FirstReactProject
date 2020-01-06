import { createSelector } from "reselect";

export const primitiveSelectUsers = state => {
  return state.usersPage.users;
};
//reselect example:
export const superSelectUsers = createSelector(primitiveSelectUsers, users => {
  //some difficult operations
  return users;
});
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
