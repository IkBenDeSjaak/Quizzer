# WebSocket specification
These are all the different messagetypes websockets can send.

| When                  | From      | To        | Messagetype           | 
|-----------------------|-----------|-----------|-----------------------|
| A new quiz starts     | Quizmaster| Server    | ``QUIZMASTER_JOIN``   |
| A new team applies    | Server    | Quizmaster| ``NEW_TEAM``          |
| A new answer received | Server    | Quizmaster| ``ANSWER_RECEIVED``   |
| Answers (dis)approved | Quizmaster| Server    | ``SUBMIT_ANSWER``     |
| Answer (dis)approved  | Server    | Team      | ``PENDING``           |
| Quiz ends             | Quizmaster| Server    | ``QUIZ_ENDED``        | 
| Scoreboard connects   | Scoreboard| Server    | ``SCOREBOARD_JOIN``   |
| Waiting is over       | Server    | Scoreboard| ``PENDING_DONE``      |
| Team joins            | Team      | Server    | ``TEAM_JOIN``         |
| Team submits answer   | Team      | Server    | ``NEW_TEAM_ANSWER``   |