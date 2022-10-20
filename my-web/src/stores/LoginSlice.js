import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  emailOrMobile: '',
  password: '',
};
const LoginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLoginData: (state, action) => {
      console.log('payload : Login :' + action.payload);
      state[action.payload.name] = action.payload.value;
    },
    resetLoginData: (state, action) => {
      state = initialState;
    },
  },
});

export default LoginSlice.reducer;
export const { setLoginData, resetLoginData } = LoginSlice.actions;
