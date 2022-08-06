import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";
import { httpGetRooms } from "services/room";

export interface RoomsState {
  rooms: Room[];
  error: string | null;
}

const initialState: RoomsState = {
  rooms: [],
  error: null
};

const roomsSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {
    setNewRoom: (state, action: PayloadAction<Room>) => {
      const sortedRooms = [...state.rooms, action.payload].sort(
        (current, next) => current.name.localeCompare(next.name)
      );
      state.rooms = sortedRooms;
    },
    setRooms: (state, action: PayloadAction<Room[]>) => {
      state.rooms.push(...action.payload);
    },
    setRoomsError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    createRoom: (state, action: PayloadAction<RoomCreate>) => {},
    resetRooms: () => initialState
  }
});

export const roomsActions = roomsSlice.actions;

export const getAllRooms = () => async (dispatch: Dispatch) => {
  try {
    const { data } = await httpGetRooms();
    dispatch(roomsActions.setRooms(data.rooms));
  } catch (error) {
    console.log("getAllRooms ERROR", error);
  }
};

export default roomsSlice.reducer;
