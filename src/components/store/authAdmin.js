import { createSlice } from "@reduxjs/toolkit";

const authAdminSlice = createSlice({
  name: "authadmin",
  initialState: {
    listOfEmployee: [],
  },
  reducers: {
    authAdmin: (state, action) => {
      state.listOfEmployee.push(action.payload);
    },
  },
});

export const { authAdmin } = authAdminSlice.actions;

export default authAdminSlice.reducer;
