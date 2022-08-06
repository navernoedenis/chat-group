import { FC, memo } from "react";
import { Container, Image, Name } from "./styles";

interface UserCardProps {
  user: User;
}

const UserCard: FC<UserCardProps> = ({ user }) => (
  <Container>
    <Image src={user.image ?? ""} />
    <Name variant="h3" noWrap>
      {user.name}
    </Name>
  </Container>
);

export default memo(UserCard);
