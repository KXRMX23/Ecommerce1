import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../reducer/sidebardata";
import IsLoggedInReducer from "../reducer/isLoggedInReducer";

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    isLoggedIn: IsLoggedInReducer,
  },
});

export default store;

