import PropTypes from 'prop-types';
import TimeAgo from './TimeAgo';
import PostAuthor from './PostAuthor';

export default function PostsExcerpt({ post }) {
  return (
    <article className='post'>
      <h3>{post.title}</h3>
      <p>{post.body}...</p>
      <p className='postCredit'>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
    </article>
  );
}

PostsExcerpt.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    userId: PropTypes.number.isRequired,
  }).isRequired,
};
