import { FC, ChangeEvent, useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  AsideRoomInfoContainer,
  AsideSearchContainer,
  Container,
  Main,
  ModalButton,
  ModalButtons,
  ModalTitle,
  UserPanelContainer,
  UsersTitle
} from "./styles";

import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

import AsideHeader from "components/aside/aside-header";
import AsideRoomInfo from "components/aside/aside-room-info";
import AsideSearch from "components/aside/aside-search";
import AsideUsers from "components/aside/aside-users";
import ChannelsList from "components/channels-list";
import UserPanel from "components/user-panel";

import ModalLayout from "layouts/modal";

interface AsideProps {
  activeRoom: Room | null;
  onLogout: () => void;
  onCreateRoomSubmit: (payload: Omit<RoomCreate, "userId">) => void;
  rooms: Room[];
  roomUsers: User[];
  user: User | null;
}

const schema = yup.object({
  name: yup.string().trim().min(3).required(),
  description: yup.string().trim().min(10).max(255).required()
});

const Aside: FC<AsideProps> = ({
  activeRoom,
  onLogout,
  onCreateRoomSubmit,
  rooms,
  roomUsers,
  user
}) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors }
  } = useForm<Omit<RoomCreate, "userId">>({
    resolver: yupResolver(schema)
  });

  const [searchRoomQuery, setSearchRoomQuery] = useState("");
  const [showAllRooms, setShowAllRooms] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const handleShowAllRooms = () => {
    setShowAllRooms(true);
  };

  const handleShowRoomUsers = () => {
    setShowAllRooms(false);
  };

  const handleShowRoomModal = () => {
    setShowModal(true);
  };

  const handleCreateRoomSubmit = (payload: Omit<RoomCreate, "userId">) => {
    onCreateRoomSubmit(payload);
    handleCloseRoomModalAndResetForm();
  };

  const handleCloseRoomModalAndResetForm = () => {
    setShowModal(false);
    reset();
  };

  const handleRoomSearchQueryChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setSearchRoomQuery(event.target.value);
  };

  const filteredRoomsByName = useMemo(() => {
    return rooms.filter((room) =>
      room.name
        .toLocaleLowerCase()
        .includes(searchRoomQuery.toLocaleLowerCase())
    );
  }, [rooms, searchRoomQuery]);

  return (
    <>
      <Container>
        <AsideHeader
          onShowAllRooms={handleShowAllRooms}
          onShowRoomModal={handleShowRoomModal}
          showAllRooms={showAllRooms}
        />

        {showAllRooms ? (
          <>
            <AsideSearchContainer>
              <AsideSearch
                onSearchQueryChange={handleRoomSearchQueryChange}
                searchQuery={searchRoomQuery}
              />
            </AsideSearchContainer>
            <Main>
              <ChannelsList
                onShowRoomUsers={handleShowRoomUsers}
                rooms={filteredRoomsByName}
              />
            </Main>
          </>
        ) : (
          <Main>
            {activeRoom && (
              <AsideRoomInfoContainer>
                <AsideRoomInfo room={activeRoom} />
              </AsideRoomInfoContainer>
            )}
            <UsersTitle variant="h1">Members ({roomUsers.length})</UsersTitle>
            <AsideUsers users={roomUsers} />
          </Main>
        )}

        {user && (
          <UserPanelContainer>
            <UserPanel onLogout={onLogout} user={user} />
          </UserPanelContainer>
        )}
      </Container>

      <ModalLayout open={showModal} onClose={handleCloseRoomModalAndResetForm}>
        <Stack
          component="form"
          onSubmit={handleSubmit(handleCreateRoomSubmit)}
          spacing="26.5px"
        >
          <ModalTitle>New Channel</ModalTitle>
          <TextField
            error={!!errors?.name?.message}
            helperText={errors.name?.message}
            label="Channel name"
            variant="outlined"
            {...register("name")}
          />
          <TextField
            error={!!errors?.description?.message}
            helperText={errors.description?.message}
            label="Channel Description"
            multiline
            rows={4}
            variant="outlined"
            {...register("description")}
          />
          <ModalButtons>
            <ModalButton type="submit">Save</ModalButton>
          </ModalButtons>
        </Stack>
      </ModalLayout>
    </>
  );
};

export default Aside;
