export const selectSearchedUsers = (state) => state.otherUsers.searchedUsers;
export const selectIsLoading = (state) => state.otherUsers.isLoading;
export const selectError = (state) => state.otherUsers.error;

export const selectUser = (state) => state.otherUsers.user;
export const selectUserLoading = (state) => state.otherUsers.userLoading;
export const selectUserError = (state) => state.otherUsers.userError;

export const selectFollowUserLoading = (state) =>
  state.otherUsers.followUserLoading;
export const selectFollowUserError = (state) =>
  state.otherUsers.followUserError;
