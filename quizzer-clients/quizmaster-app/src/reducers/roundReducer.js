const api = "http://localhost:3000";

// action creators
export function selectCategoriesAction(category) {
  return { type: "selectCategoriesAction", category };
}

export function removeCategoriesAction(category) {
  return { type: "removeCategoriesAction", category };
}

export function nextPageAction() {
  return { type: "nextPageAction" };
}

export function sendCategoriesAction() {
  return async (dispatch,getState) => {
    let state = getState();
    const data = {
      categories: state.round.categories
    }
    return await fetch(api + "/rooms/" + state.room.roomid + "/rounds", {
      method: "POST",
      mode: "cors",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(() => dispatch(nextPageAction()));
  };
}

// reducer
const initialRoundState = {
  categories: [],
  nextPage: false,
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
      return { ...state, nextPage: !state.nextPage };

    default:
      return state;
  }
}
