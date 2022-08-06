import { styled } from "@mui/material/styles";
import { COLORS } from "app/theme";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Container = styled(Box)({
  display: "flex",
  alignItems: "center"
});

export const Image = styled(Avatar)(({ theme }) => ({
  marginRight: "20px",

  [theme.breakpoints.down("xl")]: {
    marginRight: "16px"
  }
}));

export const Name = styled(Typography)({
  fontWeight: "700",
  color: COLORS.GREY,
  textTransform: "capitalize"
});
