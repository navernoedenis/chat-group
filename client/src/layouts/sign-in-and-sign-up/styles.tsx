import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { COLORS } from "app/theme";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

export const Container = styled(Card)({
  maxWidth: "460px",
  width: "100%",
  backgroundColor: COLORS.BLACK,
  borderColor: COLORS.BURNT_SIENNA
});

export const Header = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "20px"
});

export const HeaderTitle = styled(Typography)({
  marginRight: "25px"
});

export const HeaderLink = styled(Link)({
  flexShrink: "0"
});

export const Main = styled(Box)({});
