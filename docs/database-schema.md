# Database schema
Here you can find an overview of the different things inside the database.

## Questions
Contain the questions, answers and categories. Categories references Categories collection
```text
+---------------------------+
| Questions                 |
+---------------------------+
| _id: number               |
| question: String          |
| answer: String            |
| Category: String          |
+---------------------------+
```

## Rooms
The ``_id`` contains the room code to join. The answers from the team are saved inside answers where the _id is the question and a reference to questions.
```text
+---------------------------------------+
| Rooms                                 |
+---------------------------------------+
| _id: String                           |
| teams: [{                             |
|    name: String                       |
|    roundPoints: Number                |
|    isApproved: Boolean                |
|    answers: [{                        |
|       _id: Number         (questionID)|
|       answer: String                  |
|       isCorrect: Boolean              |
|       round: Number                   |
|    }]                                 |
| }]                                    |
| rounds: [{                            |
|    _id: Number                        |
|    categories: [Strings]              |
|    questions: [{                      |
|       _id: Number         (questionID)|
|   }]                                  |
| }]                                    |
+---------------------------------------+