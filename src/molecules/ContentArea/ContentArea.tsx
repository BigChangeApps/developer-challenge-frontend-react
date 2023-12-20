import { FunctionComponent } from "react"
import ContentAreaContainer from "./ContentAreaStyles";

/** ContentArea */
export interface ContentAreaProps {
    /**
     * Children of the container.
     */
    children?: React.ReactNode;
}

export const ContentArea: FunctionComponent<ContentAreaProps> = ({children}: ContentAreaProps) => {
    return (
        <ContentAreaContainer>{children}</ContentAreaContainer>
    );
}