import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

////////////////////////////////////
// Api Tokens and Auth
///////////////////////////////
// import { tokenConfig } from "../auth/tokenConfig";
const apiKey = "f0265235ae7ce3c559cfda25b0fec021";

///////////////////////////////////
// Axios Get Discovery Movies
//////////////////////////////
export const getSearchMovies = createAsyncThunk(
  "search/getSearchMovies",
  async (obj, thunkAPI) => {
    try {
      // console.log("getSearchMovies in redux is running");
      const searchQuery = obj.searchValue;
      const searchMoviesUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchQuery}&page=1&include_adult=false`;
      const response = await axios.get(searchMoviesUrl);
      // console.log("search response is", response);
      return response.data.results;
    } catch (error) {
      console.error(error);
    }
  }
);

////////////////////////////////////
// Discover Movies Slice
////////////////////////////////
export const searchMoviesSlice = createSlice({
  name: "search",
  initialState: {
    searchMovies: [],
    status: null,
  },
  reducers: {
    clearSearch: (state) => {
      state.searchedMovies = [];
    },
  },
  extraReducers: {
    [getSearchMovies.pending]: (state, action) => {
      state.status = "loading";
    },
    [getSearchMovies.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.searchedMovies = payload;
    },
    [getSearchMovies.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

//////////////////////////
// Selectors
//////////////////////
export const selectSearched = (state) => state.search.searchedMovies;

/////////////////////////////////
// Export Reducers
/////////////////////////////
export const { clearSearch } = searchMoviesSlice.actions;

export default searchMoviesSlice.reducer;
