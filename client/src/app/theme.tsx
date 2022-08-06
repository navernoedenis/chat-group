import { createTheme } from "@mui/material/styles";

// h1 - 18px 24.5px 700; #E0E0E0
// h2 - 18px 24.5px 500; #E0E0E0
// h3 - 18px 24.5px 400; #E0E0E0

// body1 - 14px 19px 500; #828282
// body2 - 14px 19px 400; #828282

// caption - 12px 16px 600; #828282

export enum COLORS {
  BLACK = "#000000",
  BLACK_MARLIN = "#3C393F",
  BLACK_RUSSIA = "#120F13",
  BURNT_SIENNA = "#EB5757",
  GAINSBORO = "#E0E0E0",
  GREY = "#828282",
  JAGUAR = "#252329",
  NIGHT_RIDER = "#333333",
  ROYAL_BLUE = "#2F80ED",
  SILVER = "#BDBDBD",
  WHITE = "#FFFFFF"
}

export enum SHADOWS {
  DEFAULT = "0 4px 4px rgba(0, 0, 0, 0.25)"
}

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 576,
      sm: 768,
      md: 992,
      lg: 1200,
      xl: 1400
    }
  },
  components: {
    MuiAvatar: {
      styleOverrides: {
        root: {
          borderRadius: "7px",
          height: "42px",
          width: "42px",
          backgroundColor: COLORS.JAGUAR,
          color: COLORS.WHITE,
          fontSize: "18px",
          fontWeight: "700"
        }
      }
    },
    MuiButton: {
      defaultProps: {
        variant: "contained"
      },
      styleOverrides: {
        root: {
          textTransform: "initial"
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: COLORS.JAGUAR,
          border: `1px solid ${COLORS.BLACK_MARLIN}`,
          borderRadius: "12px",
          padding: "15px 12px"
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Noto Sans, sans-serif"
        }
      }
    },
    MuiTextField: {
      defaultProps: {
        autoComplete: "off"
      },
      styleOverrides: {
        root: {}
      }
    },
    MuiMenu: {
      defaultProps: {
        elevation: 0,
        PaperProps: {
          style: {
            borderRadius: "12px",
            backgroundColor: COLORS.JAGUAR,
            border: `1px solid ${COLORS.BLACK_MARLIN}`
          }
        }
      },
      styleOverrides: {
        paper: {
          padding: "12px",
          width: "192px"
        },
        list: {
          padding: "0"
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          display: "flex",
          alignItems: "center",
          borderRadius: "8px",
          padding: "10px 12px",
          color: COLORS.GAINSBORO
        }
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          display: "flex",
          alignItems: "center",
          justifyItems: "center",
          height: "26px",
          width: "26px"
        }
      }
    }
  },
  palette: {
    mode: "dark"
  },
  typography: {
    h1: {
      fontSize: "18px",
      lineHeight: "24.5px",
      fontWeight: "700",
      color: COLORS.GAINSBORO
    },
    h2: {
      fontSize: "18px",
      lineHeight: "24.5px",
      fontWeight: "500",
      color: COLORS.GAINSBORO
    },
    h3: {
      fontSize: "18px",
      lineHeight: "24.5px",
      fontWeight: "400",
      color: COLORS.GAINSBORO
    },
    body1: {
      fontSize: "14px",
      lineHeight: "19px",
      fontWeight: "500",
      color: COLORS.GREY
    },
    body2: {
      fontSize: "14px",
      lineHeight: "19px",
      fontWeight: "500",
      color: COLORS.GREY
    },
    caption: {
      fontSize: "12px",
      lineHeight: "16px",
      fontWeight: "600",
      color: COLORS.GREY
    }
  }
});
