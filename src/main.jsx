import { store } from './app/store.js';
import { Provider } from 'react-redux';
import { fetchUsers } from './features/users/usersSlice.js';
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App.jsx';

import './styles/index.css';

store.dispatch(fetchUsers());

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
