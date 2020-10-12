# REST API
In this file you can see all the requests for the quizzer-server.

- [Questions](#questions)
- [Teams](#teams)

## Rooms

---

**`POST`** `/api/v1/rooms`

Create a new room.

| Parameters    | Return  as JSON           |
|---------------|---------------------------|
| None          | ``roomid: String``       |

---

**`PUT`** `/api/v1/rooms/:roomid/teams/:teamid`

Approve a new team, setting ``isApproved`` Boolean to true.

| Parameters    | Return as JSON            |
|---------------|---------------------------|
| ``roomid``    | None                      |
| ``teamid``    | None                      |

---

**`DELETE`** `/api/v1/rooms/:roomid/teams/:teamid`

Disapprove a team, setting ``isApproved`` Boolean to false.

| Parameters    | Return as JSON            |
|---------------|---------------------------|
| ``roomid``    |                           |
| ``teamid``    |                           |

---

**`GET`** `/api/v1/categories`

Get all categories.

| Parameters    | Return as JSON            |
|---------------|---------------------------|
| None          | ``{ categories }``        |

---

**`POST`** `/api/v1/rooms/:roomid/rounds`

Create a new round with the 3 selected categories.

| Parameters    | Send in body              | Return as JSON            |
|---------------|---------------------------|---------------------------|
| roomid        | ``categories: [String]``  | ``roundNumber: String``   |

---

**`GET`** `/api/v1/categories/:category/questions/:questionid"`

Get a question and answer.

| Parameters    | Send in body              | Return as JSON            |
|---------------|---------------------------|---------------------------|
| category      |                           | ``question: String``      |
| questionid    |                           | ``answer: String``        |

---

**`POST`** `/api/v1/rooms/:roomid/rounds/:roundNumber/"`

Add a new question to a round.

| Parameters    | Send in body              | Return as JSON            |
|---------------|---------------------------|---------------------------|
| roomid        | ``questionid: Number``    |                           |
| roundNumber   |                           |                           |

---

**`GET`** `/api/v1/rooms/:roomid/teams/:teamid/answers/:questionid"`

Get a answer from a team for a specific question.

| Parameters    | Send in body              | Return as JSON            |
|---------------|---------------------------|---------------------------|
| roomid        |                           | ``answer: String``        |
| teamid        |                           |                           |
| questionid    |                           |                           |

---

**`PUT`** `/api/v1/rooms/:roomid/teams/:teamid/answers/:questionid"`

Submit if an answer is correct or not.

| Parameters    | Send in body              | Return as JSON            |
|---------------|---------------------------|---------------------------|
| roomid        | ``isCorrect: Boolean``    |                           |
| teamid        |                           |                           |
| questionid    |                           |                           |

---

**`GET`** `/api/v1/rooms/:roomid/teams/:teamid/score`

Returns the round points for a team and how many questions per round were correct.

| Parameters    | Send in body              | Return as JSON                  |
|---------------|---------------------------|---------------------------------|
| roomid        |                           | ``roundPoints: Number``         |
| teamid        |                           | ``rounds: [ CorrectQuestions ]``|

---

**`GET`** `/api/v1/rooms/:roomid/teams`

Get all information about all teams

| Parameters    | Send in body              | Return as JSON                  |
|---------------|---------------------------|---------------------------------|
| roomid        |                           | ``roundPoints: Number``         |

---

**`POST`** `/api/v1/rooms/:roomid/teams`

Create a new (unapproved) team

| Parameters    | Send in body              | Return as JSON                  |
|---------------|---------------------------|---------------------------------|
| roomid        | ``teamName: String``      |                                 |

---