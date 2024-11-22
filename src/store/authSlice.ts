import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface IAuthState {
  authState: boolean;
  userInfo: UserInfo;
}

const initialState: IAuthState = {
  authState: false,
  userInfo: {
    username: "",
    email: "",
    token: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<boolean>) => {
      state.authState = action.payload;
    },
    setUserInfo: (state, action: PayloadAction<UserInfo>) => {
      state.userInfo = action.payload;
    }
  },
});

export const { setAuthState, setUserInfo } = authSlice.actions;
export const authReducer = authSlice.reducer;