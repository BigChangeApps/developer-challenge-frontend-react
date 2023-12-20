import { FunctionComponent } from "react"
import HeaderBarContainer from "./HeaderBarStyles";

/** HeaderBar */
export interface HeaderBarProps {
    /**
     * Children of the container.
     */
    children?: React.ReactNode;
}

export const HeaderBar: FunctionComponent<HeaderBarProps> = ({children}: HeaderBarProps) => {
    return (
        <HeaderBarContainer>{children}</HeaderBarContainer>
    );
}