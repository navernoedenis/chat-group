import { styled } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Container = styled(Box)({});

export const Title = styled(Typography)({
  marginBottom: "18px",
  textTransform: "uppercase"
});

export const Description = styled(Typography)({
  letterSpacing: "-0.5px"
});
