import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?results=10');
      const data = await response.json();
      return data.results;
    } catch (error) {
      return error.response.data;
    }
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    isLoading: false,
    error: undefined,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;
export const selectUsers = (state) => state.users.users;
export const selectLoading = (state) => state.users.isLoading;
export const selectError = (state) => state.users.error;
