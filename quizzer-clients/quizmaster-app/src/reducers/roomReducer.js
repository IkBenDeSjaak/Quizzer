const api = "http://localhost:3000";

// action creators
export function newQuizCreated(payload) {
    return { type: "newQuizCreated", payload };
}

export function createNewQuiz() {
    return async (dispatch) => {
        return await fetch(api + "/rooms", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors",
        })
            .then((response) => response.json())
            .then((data) => {
                dispatch(newQuizCreated(data))
            });
    };
}

// action creators
export function teamApproved(payload) {
    return { type: "teamApproved", payload };
}

export function approveTeam(roomid, teamName) {
    return async (dispatch) => {
        return await fetch(api + "/rooms/" + roomid + "/teams/" + teamName, {
            method: "PUT",
            mode: "cors",
        })
            .then(() => dispatch(teamApproved(teamName)))
    };
}

export function teamDisapproved(payload) {
    return { type: "teamDisapproved", payload }
}

export function disapproveTeam(roomid, teamName) {
    return async (dispatch) => {
        return await fetch(api + "/rooms/" + roomid + "/teams/" + teamName, {
            method: "DELETE",
            mode: "cors"
        })
            .then(() => dispatch(teamDisapproved(teamName)))
    }
}

// reducer
const initialRoomState = {
    roomid: null,
    teams: [
        {
            name: "Alpaca",
            roundPoints: 2,
            isApproved: false,
            answers: [
                {
                    _id: 198,
                    answer: "New Delhi",
                    isCorrect: false,
                    round: 1,
                },
                {
                    _id: 199,
                    answer: "Doge",
                    isCorrect: true,
                    round: 1,
                },
            ],
        },
        {
            name: "Koala",
            roundPoints: 5,
            isApproved: false,
            answers: [
                {
                    _id: 198,
                    answer: "New Delphi",
                    isCorrect: false,
                    round: 1
                },
            ],
        },
    ]
};

export function roomReducer(state = initialRoomState, action) {
    switch (action.type) {
        case "newQuizCreated":
            return { ...state, roomid: action.payload.roomid };
        case "teamApproved":
            let teams = state.teams
            teams.forEach((team, teamid) => {
                if (team.name === action.payload) {
                    teams[teamid].isApproved = true;
                }
            })
            return { ...state, teams: teams };
        case "teamDisapproved":
            let newTeams = state.teams.filter(team => team.name !== action.payload)
            return { ...state, teams: newTeams }
        default:
            return state;
    }
}
