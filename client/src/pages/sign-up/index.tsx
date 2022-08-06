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

function transformEmptyStringToNull(value: string, defaultValue: string) {
  return defaultValue === "" ? null : value;
}

const schema = yup.object({
  name: yup.string().min(3).max(14).required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(20).required(),
  image: yup.string().url().nullable().transform(transformEmptyStringToNull)
});

interface SignUpForm {
  email: string;
  password: string;
  name: string;
  image: string | null;
}

const SignUpPage: FC = () => {
  const [modalMessage, setModalMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<SignUpForm>({
    resolver: yupResolver(schema),
    defaultValues: { image: null }
  });

  const handleFormSubmit = async (payload: SignUpForm) => {
    try {
      const { data } = await AuthService.httpSignUp(payload);
      setModalMessage(data.message);
    } catch (error) {
      if (error instanceof AxiosError) {
        setModalMessage(error.response?.data.error);
      }
    }
  };

  const handleFormReset = () => {
    reset();
  };

  const handleCloseModal = () => {
    setModalMessage("");
    handleFormReset();
  };

  return (
    <SignInAndSignUpLayout type="sign-up">
      <Form component="form" onSubmit={handleSubmit(handleFormSubmit)}>
        <Fields spacing="20px">
          <TextField
            label="Email"
            variant="outlined"
            error={!!errors?.email?.message}
            helperText={errors.email?.message}
            {...register("email")}
          />

          <TextField
            label="Name"
            variant="outlined"
            error={!!errors?.name?.message}
            helperText={errors.name?.message}
            {...register("name")}
          />

          <TextField
            label="Password"
            variant="outlined"
            type="password"
            error={!!errors?.password?.message}
            helperText={errors.password?.message}
            {...register("password")}
          />

          <TextField
            label="Image url (Optional)"
            variant="outlined"
            error={!!errors?.image?.message}
            helperText={errors.image?.message}
            {...register("image")}
          />
        </Fields>

        <Buttons direction="row" justifyContent="center" spacing="10px">
          <Button onClick={handleFormReset}>Reset</Button>
          <Button type="submit">Sign Up</Button>
        </Buttons>

        <ModalLayout open={Boolean(modalMessage)} onClose={handleCloseModal}>
          <ModalMessage variant="h2">{modalMessage}</ModalMessage>
          <ModalButtons spacing="10px" direction="row" justifyContent="center">
            <ModalButton onClick={handleCloseModal}>OK</ModalButton>
          </ModalButtons>
        </ModalLayout>
      </Form>
    </SignInAndSignUpLayout>
  );
};

export default SignUpPage;
