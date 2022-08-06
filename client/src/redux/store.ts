import { configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";

import SocketClient from "api/socket";

import roomSlice from "redux/room/slice"
import roomsSlice from "redux/rooms/slice"
import userSlice from "redux/user/slice"

import { chatMiddleware } from "./middlewares"

const socket = new SocketClient()

export const store = configureStore({
  reducer: {
    roomsState: roomsSlice,
    roomState: roomSlice,
    userState: userSlice,
  },
  middleware: (defaultMiddlewares) => defaultMiddlewares().concat([chatMiddleware(socket)]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = useDispatch<AppDispatch>