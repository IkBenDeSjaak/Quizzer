const api = "http://localhost:3000";

// action creators
export function teamApproved(response) {
    return { type: "teamApproved", response };
}

export function approveTeam(roomid, teamid) {
    return async () => {
        return await fetch(api + "/rooms/" + roomid + "/teams/" + teamid, {
            method: "PUT",
            mode: "cors",
        })
    };
}

// reducer
const initialRoomState = {
    id: 1,
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
        case "teamApproved":
            let teams = { ...state.teams }
            state.teams.forEach((team, teamid) => {
                if (team.name === action.teamName) {
                    let teamChange = teams[teamid].isApproved = true;
                    teams[teamid] = teamChange;
                }
            })
            return { ...state, teams: teams };
        default:
            return state;
    }
}
