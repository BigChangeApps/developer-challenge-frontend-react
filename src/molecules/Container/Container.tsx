import { FunctionComponent } from "react"
import StyledContainer from "./ContainerStyles";

/** Container */
export interface ContainerProps {
    /**
     * Children of the container.
     */
    children?: React.ReactNode;
}

export const Container: FunctionComponent<ContainerProps> = ({children}: ContainerProps) => {
    return (
        <StyledContainer>{children}</StyledContainer>
    );
}