import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './store/users/usersSlice';
import UserList from './UserList';

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserList />
      </div>
    </Provider>
  );
}

export default App;
