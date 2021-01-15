import { configureStore } from "@reduxjs/toolkit";
// Reducers
import discoverMoviesReducer from "../features/movies/discoverMoviesSlice";
import searchMoviesReducer from "../features/movies/searchMoviesSlice";
import viewReducer from "../features/views/viewSlice";

export default configureStore({
  reducer: {
    discover: discoverMoviesReducer,
    search: searchMoviesReducer,
    view: viewReducer,
  },
});
