import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#1976d2",
    },

    background: {
      default: "#f5f9ff",
      paper: "#ffffff",
    },

    text: {
      primary: "#172033",
      secondary: "#5f6b7a",
    },
  },

  typography: {
    fontFamily: [
      "Inter",
      "Roboto",
      "Arial",
      "sans-serif",
    ].join(","),
  },

  shape: {
    borderRadius: 14,
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#42a5f5",
    },

    background: {
      default: "#080b10",
      paper: "#11161d",
    },

    text: {
      primary: "#f5f7fa",
      secondary: "#aab4c3",
    },
  },

  typography: {
    fontFamily: [
      "Inter",
      "Roboto",
      "Arial",
      "sans-serif",
    ].join(","),
  },

  shape: {
    borderRadius: 14,
  },
});