import { withTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Theme } from '../../global/ThemeProvider/Themes';

interface HomePageContainerProps  {
    theme: Theme;
    children?: React.ReactNode;
  }
  
const HomePageContainer = styled.div<HomePageContainerProps>(({ theme }) => ({
   display: 'flex',
    flexDirection: 'column',
}));

const StyledComponent: React.FC<HomePageContainerProps > = ({ theme, children }) => {
    return <HomePageContainer theme={theme}>{children}</HomePageContainer>;
  };
  
  export default withTheme(StyledComponent);