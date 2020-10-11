# REST and WebSocket specification
Tbe client-side app and server communicate with each other over the WebSocket protocol in order to make each other aware of changes. The client can retrieve information from the server using a RESTful API.

## WebSockets
### Quizmaster app
| Event                 | Message type          | From       | To         |
| --------------------- | --------------------- | ---------- | ---------- |
| End round             | ``END_ROUND``         | Quizmaster | Server     |
| End quiz              | ``END_QUIZ``          | Quizmaster | Server     |
| Answer received       | ``ANSWER_RECEIVED``   | Server     | Quizmaster |
| Submit answer         | ``SUBMIT_ANSWERS``    | Quizmaster | Server     |
| New question selected | ``QUESTION_SELECTED`` | Quizmaster | Server     |
| New team              | ``NEW_TEAM``          | Server     | Quizmaster |
| Accept team           | ``ACCEPT_TEAM``       | Quizmaster | Server     |
| Deny team             | ``DENY_TEAM``         | Quizmaster | Server     |

### Team app
| Event                 | Message type          | From       | To         |
| --------------------- | --------------------- | ---------- | ---------- |
| Team sign up          | ``TEAM_SIGN_UP``      | Team       | Server     |
| Submit answer         | ``SUBMIT_TEAM_ANSWER``| Team       | Server     |
| Team allowed          | ``TEAM_ACCEPTED``     | Server     | Team       |
| Team denied           | ``TEAM_DENIED``       | Server     | Team       |

### Scoreboard app
| Event                 | Message type          | From       | To         |
| --------------------- | --------------------- | ---------- | ---------- |
| Answer submitted      | ``ANSWER_SUBMITTED``  | Server     | Scoreboard |

## RESTful API
The client can get all data that isn't time sensitive from the API. The API is RESTful which broadly means that:
 - URLs are resource-based.
 - All important methods (PUT, POST, DELETE, GET) are supported in the right way (PUT's are idempotent!).
 - Specific HTTP status codes are send for specific situations (not just 200, 404 and 500).
 - HTTP headers are used when they're useful (for example for authentication).
 - Support for caching GET requests.

| Request                                               | Result                            |
| ----------------------------------------------------- | --------------------------------- |
| ```POST /rooms/:id/rounds/:round/:question/team```    | Approve question answer           |
| ```DELETE /rooms/:id/rounds/:round/:question/team```  | Disapprove question answer        |
| ```GET /categories/:category/questions/:question```   | Get a question + answer           |
| ```POST /rooms```                                     | Create a new quiz night           |
| ```GET /categories```                                 | Get all categories                |
| ```POST /rooms/:id/rounds```                          | Create a new round                |
| ```GET /categories/:category/questions```             | Get all questions in a category   |
| ```GET /rooms/:id/rounds/:round/:question```          | Get all answers for a question    |
| ```GET /rooms/:id/teams```                            | Get all teams for a room          |
| ```GET /rooms/:id/teams/:team/score```                | Get score for a team              |
| ```GET /rooms/:id/rounds```                           | Gets all rounds                   |