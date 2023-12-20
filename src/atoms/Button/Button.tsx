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
}

export const Button: FunctionComponent<ButtonProps> = ({children, ...restProps}: ButtonProps) => {
    return (
        <StyledButton {...restProps}>{children}</StyledButton>
    );
}