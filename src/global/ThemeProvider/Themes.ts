/**
 * Defines the theme object with color and breakpoint properties.
 */
export interface Theme {
  colors: {
    /**
     * The primary color for the theme.
     */
    primary: string;
    
    /**
     * The secondary color for the theme.
     */
    secondary: string;

    /**
     * The background color for the theme.
     */
    background: string;

    /**
     * The text color for the theme.
     */
    text: string;

    /**
     * The text contrast color for the theme.
     */
    textContrast: string;
  };
  fonts: {
    /**
     * The primary font family for the theme.
     */
    primary: string;
  },
  breakpoints: {
    /**
     * The breakpoint for desktop viewports.
     */
    desktop: number;

    /**
     * The breakpoint for tablet viewports.
     */
    tablet: number;

    /**
     * The breakpoint for mobile viewports.
     */
    mobile: number;
  };
}

const theme: Theme = {
  colors: {
    primary: '#007bff',
    secondary: '#ff6c00',
    background: '#fff',
    text: '#333',
    textContrast: '#fff',
  },
  fonts: {
    primary: 'Roboto, sans-serif',
  },
  breakpoints: {
    desktop: 1024,
    tablet: 768,
    mobile: 480,
  },
};

export default theme;