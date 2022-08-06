import { FC } from "react";
import { Container } from "./styles";

import ChannelsItem from "./channels-item";

interface ChannelsListProps {
  onShowRoomUsers: () => void;
  rooms: Room[];
}

const ChannelsList: FC<ChannelsListProps> = ({ onShowRoomUsers, rooms }) => (
  <Container spacing="20px">
    {rooms.map((room) => (
      <ChannelsItem
        key={room.id}
        onShowRoomUsers={onShowRoomUsers}
        room={room}
      />
    ))}
  </Container>
);

export default ChannelsList;
