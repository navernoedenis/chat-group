import { styled } from "@mui/material/styles";
import { COLORS } from "app/theme";

import Box from "@mui/material/Box";

export const ModalWrapper = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "5px",
  maxWidth: "480px",
  width: "100%",
  backgroundColor: COLORS.NIGHT_RIDER,
  padding: "15px"
});
