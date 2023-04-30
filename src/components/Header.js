import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

export default function NavBar({ currentPage, handlePageChange }) {
  return (
    <header className="header">
      <h1>
        Carson Adair
        <div class="btn-group" role="group" aria-label="Outlined Buttons">
          <a href="#AboutMe">
            <button
              className={
                currentPage === "AboutMe"
                  ? "btn btn-primary"
                  : "btn btn-outline-primary"
              }
              onClick={() => handlePageChange("AboutMe")}
              type="button"
            >
              About Me
            </button>
          </a>
          <a href="#Projects">
            <button
              className={
                currentPage === "Projects"
                  ? "btn btn-primary"
                  : "btn btn-outline-primary"
              }
              onClick={() => handlePageChange("Projects")}
              type="button"
              class="btn btn-outline-primary"
            >
              Projects
            </button>
          </a>
          <a href="#Contact">
            <button
              className={
                currentPage === "Contact"
                  ? "btn btn-primary"
                  : "btn btn-outline-primary"
              }
              onClick={() => handlePageChange("Contact")}
              type="button"
              class="btn btn-outline-primary"
            >
              Contact
            </button>
          </a>
        </div>
      </h1>
    </header>
  );
}
