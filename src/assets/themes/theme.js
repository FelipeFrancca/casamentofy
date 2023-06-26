/**
 * @name theme.jsx
 * @type theme
 * @description Tema da aplicacao.
 *
 */
//LIGHT
export const lightTheme = createMuiTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#34a835",
    },
    secondary: {
      main: "#e91224",
    },
    error: {
      main: "#e91224",
      light: "#de9696",
      dark: "#812424",
    },
    warning: {
      main: "#fd8a2b",
      light: "#f5ac72",
      dark: "#7d400f",
    },
    header: {
      main: "#000022",
      light: "#838ed6",
      dark: "#242f6b",
    },
  },
});

//DARK
export const darkTheme = createMuiTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#34a835",
    },
    secondary: {
      main: "#e91224",
    },
    error: {
      main: "#e91224",
      light: "#de9696",
      dark: "#812424",
    },
    warning: {
      main: "#fd8a2b",
      light: "#f5ac72",
      dark: "#7d400f",
    },
    header: {
      main: "#000022",
      light: "#838ed6",
      dark: "#242f6b",
    },
  },
});
