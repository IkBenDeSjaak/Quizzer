# REST API
In this file you can see all the requests for the quizzer-server.

- [Rounds](#rounds)
- [Questions](#questions)
- [Teams](#teams)
- [Create teams](#create-teams)


### Rounds
---

**`POST`** `/rooms`

Create a new room.

| Parameters    | Send in body              | Return  as JSON           |
|---------------|---------------------------|---------------------------|
| None          |                           | ``roomid: Number``        |

---

**`POST`** `/rooms/:roomid/rounds`

Create a new round with the 3 selected categories.

| Parameters    | Send in body              | Return as JSON            |
|---------------|---------------------------|---------------------------|
| roomid        | ``categories: [String]``  | ``roundNumber: String``   |

---

**`POST`** `/rooms/:roomid/rounds/:roundNumber/`

Add a new question to a round.

| Parameters    | Send in body              | Return as JSON            |
|---------------|---------------------------|---------------------------|
| roomid        | ``questionid: Number``    |                           |
| roundNumber   |                           |                           |


**`GET`** `/rooms/:roomid/`

Get all info for a round, including how many questions are left, which round they are in and how many teams there are.

| Parameters    | Send in body              | Return as JSON            |
|---------------|---------------------------|---------------------------|
| roomid        |                           | ``question: Number``      |
| roundNumber   |                           | ``round: Number``         |
|               |                           | ``teams: Number``         |

---

## Questions

---

**`GET`** `/categories`

Get all categories.

| Parameters    | Send in body              | Return as JSON            |
|---------------|---------------------------|---------------------------|
| None          |                           | ``{ categories }``        |

---

**`GET`** `/categories/:category/questions/:questionid`
or
**`GET`** `/questions/:questionid`

Get a question and answer.

| Parameters    | Send in body              | Return as JSON            |
|---------------|---------------------------|---------------------------|
| category      |                           | ``question: String``      |
| questionid    |                           | ``answer: String``        |
|               |                           | ``id: Number``            |

---

**`GET`** `/categories/:category/questions`

Get all questions from a category

| Parameters    | Send in body              | Return as JSON            |
|---------------|---------------------------|---------------------------|
| category      |                           | ``question: String``      |
| questionid    |                           | ``answer: String``        |
|               |                           | ``id: Number``            |

--- 

## Teams

---

**`GET`** `/rooms/:roomid/teams/:teamid/answers/:questionid`

Get a answer from a team for a specific question.

| Parameters    | Send in body              | Return as JSON            |
|---------------|---------------------------|---------------------------|
| roomid        |                           | ``answer: String``        |
| teamid        |                           | ``isCorrect: Boolean``    |
| questionid    |                           |                           |

---

**`PUT`** `/rooms/:roomid/teams/:teamid/answers/:questionid/approve`

Submit if an answer is correct or not.

| Parameters    | Send in body              | Return as JSON            |
|---------------|---------------------------|---------------------------|
| roomid        | ``isCorrect: Boolean``    |                           |
| teamid        |                           |                           |
| questionid    |                           |                           |

---

**`PUT`** `/rooms/:roomid/teams/:teamid/answers/questionid`

Submit an answer to the latest question (can be done multiple times)

| Parameters    | Send in body              | Return as JSON            |
|---------------|---------------------------|---------------------------|
| roomid        | ``answer: String` `       |                           |
| teamid        |                           |                           |
|               |                           |                           |

---

**`GET`** `/rooms/:roomid/teams/:teamid/score`

Returns the round points for a team and how many questions per round were correct.

| Parameters    | Send in body              | Return as JSON                  |
|---------------|---------------------------|---------------------------------|
| roomid        |                           | ``roundPoints: Number``         |
| teamid        |                           | ``rounds: [ CorrectQuestions ]``|

---

**`GET`** `/rooms/:roomid/teams`

Get all information about all teams

| Parameters    | Send in body              | Return as JSON                  |
|---------------|---------------------------|---------------------------------|
| roomid        |                           | ``roundPoints: Number``         |
|               |                           | ``isApproved: Boolean``         |
|               |                           | ``name: String``                |
|               |                           | ``answers: [Object]``           |
|               |                           | ``_id_: Number``                |

---

## Create teams

**`POST`** `/rooms/:roomid/teams`

Create a new (unapproved) team

| Parameters    | Send in body              | Return as JSON                  |
|---------------|---------------------------|---------------------------------|
| roomid        | ``teamName: String``      |                                 |

---


**`PUT`** `/rooms/:roomid/teams/:teamid`

Approve a new team, setting ``isApproved`` Boolean to true.

| Parameters    | Send in body              | Return as JSON            |
|---------------|---------------------------|---------------------------|
| ``roomid``    |                           | None                      |
| ``teamid``    |                           | None                      |

---

**`DELETE`** `/rooms/:roomid/teams/:teamid`

Disapprove a team, removing them from the database completely.

| Parameters    | Send in body              | Return as JSON            |
|---------------|---------------------------|---------------------------|
| ``roomid``    |                           |                           |
| ``teamid``    |                           |                           |

---