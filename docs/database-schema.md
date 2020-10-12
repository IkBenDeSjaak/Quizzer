# Database schema
Here you can find an overview of the different things inside the database.'

## Categories
Categories contain the categories.
```text
+-----------------------+
| Categories            |
+-----------------------+
| _id: String           |
+-----------------------+
```

## Questions
Contain the questions, answers and categories. Categories references Categories collection
```text
+---------------------------+
| Questions                 |
+---------------------------+
| _id: [Objectid]           |
| answer: String            |
| Category: [Categories]    |
+---------------------------+
```

## Quiznights
The ``_id`` contains the room code to join. The answers from the team are saved inside answers where the _id is the question and a reference to questions.
```text
+---------------------------------------+
| Rooms                                 |
+---------------------------------------+
| _id: String                           |
| teams: [{                             |
|    name: String                       |
|    roundPoints: String                |
|    isApproved: Boolean                |
|    answers: [{                        |
|       _id: String                     |
|       answer: String                  |
|       isCorrect: Boolean              |
|    }]                                 |
| }]                                    |
| rounds: [{                            |
|    _id: Number                        |
|    teamStatistics: [{                 |
|        team: String                   |
|        givenAnswers: [{               |
|            question: String           |
|            isCorrect:                 |
|        }]                             |
|        correctAnswersAmount: Number   |
|    }]                                 |
|}]                                     |
+---------------------------------------+