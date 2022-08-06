import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "redux/store";

const selectUserState = (state: RootState) => state.userState;

export const selectUser = createSelector(
  [selectUserState],
  (state) => state.user
);
