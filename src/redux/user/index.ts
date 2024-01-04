import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../index';

// Define a type for the slice state
interface UserState {
  token: string;
  name: string;
  email: string;
  phone: string;
}

// Define the initial state using that type
const initialState: UserState = {
  token: '',
  name: '',
  email: '',
  phone: '',
};

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserState>) => {
      state.token = action.payload.token;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
    },
    logout: state => {
      state.token = '';
      state.name = '';
      state.email = '';
      state.phone = '';
    },
  },
});

export const {login, logout} = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
