import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface ModalState {
  walletConnectModalState: boolean;
}

// Initial state
const initialState: ModalState = {
  walletConnectModalState: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setWalletConnectModalState: (state, action: PayloadAction<boolean>) => {
      state.walletConnectModalState = action.payload;
    },
  },
});

export const { setWalletConnectModalState } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
