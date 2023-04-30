import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

export default function NavBar() {
  return (
    <header id="Header" className="header">
      <h1>
        Carson Adair
        <div class="btn-group" role="group" aria-label="Outlined Buttons">
          <a href="#AboutMe">
            <button type="button" class="btn btn-outline-primary each-button">About Me</button>
          </a>
          <a href="#Projects">
            <button type="button" class="btn btn-outline-primary each-button">
              Projects
            </button>
          </a>
          <a href="#Contact">
            <button type="button" class="btn btn-outline-primary each-button">
              Contact
            </button>
          </a>
        </div>
      </h1>
    </header>
  );
}
