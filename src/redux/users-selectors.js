
export const getUsersSelector = (state) => {
   return state.usersPage.usersData;
}
export const getpageSizeSelector = (state) => {
   return state.usersPage.pageSize;
}
export const getTotalUsersCountSelector = (state) => {
   return state.usersPage.totalUsersCount;
}
export const getCurrentPageSelector = (state) => {
   return state.usersPage.currentPage;
}
export const getIsFetchingSelector = (state) => {
   return state.usersPage.isFetching;
}
export const getFollowingProgressSelector = (state) => {
   return state.usersPage.isFollowingProgress;
}
