import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface RoomState {
  activeRoom: Room | null;
  messages: Message[];
  users: User[];
}

const initialState: RoomState = {
  activeRoom: null,
  messages: [],
  users: []
};

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    setActiveRoom: (state, action: PayloadAction<Room | null>) => {
      state.activeRoom = action.payload;
    },
    setRoomMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },
    setRoomMessages: (state, action: PayloadAction<Message[]>) => {
      state.messages = action.payload;
    },
    setRoomUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    setRoomUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },

    resetRoom: () => initialState,
    roomEnter: (state, action: PayloadAction<RoomAndUserIds>) => {},
    roomGet: (state, action: PayloadAction<RoomId>) => {},
    roomLeave: (state, action: PayloadAction<RoomAndUserIds>) => {},
    roomMessageCreate: (
      state,
      action: PayloadAction<RoomAndUserIds & { text: string }>
    ) => {},
    roomMessages: (state, action: PayloadAction<RoomId>) => {},
    roomUsers: (state, action: PayloadAction<RoomId>) => {}
  }
});

export const roomActions = roomSlice.actions;

export default roomSlice.reducer;
