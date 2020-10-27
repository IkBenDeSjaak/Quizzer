# WebSocket specification

These are all the different messagetypes websockets can send.

| When                        | From       | To                | Messagetype      | Payload              |
| --------------------------- | ---------- | ----------------- | ---------------- | -------------------- |
| A new question get chosen   | Quizmaster | Scoreboard, teams | `NEW_QUESTION`   |                      |
| A new answer gets submitted | Team       | Scoreboard, teams | `NEW_ANSWER`     | teamName, questionid |
| The question gets closed    | Quizmaster | Scoreboard, teams | `CLOSE_QUESTION` |                      |
| All questions (dis)approved | Quizmaster |                   | `SHOW_ANSWERS`   |                      |
| One question (dis)approved  | Quizmaster | Scoreboard, teams | `SHOW_ANSWER`    |                      |
| The round ends              | Quizmaster | Scoreboard, teams | `END_ROUND`      |                      |
| The quiz ends               | Quizmaster | Scoreboard, teams | `END_QUIZ`       |                      |
| New team joins              | Team       | Quizmaster        | `NEW_TEAM`       | teamName             |
| Team gets approved          | Quizmaster | Teams             | `TEAM_APPROVED`  | teamName             |
