import React, { Component } from "react";
import { Navbar, NavItem } from "react-materialize";
import "./Navbars.css";

class Navbars extends Component {
  componentWillUnmount() {
    window.clearTimeout(this.timeout);
  }

  renderMessage(correct, gameWon, clear = false) {
    let message, className;
    if (clear) {
      className = "";
    } else if (correct === undefined) {
      message = "Click an image to begin";
      className = "";
    } else {
      message = gameWon
        ? "You won the game!!!"
        : correct
        ? "You guessed correctly!"
        : "You guessed incorrectly";
      className = correct ? "correct" : "incorrect";
    }

    window.clearTimeout(this.timeout);
    if (!clear & (correct !== undefined)) {
      this.timeout = window.setTimeout(
        this.renderMessage,
        gameWon ? 3000 : 1000,
        gameWon ? undefined : correct,
        false,
        true
      );
    }
    return (
      <li key={Math.random()} className={className}>
        {message}
      </li>
    );
  }

  render() {
    return (
      <Navbar className="nav-comp" brand="Clicky Game" right>
        <NavItem className="nav-list"> Score:|Highest Score:</NavItem>
      </Navbar>
    );
  }
}

export default Navbars;
