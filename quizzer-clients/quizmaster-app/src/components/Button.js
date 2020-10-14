import React from "react";
import '../main.css'

export default class Button extends React.Component {
  render() {
    const buttonText = "Start quiz";

    return <a href="#" className="button">{buttonText}</a>;
  }
}
