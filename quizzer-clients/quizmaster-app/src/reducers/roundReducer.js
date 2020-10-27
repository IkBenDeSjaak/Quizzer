import { sendMessage } from "../ws";
const api = "http://localhost:3000";

// action creators
export function selectCategoriesAction(category) {
  return { type: "selectCategoriesAction", category };
}

export function removeCategoriesAction(category) {
  return { type: "removeCategoriesAction", category };
}

export function nextPageAction(status) {
  return { type: "nextPageAction", status };
}

export function sendCategoriesAction() {
  return async (dispatch, getState) => {
    let state = getState();
    const data = {
      categories: state.round.categories,
    };
    return await fetch(api + "/rooms/" + state.room.roomid + "/rounds", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(() => dispatch(nextPageAction(true)));
  };
}

export function receivedRandomQuestion(question, category) {
  let payload = {
    _id: question._id,
    question: question.question,
    answer: question.answer,
    category: category,
  };
  return { type: "receivedRandomQuestion", payload };
}

export function fetchRandomQuestion(category) {
  return async (dispatch, getState) => {
    let state = getState();
    const encodedcategory = encodeURIComponent(category.trim());
    return await fetch(
      api + "/categories/" + encodedcategory + "/questions/random",
      {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((question) => {
        // check if question has already been chosen
        if (state.round.questions.includes(question._id)) {
          dispatch(fetchRandomQuestion(category));
        } else {
          // check if the question is in temp questions
          state.round.tempQuestion.forEach((element) => {
            if (element._id === question._id) {
              console.log("I already exist");
              dispatch(fetchRandomQuestion(question, category));
            }
          });
          dispatch(receivedRandomQuestion(question, category));
        }
      });
  };
}

export function questionChosen(payload) {
  return async (dispatch, getState) => {
    let state = getState();
    const data = {
      questionid: payload._id,
    };
    return await fetch(
      api + "/rooms/" + state.room.roomid + "/rounds/question",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    ).then(() => {
      sendMessage("NEW_QUESTION", state.room.roomid, null);
      dispatch(questionChosenDone(payload));
      dispatch(nextPageAction(true));
    });
  };
}

export function questionChosenDone(payload) {
  return { type: "questionChosen", payload };
}

export function clearTempQuestions() {
  return { type: "clearTempQuestions" };
}

export function closeQuestionSend() {
  return { type: "closeQuestion" };
}

export function closeQuestion() {
  return async (dispatch, getState) => {
    let state = getState();
    sendMessage("CLOSE_QUESTION", state.room.roomid, null);
    dispatch(closeQuestionSend());
  };
}

export function nextQuestionAction() {
  return { type: "nextQuestionAction" };
}

export function roundEndedAction() {
  return { type: "endRoundAction" };
}

export function endRoundAction() {
  return async (dispatch, getState) => {
    let state = getState();
    sendMessage("END_ROUND", state.room.roomid, null);
    dispatch(roundEndedAction());
  };
}

export function clearRound() {
  return { type: "clearRound" };
}

// reducer
const initialRoundState = {
  categories: [],
  nextPage: false,
  question: null,
  questions: [],
  tempQuestion: [],
  questionClosed: false,
};

export function roundReducer(state = initialRoundState, action) {
  switch (action.type) {
    case "selectCategoriesAction":
      return { ...state, categories: [...state.categories, action.category] };

    case "removeCategoriesAction":
      let removeCategoriesChanges = state.categories.filter(
        (category) => category !== action.category
      );
      return { ...state, categories: removeCategoriesChanges };

    case "nextPageAction":
      return { ...state, nextPage: action.status };

    case "receivedRandomQuestion":
      return {
        ...state,
        tempQuestion: [...state.tempQuestion, action.payload],
      };

    case "questionChosen":
      const questionChosenChanges = {
        question: action.payload,
        questions: [...state.questions, action.payload._id],
        tempQuestion: [],
      };
      return { ...state, ...questionChosenChanges };

    case "clearTempQuestions":
      return { ...state, tempQuestion: [] };

    case "closeQuestion":
      const closeQuestionChanges = {
        questionClosed: true,
      };
      return { ...state, ...closeQuestionChanges };

    case "nextQuestionAction":
      return { ...state, question: null, questionClosed: false };

    case "endRoundAction":
      return {
        ...state,
        categories: [],
        question: null,
        questionClosed: false,
      };

    case "clearRound":
      return { ...state, ...initialRoundState };

    default:
      return state;
  }
}
