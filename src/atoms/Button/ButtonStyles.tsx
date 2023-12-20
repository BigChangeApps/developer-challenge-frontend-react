import { withTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Theme } from '../../global/ThemeProvider/Themes';

// Define the ContainerProps interface to include the theme
interface StyledButtonProps  {
  theme: Theme;
  /**
   * Children to render.
   * @default null
   * @type React.ReactNode
   * @memberof StyledButtonProps
   * @example <StyledButton>Click Me</StyledButton>
   * @example <StyledButton />
   * @example <StyledButton>{children}</StyledButton>
   */
  children?: React.ReactNode;
  /**
     * onClick function.
     */
  onClick?: () => void;

   /**
     * Test id for testing.
     */
   "data-testid"?: string;
}
  
const StyledButton = styled.button<StyledButtonProps>(({ theme }) => ({
  lineHeight: '1.2em',
  padding: '10px 20px',
}));
  
const StyledComponent: React.FC<StyledButtonProps > = ({ theme, children, "data-testid": testId, ...restProps }) => {
    return <StyledButton type="button" data-testid={testId} {...restProps} theme={theme}>{children}</StyledButton>;
};
  
export default withTheme(StyledComponent);