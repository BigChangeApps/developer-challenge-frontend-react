import styled from '@emotion/styled'
import { Theme } from '../../global/ThemeProvider/Themes';
import { withTheme } from '@emotion/react';

// Define the ContainerProps interface to include the theme
interface StyledContainerProps {
  theme: Theme;
  children?: React.ReactNode;
  "data-testid": string;
}

/**
 * Container styled component.
 */
 const StyledContainer = styled.div<StyledContainerProps>((props) => ({
  width: '100%',
  maxWidth: `${props.theme.breakpoints.desktop}px`,
  margin: '0 auto',
  padding: '16px',

  [`@media (min-width: ${props.theme.breakpoints.desktop}px)`]: {
    padding: '24px',
  },

  [`@media (min-width: ${props.theme.breakpoints.tablet}px)`]: {
    padding: '16px',
  },

  [`@media (min-width: ${props.theme.breakpoints.mobile}px)`]: {
    padding: '8px',
  },
}));

const StyledComponent: React.FC<StyledContainerProps> = ({ theme, children, "data-testid": testId }) => {
  return <StyledContainer theme={theme} data-testid={testId}>{children}</StyledContainer>;
};

export default withTheme(StyledComponent);