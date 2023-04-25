import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addNewPost } from '../posts/postsSlice';
import { selectAllUsers } from '../users/usersSlice';

export default function AddPostForm() {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  const [addRequestStatus, setAddRequestStatus] = useState('idle');
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [userId, setUserId] = useState('');

  const canSave =
    [postTitle, postBody, userId].every(Boolean) && addRequestStatus === 'idle';

  const onSavePost = () => {
    if (canSave) {
      try {
        setAddRequestStatus('pending');
        dispatch(
          addNewPost({ title: postTitle, body: postBody, userId: userId })
        ).unwrap();
        setPostTitle('');
        setPostBody('');
        setUserId('');
      } catch (err) {
        console.log('Failed to save the post', err);
      } finally {
        setAddRequestStatus('idle');
      }
    }
  };

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

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
        <label htmlFor='postAuthor'>Author:</label>
        <select
          id='postAuthor'
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        >
          <option value=''></option>
          {usersOptions}
        </select>
        <label htmlFor='postBody'>Content: </label>
        <textarea
          className='inputFormatter textarea'
          name='postBody'
          id='postBody'
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />
        <button
          className='postFormBtn'
          type='button'
          onClick={onSavePost}
          disabled={!canSave}
        >
          Save Post
        </button>
      </form>
    </section>
  );
}
