import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
//   tracks: [],
  index: 0,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    currentTrack(state, action) {
        state.index = action.payload
    },
  },
});

export const {currentTrack} = playerSlice.actions;
export default playerSlice.reducer