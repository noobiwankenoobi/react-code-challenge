import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

////////////////////////////////////
// Api Tokens and Auth
///////////////////////////////
// Setup config/headers and token
// import { tokenConfig } from "../auth/tokenConfig";
const apiKey = "f0265235ae7ce3c559cfda25b0fec021";
// GET request URL - Movie Discovery
const discoverMoviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

///////////////////////////////////
// Axios Get Discovery Movies
//////////////////////////////
export const getDiscoverMovies = createAsyncThunk(
  "discoverMovies/getDiscoverMovies",
  async (__, thunkAPI) => {
    try {
      const response = await axios.get(discoverMoviesUrl);
      console.log("response is", response);
      return response.data.results;
    } catch (error) {
      console.error(error);
    }
  }
);

////////////////////////////////////
// Discover Movies Slice
////////////////////////////////
export const discoverMoviesSlice = createSlice({
  name: "discover",
  initialState: {
    discoveredMovies: [],
    status: null,
  },
  extraReducers: {
    [getDiscoverMovies.pending]: (state, action) => {
      state.status = "loading";
    },
    [getDiscoverMovies.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.discoveredMovies = payload;
      console.log("payload", payload);
    },
    [getDiscoverMovies.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const selectDiscovered = (state) => state.discover.discoveredMovies;

export default discoverMoviesSlice.reducer;
