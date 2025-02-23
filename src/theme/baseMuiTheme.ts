import { createTheme } from "@mui/material/styles";

export const primary = {
  main: "#2c80ff",
  light: "#E0E8F3",
  dark: "#253992",
};

export const text = {
  primary: "rgba(0,5,10,0.87)", // Dark primary text
  secondary: "rgba(0,5,10,0.64)", // Dark secondary text
  disabled: "rgba(0,5,10,0.38)", // Disabled text color
  hint: "rgba(0,5,10,0.38)", // Hint text color
};

const baseMuiTheme = createTheme({
  palette: {
    mode: "light",
    primary,
    divider: "#E0E8F3",
    text: text, // Use custom text color
  },
  typography: {
    h4: {
      color: text.primary,
    },
    h5: {
      color: text.primary,
    },
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
          borderBottom: "1px solid",
          borderColor: "#E0E8F3",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          "& .MuiListItem-root, & .MuiListItemIcon-root": {
            color: primary.main,
          },
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          borderTop: "1px solid #E0E8F3",
          borderCollapse: "collapse",

          "& td": {
            borderTop: "1px solid #E0E8F3",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: text.primary,
        },
      },
    },
  },
});

export default baseMuiTheme;
