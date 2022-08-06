import { styled } from "@mui/material/styles";
import { COLORS } from "app/theme";

import Box from "@mui/material/Box";
import IconButtonContainer from "@mui/material/IconButton";
import MenuContainer from "@mui/material/Menu";
import MenuItemContainer from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: "16.5px 25px",
  backgroundColor: COLORS.BLACK,

  [theme.breakpoints.down("lg")]: {
    padding: "20px"
  },
  [theme.breakpoints.down("md")]: {
    padding: "15px"
  }
}));

export const IconButton = styled(IconButtonContainer)({
  marginLeft: "auto",
  padding: "0",
  color: COLORS.SILVER
});

export const IconArrow = styled(ExpandMoreRoundedIcon)({});

export const Menu = styled(MenuContainer)({});

export const MenuItem = styled(MenuItemContainer)({});

export const MenuItemIconBox = styled(Box)({
  marginRight: "12px"
});

export const MenuItemText = styled(Typography)({
  fontWeight: "500",
  color: COLORS.GAINSBORO
});

export const Divider = styled(Box)({
  margin: "10px 0",
  height: "1px",
  backgroundColor: COLORS.BLACK_MARLIN
});
