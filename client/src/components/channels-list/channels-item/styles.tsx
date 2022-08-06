import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export const LinkContainer = styled(Link)({
  display: "flex",
  alignItems: "center",
  cursor: "pointer"
});

export const Image = styled(Avatar)({
  marginRight: "12px"
});

export const Title = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    fontSize: "16px"
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "15.5px"
  }
}));
