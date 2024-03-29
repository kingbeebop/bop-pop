// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface AuthState {
//   user: { username: string } | null;
// }

// const initialState: AuthState = {
//   user: null,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     loginUser: (state, action: PayloadAction<{ username: string; password: string }>) => {
//       state.user = action.payload;
//     },
//     logoutUser: (state) => {
//       state.user = null;
//     },
//   },
// });

// export const { loginUser, logoutUser } = authSlice.actions;
// export default authSlice.reducer;
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  user: { username: string } | null;
}

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<{ username: string; password: string }>) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
    },
  },
});

export const { loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
