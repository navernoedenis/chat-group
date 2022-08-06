import { styled } from "@mui/material/styles";
import { COLORS } from "app/theme";

import Box from "@mui/material/Box";

export const Container = styled(Box)({
  display: "flex",
  height: "100vh",
  width: "100vw"
});

export const AsideBox = styled(Box)(({ theme }) => ({
  backgroundColor: COLORS.BLACK_RUSSIA,
  width: "324px",

  [theme.breakpoints.down("xl")]: {
    width: "300px"
  },
  [theme.breakpoints.down("lg")]: {
    width: "280px"
  },
  [theme.breakpoints.down("md")]: {
    width: "250px"
  },
  [theme.breakpoints.down("sm")]: {
    width: "220px"
  }
}));

export const Main = styled(Box)(({ theme }) => ({
  backgroundColor: COLORS.JAGUAR,
  width: "calc(100vw - 324px)",

  [theme.breakpoints.down("xl")]: {
    width: "calc(100vw - 300px)"
  },
  [theme.breakpoints.down("lg")]: {
    width: "calc(100vw - 280px)"
  },
  [theme.breakpoints.down("md")]: {
    width: "calc(100vw - 250px)"
  },
  [theme.breakpoints.down("sm")]: {
    width: "calc(100vw - 220px)"
  }
}));
