import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    title: 'About the Redux Toolkit',
    body: 'hey hey this is using reddux toolkit enjoy it!',
  },
  {
    id: 2,
    title: 'Listen to Music Events',
    body: 'Every time you listen to a new evet you get a better experience.',
  },
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, body) {
        return {
          payload: {
            id: nanoid(),
            title,
            body,
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
