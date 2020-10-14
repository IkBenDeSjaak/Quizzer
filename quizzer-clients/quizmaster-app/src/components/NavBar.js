import React from "react";
import { NavLink } from "react-router-dom";

export class NavBar extends React.Component {
  render() {
    return (
      <nav>
        <div className="title">Quizzer</div>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/help">Help</NavLink>
      </nav>
    );
  }
}
