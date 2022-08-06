import { Dispatch, MiddlewareAPI, AnyAction } from "@reduxjs/toolkit";

import SocketClient from "api/socket";

import { Room } from "./events";
import { roomActions } from "redux/room/slice";
import { roomsActions } from "redux/rooms/slice";

export const chatMiddleware =
  (socket: SocketClient) =>
  (store: MiddlewareAPI) =>
  (next: Dispatch) =>
  async (action: AnyAction) => {
    const { dispatch } = store;
    const { type, payload } = action;

    switch (type) {
      case "user/setUser": {
        socket.connect();

        socket.on("connect", () => {
          socket.on(Room.On.SetActive, (room: Room | null) => {
            dispatch(roomActions.setActiveRoom(room));
          });

          socket.on(Room.On.GetUsers, (roomUsers: { user: User }[]) => {
            const users = roomUsers.map((roomUser) => roomUser.user);
            dispatch(roomActions.setRoomUsers(users));
          });

          socket.on(Room.On.GetMessages, (messages: Message[]) => {
            dispatch(roomActions.setRoomMessages(messages));
          });

          socket.on(Room.On.CreateMessage, (message: Message) => {
            dispatch(roomActions.setRoomMessage(message));
          });

          socket.on(Room.On.Enter, (user: User) => {
            dispatch(roomActions.setRoomUser(user));
          });

          socket.on(Room.On.Create, (room: Room) => {
            dispatch(roomsActions.setNewRoom(room));
          });
        });

        break;
      }

      case "rooms/createRoom": {
        const data = payload as RoomCreate;
        socket.emit(Room.Emit.Create, data);
        break;
      }

      case "room/roomEnter": {
        const data = payload as RoomAndUserIds;
        socket.emit(Room.Emit.Enter, data);
        break;
      }

      case "room/roomGet": {
        const data = payload as RoomId;
        socket.emit(Room.Emit.SetActive, data);
        break;
      }

      case "room/roomUsers": {
        const data = payload as RoomId;
        socket.emit(Room.Emit.GetUsers, data);
        break;
      }

      case "room/roomMessages": {
        const data = payload as RoomId;
        socket.emit(Room.Emit.GetMessages, data);
        break;
      }

      case "room/roomMessageCreate": {
        const data = payload as RoomAndUserIds & { text: string };
        socket.emit(Room.Emit.CreateMessage, data);
        break;
      }

      case "room/roomLeave": {
        const data = payload as RoomAndUserIds;
        socket.emit(Room.Emit.Leave, data);
        break;
      }
    }

    return next(action);
  };
