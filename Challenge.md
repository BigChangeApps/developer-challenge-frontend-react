# The challenge

## Part 1

Talk through the code, explain the workings of the application.

## Part 2

Where possible we encourage following TDD for all development.

### Button Styles

The button has no styling applied. Please style the button based on these requirements.

#### Default

1. Border with a solid line of 1 pixel using the primary colour from the theme.
2. Background colour to use the background colour from the theme.
3. Text colour to be text colour from the theme.

#### Hover

1. Border with a solid line of 1 pixel using the background colour from the theme.
2. Background colour to use the primary colour from the theme.
3. Text colour to be textContrast colour from the theme.


### API Integration

An API Client has already been created that integrates with a trivia API. 

#### Custom hook
1. Create a custom hook that consumes the client and returns the trivia response data.

   Ref: `src\pages\HomePage\Clients\TriviaClient.ts`

2. Within HomePage.tsx use the custom hook and pass the trivia data to the DataDisplay component. 

3. Conditionally render DataDisplay only if trivia data exists

3. Setup the "New trivia" button to refresh the trivia.


#### Bonus Challenge
Create functionality to hide the answer on load and a button to reveal it when click.