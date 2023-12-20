import { FunctionComponent } from "react"
import { ContentAreaContainer, DataPanel, ManagementPanel, StyledContentAreaProps } from "./DataDisplayStyles";
import { Button } from "../../atoms/Button/Button";
import { withTheme } from "@emotion/react";

/** DataDisplay */
export interface DataDisplayProps {
}

const DataDisplay: FunctionComponent<StyledContentAreaProps> = ({ theme, children }) => {

    // Handler for refreshing data
    const handleRefreshData = async () => {
       
    }
    
    return (
        <ContentAreaContainer theme={theme}>{children}
            <ManagementPanel theme={theme}>
                <Button onClick={handleRefreshData}>Refresh data</Button>
            </ManagementPanel>
            <DataPanel theme={theme}>
              
                
            </DataPanel>
        </ContentAreaContainer>
    );
};
  
export default withTheme(DataDisplay);