import { styled } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  height: "100%"
});

export const Main = styled(Box)(({ theme }) => ({
  overflowY: "auto",
  height: "100%",
  padding: "25px",

  [theme.breakpoints.down("lg")]: {
    padding: "20px"
  },
  [theme.breakpoints.down("md")]: {
    padding: "15px"
  }
}));

export const AsideSearchContainer = styled(Box)(({ theme }) => ({
  padding: "20px 25px 0",

  [theme.breakpoints.down("xl")]: {
    padding: "25px 25px 0"
  },
  [theme.breakpoints.down("lg")]: {
    padding: "20px 20px 0"
  },
  [theme.breakpoints.down("md")]: {
    padding: "15px 15px 0"
  }
}));

export const AsideRoomInfoContainer = styled(Box)({
  marginBottom: "44px"
});

export const UsersTitle = styled(Typography)({
  marginBottom: "25px",
  textTransform: "uppercase"
});

export const UserPanelContainer = styled(Box)({
  marginTop: "auto"
});

export const ModalTitle = styled(Typography)({});

export const ModalButtons = styled(Box)({
  marginTop: "22px",
  textAlign: "right"
});

export const ModalButton = styled(Button)({});
