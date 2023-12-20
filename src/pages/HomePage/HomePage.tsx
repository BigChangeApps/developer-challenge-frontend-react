import { FunctionComponent } from "react"
import HomePageContainer from "./HomePageStyles";
import { HeaderBar } from "../../molecules/HeaderBar/HeaderBar";
import { ContentArea } from "../../molecules/ContentArea/ContentArea";
import DataDisplay from "../../organisims/DataDisplay/DataDisplay";

/** HomePage */
export interface HomePageProps {

}

export const HomePage: FunctionComponent<HomePageProps> = () => {

    // Handler for refreshing data
    const handleRefreshData = async () => {
       
    }
    
    return (
        <HomePageContainer>
            <HeaderBar>BigChange Developer Challenge</HeaderBar>
            <ContentArea>
              
                <DataDisplay 
                    category={"..."} 
                    question={"..."} 
                    answer={"..."} 
                    handleRefreshTrivia={handleRefreshData}  /> 
        
              
            </ContentArea>
        </HomePageContainer>
    );
}