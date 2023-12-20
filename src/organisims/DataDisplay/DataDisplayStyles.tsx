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
  flex: '100%', // This will make it take up 100% of the space
}));

export const ManagementPanel = styled.div<StyledContentAreaProps>(({ theme }) => ({
  flex: '1 0 20%', // This will make it take up 30% of the space
  textAlign: 'center',
}));
  
  
export const DataPanel = styled.div<StyledContentAreaProps>(({ theme }) => ({
  border: '2px dashed #ddd',
  flex: '1 0 60%', // This will make it take up 70% of the space
  padding: 10,
  backgroundColor: '#fff',
  borderRadius: 4,
}));

export const CategoryContainer = styled.div<StyledContentAreaProps>(({ theme }) => ({
  backgroundColor: '#333',
  padding: 10,
  color: theme.colors.textContrast,
  marginBottom: 10,
  borderRadius: 4,
}));

export const QuestionContainer = styled.div<StyledContentAreaProps>(({ theme }) => ({
  backgroundColor: '#00a1db',
  padding: 10,
  color: theme.colors.textContrast,
  marginBottom: 10,
  borderRadius: 4,
}));


export const AnswerContainer = styled.div<StyledContentAreaProps>(({ theme }) => ({
  backgroundColor: '#b81a1a',
  padding: 10,
  color: theme.colors.textContrast,
  borderRadius: 4,
}));

