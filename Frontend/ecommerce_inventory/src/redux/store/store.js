import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../reducer/sidebardata";
<<<<<<< HEAD
import IsLoggedInReducer from "../reducer/IsLoggedInReducer";
const store=configureStore({
    reducer:{
        sidebardata:sidebarReducer,
        isLoggedInReducer:IsLoggedInReducer
=======
const store=configureStore({
    reducer:{
        sidebardata:sidebarReducer
>>>>>>> cc9368e6b21427bc48b26647a666ef918d570d3f
    }
});

export default store;