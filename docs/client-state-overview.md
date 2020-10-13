# Client state overview
Here you can find an overview of the states that the application should keep in it's (Redux) store and what reducers are used.

## Quizmaster app
 - array of finished questions
 - array of team names
 - array of approved answers
 - array of teams that have answered
 - current round

 **Reducers:**
 - teamsReducer - handles team actions
 - questionsReducer - handles question actions
 - roundsReducer - creates new round, closes round

## Scoreboard app
 - team object with names & score
 - array of team answers
 - array of approved answered
 - array of teams that have answered
 - current question+answer

**Reducers:**
  - scoreReducer - keep track of score
  - teamsReducer - keeps track teams
  - questionsReducer - keeps track of current question

## Teams app
 - team name
 - current question
 - submitted answer

**Reducers:**
 - scoreReducer - keep track of score
 - questionsReducer - keeps track of current question and what/if the team has answered