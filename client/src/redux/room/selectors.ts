import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "redux/store";

const selectRoomState = (state: RootState) => state.roomState;

export const selectActiveRoom = createSelector(
  [selectRoomState],
  (state) => state.activeRoom
);

export const selectRoomUsers = createSelector(
  [selectRoomState],
  (state) => state.users
);

export const selectRoomMessages = createSelector(
  [selectRoomState],
  (state) => state.messages
);
