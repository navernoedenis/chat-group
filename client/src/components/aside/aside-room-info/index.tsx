import { FC } from "react";
import { Container, Title, Description } from "./styles";

interface AsideRoomInfoProps {
  room: Room;
}

const AsideRoomInfo: FC<AsideRoomInfoProps> = ({ room }) => (
  <Container>
    <Title variant="h1">{room.name}</Title>
    <Description variant="h3">{room.description}</Description>
  </Container>
);

export default AsideRoomInfo;
