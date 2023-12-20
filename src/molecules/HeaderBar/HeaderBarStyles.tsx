import { withTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Theme } from '../../global/ThemeProvider/Themes';

// Define the ContainerProps interface to include the theme
interface StyledHeaderProps  {
  theme: Theme;
  children?: React.ReactNode;
}
  
const StyledHeader = styled.header<StyledHeaderProps>(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '80px',
  background: `linear-gradient(90deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%)`,
  color: theme.colors.textContrast,
  padding: '0 40px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  fontFamily: theme.fonts.primary,
  fontSize: '1.2em',
}));
  
const StyledComponent: React.FC<StyledHeaderProps > = ({ theme, children }) => {
    return <StyledHeader theme={theme}>{children}</StyledHeader>;
};
  
export default withTheme(StyledComponent);