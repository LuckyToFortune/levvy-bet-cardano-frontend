import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "@/store/authSlice";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";

import createWebStorage from "redux-persist/es/storage/createWebStorage";
import { modalReducer } from "./modalSlice";

export function createPersistStore() {
  const isServer = typeof window === "undefined";
  if (isServer) {
    return {
      getItem() {
        return Promise.resolve(null);
      },
      setItem() {
        return Promise.resolve();
      },
      removeItem() {
        return Promise.resolve();
      },
    };
  }
  return createWebStorage("local");
}
const storage = typeof window !== "undefined"
    ? createWebStorage("local")
    : createPersistStore();
// configure which keuy we want to persist
const authPersistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["authState", "userInfo"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  modal: modalReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);