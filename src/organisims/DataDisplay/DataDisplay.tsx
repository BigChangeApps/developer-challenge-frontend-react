import { FunctionComponent } from "react"
import { withTheme } from "@emotion/react";

import { 
    AnswerContainer, 
    CategoryContainer, 
    ContentAreaContainer, 
    DataPanel, 
    ManagementPanel, 
    QuestionContainer, 
    StyledContentAreaProps } from "./DataDisplayStyles";
import { Button } from "../../atoms/Button/Button";

/** DataDisplay */
export interface DataDisplayProps extends StyledContentAreaProps {
    category: string;
    question: string;
    answer: string;
    handleRefreshTrivia: () => void;
}

const DataDisplay: FunctionComponent<DataDisplayProps> = ({ category, question, answer, theme, children, handleRefreshTrivia }) => {
    
    // Boolean to determine if we can load the trivia
    const canLoadTrivia = category && question && answer;

    return (
        <ContentAreaContainer theme={theme}>{children}
            <ManagementPanel theme={theme}>
                <Button data-testid='new-trivia-button' onClick={handleRefreshTrivia}>New trivia</Button>
            </ManagementPanel>
            <DataPanel theme={theme}>
                {canLoadTrivia && ( 
                    <>
                        <CategoryContainer theme={theme}><strong>Category:</strong> {category}</CategoryContainer>
                        <QuestionContainer theme={theme}>
                            <strong>Question:</strong> <br />
                            {question}
                        </QuestionContainer>
                        <AnswerContainer theme={theme}>
                            <strong>Answer:</strong> 
                            <br />{answer}
                        </AnswerContainer>
                    </>
                )}
            </DataPanel>
        </ContentAreaContainer>
    );
};
  
export default withTheme(DataDisplay);