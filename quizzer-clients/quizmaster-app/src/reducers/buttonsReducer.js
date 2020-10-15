const api = "http://localhost:3000";

// action creators
export function newQuizCreacted(response) {
  return { type: "newQuizCreated", response };
}

export function createNewQuiz() {
  return async (dispatch) => {
    return await fetch(api + "/rooms", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(newQuizCreacted(data))
      });
  };
}

// reducer
const initialButtonsState = {
  roomid: null,
};

export function buttonsReducer(state = initialButtonsState, action) {
  switch (action.type) {
    case "newQuizCreated":
      return { ...state, roomid: action.response.roomid };

    default:
      return state;
  }
}
