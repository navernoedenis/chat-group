import { FC, useCallback, memo } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Container, TextField, Button, ButtonIcon } from "./styles";

interface ChatFieldProps {
  onMessageSubmit: (data: MessageForm) => void;
  placeholder: string;
}

interface MessageForm {
  message: string;
}

const schema = yup.object({
  message: yup.string().trim().min(1).required()
});

const ChatField: FC<ChatFieldProps> = ({ onMessageSubmit, placeholder }) => {
  const { register, handleSubmit, reset } = useForm<MessageForm>({
    resolver: yupResolver(schema)
  });

  const handleSubmitAndResetForm = useCallback(
    (payload: MessageForm) => {
      onMessageSubmit(payload);
      reset();
    },
    [onMessageSubmit, reset]
  );

  return (
    <Container
      component="form"
      onSubmit={handleSubmit(handleSubmitAndResetForm)}
    >
      <TextField
        autoComplete="off"
        placeholder={placeholder}
        {...register("message")}
      />
      <Button type="submit" disableRipple>
        <ButtonIcon />
      </Button>
    </Container>
  );
};

export default memo(ChatField);
