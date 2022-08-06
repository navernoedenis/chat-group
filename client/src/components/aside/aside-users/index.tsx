import { FC } from "react";
import { Container } from "./styles";

import UserCard from "components/user-card";

interface AsideUsersProps {
  users: User[];
}

const AsideUsers: FC<AsideUsersProps> = ({ users }) => (
  <Container spacing="32px">
    {users.map((user) => (
      <UserCard key={user.id} user={user} />
    ))}
  </Container>
);

export default AsideUsers;
