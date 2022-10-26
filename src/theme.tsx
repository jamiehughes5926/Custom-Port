import { extendTheme } from "@chakra-ui/react";
import { theme as chakraTheme } from "@chakra-ui/react";

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = {
  xs: "30em",
  sm: "40em",
  md: "55em",
  lg: "64em",
};

const override = {
  ...chakraTheme,
  fonts,
  breakpoints,
  fontWeights: {
    normal: 300,
    medium: 600,
    large: 700,
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
  },
};

const customTheme = extendTheme(override);

export default customTheme;
