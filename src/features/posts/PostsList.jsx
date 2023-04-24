import { useSelector } from 'react-redux';
import { selectAllPosts } from './postsSlice';

export default function PostsList() {
  const posts = useSelector(selectAllPosts);
  return (
    <section className='posts'>
      <h2 className='title'>Posts</h2>
      {posts.map((post) => {
        return (
          <article key={post.id} className='post'>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </article>
        );
      })}
    </section>
  );
}
