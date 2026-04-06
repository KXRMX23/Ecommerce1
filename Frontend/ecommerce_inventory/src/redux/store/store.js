import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../redicer/sidebardata";
import IsLoggedInReducer from "../redicer/isLoggedInReducer";

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    isLoggedIn: IsLoggedInReducer,
  },
});

export default store;

