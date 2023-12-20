import { FunctionComponent } from "react"
import StyledButton from "./ButtonStyles";

/** Button */
export interface ButtonProps {
    /**
     * Children of the container.
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

export const Button: FunctionComponent<ButtonProps> = ({children, "data-testid": testId, ...restProps}: ButtonProps) => {
    return (
        <StyledButton {...restProps} data-testid={testId}>{children}</StyledButton>
    );
}