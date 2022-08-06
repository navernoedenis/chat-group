import { styled } from "@mui/material/styles";

import Box from "@mui/material/Box";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

import { COLORS } from "app/theme";

export const Container = styled(Box)({
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  padding: "12px 10px",
  backgroundColor: COLORS.BLACK_MARLIN
});

export const SearchIcon = styled(SearchRoundedIcon)({
  marginRight: "10px"
});

export const SearchField = styled("input")({});
