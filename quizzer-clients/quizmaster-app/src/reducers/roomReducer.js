import { login, sendMessage } from "../ws";

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
        login(data.roomid);
        return data;
      })
      .then((data) => {
        dispatch(newQuizCreated(data));
      });
  };
}

export function fetchTeamNameAction(teamid) {
  return { type: "fetchTeamNameAction", teamid };
}

export function teamApproved(teamid) {
  return { type: "teamApproved", teamid };
}

export function approveTeam(roomid, teamName) {
  return async (dispatch) => {
    return await fetch(api + "/rooms/" + roomid + "/teams/" + teamName, {
      method: "PUT",
      mode: "cors",
    }).then(() => {
      sendMessage("TEAM_APPROVED", roomid, teamName);
      dispatch(teamApproved(teamName));
    });
  };
}

export function teamDisapproved(payload) {
  return { type: "teamDisapproved", payload };
}

export function disapproveTeam(roomid, teamName) {
  return async (dispatch) => {
    return await fetch(api + "/rooms/" + roomid + "/teams/" + teamName, {
      method: "DELETE",
      mode: "cors",
    }).then(() => {
      sendMessage("TEAM_APPROVED", roomid, teamName);
      dispatch(teamDisapproved(teamName));
    });
  };
}

export function receivedAnswer(answer, teamid) {
  return { type: "receivedAnswer", answer, teamid };
}

export function fetchAnswer(roomid, teamid, questionid) {
  return async (dispatch) => {
    return await fetch(
      api + "/rooms/" + roomid + "/teams/" + teamid + "/answers/" + questionid,
      {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors",
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((answer) => {
        dispatch(receivedAnswer(answer, teamid));
      })
      .catch((err) => console.error("Error: ", err));
  };
}

export function approvedAnswer(status, teamid) {
  return { type: "approvedAnswer", status, teamid };
}

export function sendShowAnswer(status, teamid) {
  return async (dispatch, getState) => {
    let state = getState();
    sendMessage("SHOW_ANSWER", state.room.roomid, teamid);
    dispatch(approvedAnswer(status, teamid));
  };
}

export function approveAnswerAction(status, teamid) {
  return async (dispatch, getState) => {
    let state = getState();
    const data = {
      isCorrect: status,
    };
    return await fetch(
      api +
        "/rooms/" +
        state.room.roomid +
        "/teams/" +
        teamid +
        "/answers/" +
        state.round.question._id +
        "/approve",
      {
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then(() => {
        dispatch(sendShowAnswer(status, teamid));
      })
      .catch((err) => console.error("Error: ", err));
  };
}

export function nextQuestionRoomAction() {
  return { type: "nextQuestionRoomAction" };
}

export function clearedRoom() {
  return { type: "clearRoom" };
}

export function clearRoom() {
  return async (dispatch, getState) => {
    let state = getState();
    sendMessage("END_QUIZ", state.room.roomid, null);
    dispatch(clearedRoom());
  };
}

// reducer
const initialRoomState = {
  roomid: null,
  teams: {},
};

export function roomReducer(state = initialRoomState, action) {
  switch (action.type) {
    case "newQuizCreated":
      return { ...state, roomid: action.payload.roomid };

    case "fetchTeamNameAction":
      if (state.teams.length >= 1) {
        return {
          ...state,
          teams: [...state.teams, { teamid: action.teamid, isApproved: false }],
        };
      } else {
        return {
          ...state,
          teams: [{ teamid: action.teamid, isApproved: false }],
        };
      }

    case "teamApproved":
      let teamApprovedChanges;
      state.teams.map((team, i) => {
        if (team.teamid === action.teamid) {
          teamApprovedChanges = [
            ...state.teams.slice(0, i),
            {
              teamid: action.teamid,
              isApproved: true,
            },
            ...state.teams.slice(i + 1),
          ];
        }
        return teamApprovedChanges;
      });
      return { ...state, teams: teamApprovedChanges };

    case "teamDisapproved":
      let newTeams = state.teams.filter(
        (team) => team.teamid !== action.payload
      );
      return { ...state, teams: newTeams };

    case "receivedAnswer":
      let receivedAnswerChanges;
      state.teams.map((team, i) => {
        if (team.teamid === action.teamid) {
          receivedAnswerChanges = [
            ...state.teams.slice(0, i),
            {
              teamid: action.teamid,
              isApproved: true,
              answer: action.answer.answer,
            },
            ...state.teams.slice(i + 1),
          ];
        }
        return receivedAnswerChanges;
      });
      return { ...state, teams: receivedAnswerChanges };

    case "approvedAnswer":
      let approvedAnswerChanges;
      state.teams.map((team, i) => {
        if (team.teamid === action.teamid) {
          approvedAnswerChanges = [
            ...state.teams.slice(0, i),
            {
              ...state.teams[i],
              answerCorrect: action.status,
            },
            ...state.teams.slice(i + 1),
          ];
        }
        return approvedAnswerChanges;
      });
      return { ...state, teams: approvedAnswerChanges };

    case "nextQuestionRoomAction":
      let nextQuestionRoomChanges = [];
      for (let i = 0; i < state.teams.length; i++) {
        const team = state.teams[i];
        nextQuestionRoomChanges.push({
          teamid: team.teamid,
          isApproved: team.isApproved,
          answer: null,
          answerCorrect: null,
        });
      }

      return { ...state, teams: nextQuestionRoomChanges };

    case "clearRoom":
      return { ...state, ...initialRoomState };

    default:
      return state;
  }
}
