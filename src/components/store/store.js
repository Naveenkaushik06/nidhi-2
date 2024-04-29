import { configureStore } from "@reduxjs/toolkit";
import authadminReducer from "../store/authAdmin";

const store = configureStore({
  reducer: {
    authadminReducer: authadminReducer,
  },
});

export default store;
