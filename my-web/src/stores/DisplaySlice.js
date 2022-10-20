import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  display: 'myExpense',
};
const DisplaySlice = createSlice({
  name: 'Display',
  initialState,
  reducers: {
    setDisplayData: (state, action) => {
      state.display = action.payload;
    },
  },
});

export default DisplaySlice.reducer;
export const { setDisplayData } = DisplaySlice.actions;
