import { createSlice } from "@reduxjs/toolkit";

const initialState = { ids: [] };

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFav: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFromFav: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const favoritesActions = favoritesSlice.actions;
export default favoritesSlice.reducer;
