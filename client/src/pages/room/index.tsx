import { FC, useLayoutEffect, useCallback, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import {
  ChatFieldContainer,
  Container,
  Header,
  Main,
  Messages,
  RoomName
} from "./styles";

import ChatField from "components/chat-field";
import ChatMessage from "components/chat-message";

import { useAppDispatch, useAppSelector } from "redux/store";

import { roomActions } from "redux/room/slice";

import { selectActiveRoom, selectRoomMessages } from "redux/room/selectors";
import { selectUser } from "redux/user/selectors";

interface MessageForm {
  message: string;
}

const RoomPage: FC = () => {
  const { id } = useParams();

  const chatBottomRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();

  const activeRoom = useAppSelector(selectActiveRoom);
  const messages = useAppSelector(selectRoomMessages);
  const user = useAppSelector(selectUser);

  useLayoutEffect(() => {
    if (!id || !user) return;

    const roomId = +id;
    const userId = user.id;

    dispatch(roomActions.roomEnter({ roomId, userId }));
    dispatch(roomActions.roomGet({ roomId }));
    dispatch(roomActions.roomMessages({ roomId }));
    dispatch(roomActions.roomUsers({ roomId }));

    return () => {
      dispatch(roomActions.resetRoom());
    };
  }, [id, user, dispatch]);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleMessageSubmit = useCallback(
    (data: MessageForm) => {
      if (!activeRoom || !user) return;

      const payload = {
        roomId: activeRoom.id,
        userId: user.id,
        text: data.message
      };

      dispatch(roomActions.roomMessageCreate(payload));
    },
    [dispatch, activeRoom, user]
  );

  return (
    <Container>
      <Header>
        <RoomName variant="h1" noWrap>
          {activeRoom?.name}
        </RoomName>
      </Header>

      <Main>
        <Messages spacing="38px">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          <div ref={chatBottomRef} />
        </Messages>
      </Main>

      <ChatFieldContainer>
        <ChatField
          onMessageSubmit={handleMessageSubmit}
          placeholder="Type a message here"
        />
      </ChatFieldContainer>
    </Container>
  );
};

export default RoomPage;
