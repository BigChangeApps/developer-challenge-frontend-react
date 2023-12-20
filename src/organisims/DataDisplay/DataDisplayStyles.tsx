import styled from '@emotion/styled';
import { Theme } from '../../global/ThemeProvider/Themes';

// Define the ContainerProps interface to include the theme
export interface StyledContentAreaProps  {
  theme: Theme;
  children?: React.ReactNode;
}
  
export const ContentAreaContainer = styled.div<StyledContentAreaProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: 10,
  flex: '1 0 100%', // This will make it take up 100% of the space
}));

export const ManagementPanel = styled.div<StyledContentAreaProps>(({ theme }) => ({
  flex: '1 0 30%', // This will make it take up 30% of the space
}));
  
  
export const DataPanel = styled.div<StyledContentAreaProps>(({ theme }) => ({
  border: '1px dashed #ddd',
  flex: '1 0 70%', // This will make it take up 70% of the space
}));
