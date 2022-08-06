import { FC } from "react";
import { LinkContainer, Image, Title } from "./styles";
import { getOneOrTwoUppercaseLetters } from "helpers/strings";

interface ChannelsItemProps {
  onShowRoomUsers: () => void;
  room: Room;
}

const ChannelsItem: FC<ChannelsItemProps> = ({ onShowRoomUsers, room }) => (
  <LinkContainer to={`/room/${room.id}`} onClick={onShowRoomUsers}>
    <Image>{getOneOrTwoUppercaseLetters(room.name)}</Image>
    <Title variant="h1" noWrap>
      {room.name}
    </Title>
  </LinkContainer>
);

export default ChannelsItem;
