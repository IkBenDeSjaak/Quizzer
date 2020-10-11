# REST and WebSocket specification
Tbe client-side app and server communicate with each other over the WebSocket protocol in order to make each other aware of changes. The client can retrieve information from the server using a RESTful API.

## WebSockets
### Quizmaster app
| Event                 | Message type          | From       | To         |
| --------------------- | --------------------- | ---------- | ---------- |
| New quiz              | ``NEW_QUIZ``          | Quizmaster | Server     |
| Accept team           | ``ACCEPT_TEAM``       | Quizmaster | Server     |
| Deny team             | ``DENY_TEAM``         | Quizmaster | Server     |
| Start quiz            | ``NEW_QUIZ``          | Quizmaster | Server     |
| New round             | ``NEW_ROUND``         | Quizmaster | Server     |
| New question selected | ``QUESTION_SELECTED`` | Quizmaster | Server     |
| Submit answer         | ``SUBMIT_ANSWER``     | Quizmaster | Server     |
| End round             | ``END_ROUND``         | Quizmaster | Server     |
| End quiz              | ``END_QUIZ``          | Quizmaster | Server     |
| New team              | ``NEW_TEAM``          | Server     | Quizmaster |
| Question received     | ``QUESTION_RECEIVED`` | Server     | Quizmaster |
| Answer received       | ``ANSWER_RECEIVED``   | Server     | Quizmaster |

### Team app
| Event                 | Message type          | From       | To         |
| --------------------- | --------------------- | ---------- | ---------- |
| Team signed up        | ``TEAM_ALLOWED``      | Team       | Server     |
| Submit answer         | ``SUBMIT_TEAM_ANSWER``| Team       | Server     |
| Team allowed          | ``TEAM_ACCEPTED``     | Server     | Team       |
| Team denied           | ``TEAM_DENIED``       | Server     | Team       |
| Answer reviewed       | ``ANSWER_REVIEWED``   | Server     | Team       |
| End quiz night        | ``QUIZ_ENDED``        | Server     | Team       |

### Scoreboard app
| Event                 | Message type          | From       | To         |
| --------------------- | --------------------- | ---------- | ---------- |
| Scoreboard connected  | ``NEW_SCOREBOARD``    | Scoreboard | Server     |
| Score overview        | ``SCORE_OVERVIEW``    | Server     | Scoreboard |
| Question overview     | ``QUESTION_OVERVIEW`` | Server     | Scoreboard |
| Answer overview       | ``ANSWER_OVERVIEW``   | Server     | Scoreboard |
| Answer submitted      | ``ANSWER_SUBMITTED``  | Server     | Scoreboard |

## RESTful API
The client can get all data that isn't time sensitive from the API. The API is RESTful which broadly means that:
 - URLs are resource-based.
 - All important methods (PUT, POST, DELETE, GET) are supported in the right way (PUT's are idempotent!).
 - Specific HTTP status codes are send for specific situations (not just 200, 404 and 500).
 - HTTP headers are used when they're useful (for example for authentication).
 - Support for caching GET requests.

###
| Action                                    | Result                            |
| ----------------------------------------- | --------------------------------- |
| ```GET /categories/```                    | Get all categories                |
| ```GET /categories/:category```           | Get all questions in a category   |