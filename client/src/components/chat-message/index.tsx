import { FC, memo } from "react";
import {
  Container,
  Content,
  Date,
  Header,
  Image,
  Message,
  Username,
} from "./styles";

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: FC<ChatMessageProps> = ({ message }) => (
  <Container>
    <Image src={message.user.image ?? ""} />
    <Content>
      <Header>
        <Username variant="h2">{message.user.name}</Username>
        <Date date={message.createdAt} />
      </Header>
      <Message variant="h2">{message.text}</Message>
    </Content>
  </Container>
);

export default memo(ChatMessage);
