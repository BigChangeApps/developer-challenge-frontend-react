import { withTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Theme } from '../../global/ThemeProvider/Themes';

// Define the ContainerProps interface to include the theme
interface StyledContentAreaProps  {
  theme: Theme;
  children?: React.ReactNode;
}
  
const StyledContentArea = styled.div<StyledContentAreaProps>(({ theme }) => ({
  display: 'flex',
  marginTop: '20px',
  justifyContent: 'space-between',
  gap: 100,
  alignItems: 'top',
  background: theme.colors.background,
  color: theme.colors.text,
  paddingTop: 20,
  paddingBottom: 20,
  paddingLeft: 40,
  paddingRight: 40,
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  fontFamily: theme.fonts.primary,
  fontSize: '1.2em',
}));
  
export const StyledComponent: React.FC<StyledContentAreaProps > = ({ theme, children }) => {
    return <StyledContentArea theme={theme}>{children}</StyledContentArea>;
};
  
export default withTheme(StyledComponent);