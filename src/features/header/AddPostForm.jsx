import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { postAdded } from '../posts/postsSlice';

export default function AddPostForm() {
  const dispatch = useDispatch();

  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');

  const onSavePost = () => {
    if (postTitle && postBody) {
      dispatch(postAdded(postTitle, postBody));
      setPostBody('');
      setPostTitle('');
    }
  };

  return (
    <section className='addPost'>
      <h2 className='title'>Add New Post</h2>
      <form className='postForm'>
        <label htmlFor='postTitle'>Post Title:</label>
        <input
          className='inputFormatter'
          type='text'
          id='postTitle'
          name='postTitle'
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />

        <label htmlFor='postBody'>Content: </label>
        <textarea
          className='inputFormatter textarea'
          name='postBody'
          id='postBody'
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />
        <button className='postFormBtn' type='button' onClick={onSavePost}>
          Save Post
        </button>
      </form>
    </section>
  );
}
