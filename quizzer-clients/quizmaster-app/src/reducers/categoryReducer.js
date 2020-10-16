const api = "http://localhost:3000";

// action creators
export function receivedCategories(payload) {
    return { type: "receivedCategories", payload };
}

export function fetchCategories() {
    console.log("Hello")
    return async (dispatch) => {
        return await fetch(api + "/categories", {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "cors",
        })
            .then((response) => response.json())
            .then((categories) => {
                dispatch(receivedCategories(categories))
            });
    };
}

// reducer
const initialCategoryState = [];

export function categoryReducer(state = initialCategoryState, action) {
    switch (action.type) {
        case "receivedCategories":
            return action.payload;
        default:
            return state;
    }
}
