import { FunctionComponent } from "react"
import StyledContainer from "./ContainerStyles";

/** Container */
export interface ContainerProps {
    /**
     * Children of the container.
     */
    children?: React.ReactNode;

    "data-testid": string;
}

export const Container: FunctionComponent<ContainerProps> = ({children, "data-testid": testId}: ContainerProps) => {
    return (
        <StyledContainer data-testid={testId}>{children}</StyledContainer>
    );
}