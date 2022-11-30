export const selectPosts = (state) => state.post.posts;
export const selectIsLoading = (state) => state.post.isLoading;
export const selectError = (state) => state.post.error;

export const selectLikeLoading = (state) => state.post.likeLoading;
export const selectLikeError = (state) => state.post.likeError;

export const selectCommentLoading = (state) => state.post.commentLoading;
export const selectCommentError = (state) => state.post.commentError;
