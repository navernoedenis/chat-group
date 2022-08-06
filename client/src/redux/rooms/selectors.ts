import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "redux/store";

const selectRoomsState = (state: RootState) => state.roomsState;

export const selectRooms = createSelector(
  [selectRoomsState],
  (state) => state.rooms
);
