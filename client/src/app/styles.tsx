import { FC, ReactNode } from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";

import { COLORS } from "./theme";

export const MyGlobalStyles: FC<{ children: ReactNode }> = ({ children }) => (
  <StyledEngineProvider injectFirst>
    <CssBaseline />
    <GlobalStyles
      styles={{
        body: {
          fontFamily: "Noto Sans, sans-serif",
          backgroundColor: COLORS.BLACK_RUSSIA,
          fontSize: "14px",
          lineHeight: "19px",
          color: COLORS.GAINSBORO
        },
        a: {
          color: COLORS.GREY,
          textDecoration: "none"
        },
        input: {
          flexGrow: "1",
          backgroundColor: "transparent",
          outline: "none",
          border: "none",
          fontSize: "14px",
          fontWeight: "500",
          color: COLORS.GAINSBORO,
          cursor: "pointer",

          "&:placeholder": {
            color: COLORS.GREY
          }
        }
      }}
    />
    {children}
  </StyledEngineProvider>
);
