import { styled } from "@mui/material/styles";

import { COLORS } from "app/theme";

import Box from "@mui/material/Box";
import ButtonContainer from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export const Form = styled(Box)({});

export const Fields = styled(Stack)({});

export const Buttons = styled(Stack)({
  marginTop: "15px"
});

export const Button = styled(ButtonContainer)({});

export const ModalMessage = styled(Typography)({
  textAlign: "center",
  color: COLORS.GAINSBORO
});

export const ModalButtons = styled(Stack)({
  marginTop: "15px"
});

export const ModalButton = styled(ButtonContainer)({});
