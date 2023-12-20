import React from "react";
import { Global as GlobalEmotion, css } from "@emotion/react";
import { Theme } from "./Themes";

interface GlobalStylesProps {
  theme: Theme;
}

const globalStyles = (theme: Theme) => css`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  body {
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
    font-family: ${theme.fonts.primary};
    font-size: 16px;
    /* Other global styles for the body element */
  }

  /* Optionally, you can style the <html> element */
  html {
    /* Global styles for the <html> element */
  }
`;

const GlobalStyles: React.FC<GlobalStylesProps> = ({ theme }) => (
  <GlobalEmotion styles={globalStyles(theme)} />
);

export default GlobalStyles;
