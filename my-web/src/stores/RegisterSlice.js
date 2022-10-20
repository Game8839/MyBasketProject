import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  mobile: '',
  password: '',
  confirmPassword: '',
};
const RegisterSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setRegisterData: (state, action) => {
      state[action.payload.name] = action.payload.value;
    },
    resetRegisterData: (state, action) => {
      state = initialState;
    },
  },
});

export default RegisterSlice.reducer;
export const { setRegisterData, resetRegisterData } = RegisterSlice.actions;
