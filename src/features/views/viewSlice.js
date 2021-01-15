import { createSlice } from "@reduxjs/toolkit";

////////////////////////////////////
// Set View Slice
////////////////////////////////
export const viewSlice = createSlice({
  name: "view",
  initialState: {
    view: "discover",
    status: null,
  },
  reducers: {
    setView: (state, action) => {
      state.view = action.payload;
    },
  },
});

/////////////////////////////////
// Export Reducers
/////////////////////////////
export const { setView } = viewSlice.actions;

export default viewSlice.reducer;
