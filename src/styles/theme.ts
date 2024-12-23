import getConfig from "src/config";

const config = getConfig();

export const theme = {
  breakpoints: {
    upSm: "@media (min-width: 480px)",
  },
  hoverTransition: "all 150ms",
  maxWidth: 644,
  palette: {
    background: config?.brand.theme.secondary || "#060b19",
    black: "#0a0b0d",
    error: {
      light: "rgba(232,67,12,0.1)",
      main: "#e8430d",
    },
    grey: {
      dark: "#78798d",
      light: config?.brand.theme.primary || "#000000",
      main: "#e2e5ee",
      veryDark: "#363740",
    },
    primary: {
      dark: "#5a1cc3",
      main: "#004fff",
    },
    success: {
      light: "rgba(0,255,0,0.1)",
      main: "#1ccc8d",
    },
    transparency: "rgba(8,17,50,0.5)",
    warning: {
      light: "rgba(225,126,38,0.1)",
      main: "#e17e26",
    },
    white: "#ffffff",
  },
  spacing: (value: number): number => value * 8,
};

export type Theme = typeof theme;
