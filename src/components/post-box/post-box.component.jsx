import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Post from '../post/post.component';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from '../loader/loader.component';
import { Container } from './post-box.styles';

import { selectPosts } from '../../store/post/post.selector';
import { getPostsStart } from '../../store/post/post.action';
import { useEffect } from 'react';

const PostBox = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getPostsStart({ posts, page }));
    setPage(page + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPostsData = () => {
    dispatch(getPostsStart({ posts, page }));
    setPage(page + 1);
  };

  return (
    <Container>
      <InfiniteScroll
        dataLength={posts?.length}
        next={getPostsData}
        hasMore={true}
        loader={<Loader size={30} color="primary" />}
        scrollThreshold="200px"
      >
        {posts?.map((post) => (
          <Post key={post?._id} post={post} />
        ))}
      </InfiniteScroll>
    </Container>
  );
};

export default PostBox;
