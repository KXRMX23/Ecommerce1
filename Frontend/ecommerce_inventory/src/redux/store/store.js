import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../reducer/sidebardata";
import IsLoggedInReducer from "../reducer/IsLoggedInReducer";

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    IsLoggedIn: IsLoggedInReducer,
  },
});

export default store;

