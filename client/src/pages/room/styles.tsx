import { styled } from "@mui/material/styles";
import { SHADOWS } from "app/theme";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export const Container = styled(Box)({});

export const Header = styled(Box)(({ theme }) => ({
  boxShadow: SHADOWS.DEFAULT,
  padding: "18px 70px",
  minHeight: "60.5px",

  [theme.breakpoints.down("xl")]: {
    padding: "18px 50px"
  },
  [theme.breakpoints.down("lg")]: {
    padding: "18px 45px"
  },
  [theme.breakpoints.down("md")]: {
    padding: "18px 25px"
  }
}));

export const RoomName = styled(Typography)({
  textTransform: "uppercase"
});

export const Main = styled(Stack)(({ theme }) => ({
  height: "calc(100vh - 60.5px - 132px)",
  padding: "0 70px",

  [theme.breakpoints.down("xl")]: {
    padding: "0 50px"
  },
  [theme.breakpoints.down("lg")]: {
    height: "calc(100vh - 60.5px - 102px)",
    padding: "0 45px"
  },
  [theme.breakpoints.down("md")]: {
    height: "calc(100vh - 60.5px - 102px)",
    padding: "0 25px"
  },
  [theme.breakpoints.down("sm")]: {}
}));

export const Messages = styled(Stack)(({ theme }) => ({
  overflowY: "auto",
  padding: "90px 0 10px",

  [theme.breakpoints.down("xl")]: {
    paddingTop: "60px"
  },
  [theme.breakpoints.down("lg")]: {
    paddingTop: "60px"
  },
  [theme.breakpoints.down("md")]: {
    paddingTop: "40px"
  }
}));

export const ChatFieldContainer = styled(Box)(({ theme }) => ({
  padding: "40px 70px",

  [theme.breakpoints.down("xl")]: {
    padding: "40px 50px"
  },
  [theme.breakpoints.down("lg")]: {
    padding: "25px 45px"
  },
  [theme.breakpoints.down("md")]: {
    padding: "25px"
  },
  [theme.breakpoints.down("sm")]: {}
}));
