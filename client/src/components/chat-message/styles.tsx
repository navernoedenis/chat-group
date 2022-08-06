import { styled } from "@mui/material/styles";
import { COLORS } from "app/theme";

import TimeAgo from "react-timeago";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Container = styled(Box)({
  display: "flex"
});

export const Image = styled(Avatar)(({ theme }) => ({
  marginRight: "28px",

  [theme.breakpoints.down("xl")]: {
    marginRight: "20px",
    height: "45px",
    width: "45px"
  },
  [theme.breakpoints.down("md")]: {
    height: "50px",
    width: "50px"
  }
}));

export const Content = styled(Box)({});

export const Header = styled(Box)({
  marginBottom: "8px",
  display: "flex",
  alignItems: "center"
});

export const Username = styled(Typography)({
  color: COLORS.GREY,
  textTransform: "capitalize"
});

export const Date = styled(TimeAgo)(({ theme }) => ({
  marginLeft: "25px",
  fontSize: "14px",
  lineHeight: "19px",
  fontWeight: "500",
  color: COLORS.GREY,

  [theme.breakpoints.down("xl")]: {
    marginLeft: "15px"
  }
}));

export const Message = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("xl")]: {
    fontSize: "16px"
  }
}));
