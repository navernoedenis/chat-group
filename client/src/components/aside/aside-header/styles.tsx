import { styled } from "@mui/material/styles";
import { SHADOWS } from "app/theme";

import Box from "@mui/material/Box";

export const Container = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "14px 25px",
  minHeight: "60px",
  boxShadow: SHADOWS.DEFAULT
});

export const TitleContainer = styled(Box)({
  display: "flex",
  alignItems: "center"
});
