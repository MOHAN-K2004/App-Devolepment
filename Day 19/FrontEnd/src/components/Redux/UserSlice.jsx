import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    vendors: [],
  },
  reducers: {
    login1: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    addVendor: (state, action) => {
      state.vendors.push(action.payload);
    },
    removeVendor: (state, action) => {
      state.vendors = state.vendors.filter((v, i) => i !== action.payload);
    },
  },
});
export const { login1, logout, addVendor, removeVendor } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const getVendors = (state) => state.user.vendors;

export default userSlice.reducer;
