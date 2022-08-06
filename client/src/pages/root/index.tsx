import { FC, useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";
import { Container, AsideBox, Main } from "./styles";

import Aside from "components/aside";

import { useAppDispatch, useAppSelector } from "redux/store";

import { logOut } from "redux/user/slice";
import { roomsActions, getAllRooms } from "redux/rooms/slice";

import { selectActiveRoom, selectRoomUsers } from "redux/room/selectors";
import { selectRooms } from "redux/rooms/selectors";
import { selectUser } from "redux/user/selectors";

const RootPage: FC = () => {
  const dispatch = useAppDispatch();

  const activeRoom = useAppSelector(selectActiveRoom);
  const rooms = useAppSelector(selectRooms);
  const roomUsers = useAppSelector(selectRoomUsers);
  const user = useAppSelector(selectUser);

  useLayoutEffect(() => {
    dispatch(getAllRooms());

    return () => {
      dispatch(roomsActions.resetRooms());
    };
  }, [dispatch]);

  const handleCreateRoomSubmit = (payload: Omit<RoomCreate, "userId">) => {
    if (user) {
      const data = { ...payload, userId: user.id };
      dispatch(roomsActions.createRoom(data));
    }
  };

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <Container>
      <AsideBox>
        <Aside
          activeRoom={activeRoom}
          onLogout={handleLogout}
          onCreateRoomSubmit={handleCreateRoomSubmit}
          rooms={rooms}
          roomUsers={roomUsers}
          user={user}
        />
      </AsideBox>
      <Main component="main">
        <Outlet />
      </Main>
    </Container>
  );
};

export default RootPage;
