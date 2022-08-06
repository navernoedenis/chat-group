import { FC, useState } from "react";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  Form,
  Fields,
  Buttons,
  Button,
  ModalMessage,
  ModalButtons,
  ModalButton
} from "./styles";

import TextField from "@mui/material/TextField";

import ModalLayout from "layouts/modal";
import SignInAndSignUpLayout from "layouts/sign-in-and-sign-up";

import AuthService from "services/auth";
import TokenService from "services/token";

import { useAppDispatch } from "redux/store";
import { userActions } from "redux/user/slice";

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(20).required()
});

interface SignInForm {
  email: string;
  password: string;
}

const SignInPage: FC = () => {
  const dispatch = useAppDispatch();
  const [modalMessage, setModalMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<SignInForm>({
    resolver: yupResolver(schema)
  });

  const handleFormSubmit = async (payload: SignInForm) => {
    try {
      const { data } = await AuthService.httpSignIn(payload);
      TokenService.setToken(data.accessToken);
      dispatch(userActions.setUser(data.user));
    } catch (error) {
      if (error instanceof AxiosError) {
        setModalMessage(error.response?.data.error);
      }
    }
  };

  const handleFormReset = () => {
    reset();
  };

  const handleHideModal = () => {
    setModalMessage("");
  };

  return (
    <SignInAndSignUpLayout type="sign-in">
      <Form component="form" onSubmit={handleSubmit(handleFormSubmit)}>
        <Fields spacing="20px">
          <TextField
            error={!!errors?.email?.message}
            helperText={errors.email?.message}
            label="Email"
            variant="outlined"
            {...register("email")}
          />
          <TextField
            error={!!errors?.password?.message}
            helperText={errors.password?.message}
            label="Password"
            type="password"
            variant="outlined"
            {...register("password")}
          />
        </Fields>

        <Buttons direction="row" justifyContent="center" spacing="10px">
          <Button onClick={handleFormReset}>Reset</Button>
          <Button type="submit">Sign In</Button>
        </Buttons>

        <ModalLayout open={Boolean(modalMessage)} onClose={handleHideModal}>
          <ModalMessage variant="h2">{modalMessage}</ModalMessage>
          <ModalButtons spacing="10px" direction="row" justifyContent="center">
            <ModalButton onClick={handleHideModal}>OK</ModalButton>
          </ModalButtons>
        </ModalLayout>
      </Form>
    </SignInAndSignUpLayout>
  );
};

export default SignInPage;
