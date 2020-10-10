# Quizzer
The quizzer is a web application that can be used to play pub quizzes or trivia nights. It was created by two HAN students as part of the final assessment for the course DWA in the second year of their IT study.

## SPA's
Quizzer contains three Single Page Applications(SPA's):
 - The team app for the participants of Quizzer
 - The quizz master app for the quizz master who hosts Quizzer
 - The score board app which displays the score for each team on a big screen

## Technical
Quizzer uses MongoDB, Express, React (with Redux) and Node (MERN stack), supplemented with the WebSocket protocol.

There are two sepearate apps: [the server](quizzer-server/readme.md) containing an API and [the client-side app](quizzer-client/readme.md) which serves all three SPA's.

For more functionial and technical information, check out the [docs](/docs/readme.md) folder for things such as a more extensive description of all SPA's, the server and wireframes.