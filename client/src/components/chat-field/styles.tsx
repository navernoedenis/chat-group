import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import ButtonContainer from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";

import { COLORS } from "app/theme";

export const Container = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: "8px",
  padding: "7px",
  paddingLeft: "18px",
  backgroundColor: COLORS.BLACK_MARLIN
});

export const TextField = styled("input")({});

export const Button = styled(ButtonContainer)({
  marginLeft: "7px",
  borderRadius: "8px",
  padding: "9px",
  backgroundColor: COLORS.ROYAL_BLUE
});

export const ButtonIcon = styled(SendIcon)({
  height: "20px",
  width: "20px"
});
