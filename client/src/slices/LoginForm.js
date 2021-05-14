import { createSlice } from "@reduxjs/toolkit";
export const LoginForm = createSlice({
  name: "login",
  initialState: {
    isAuthen: false,
  },
  reducers: {
    setAuthen: (state, action) => {
      const { payload } = action;
      return { ...state, isAuthen: payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuthen } = LoginForm.actions;
export default LoginForm.reducer;
