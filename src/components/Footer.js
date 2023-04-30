import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

export default function Footer() {
  return (
    <footer className="pagefooter">
        <div className="footer_container">
    <a href="https://github.com/carsonadair" target={"_blank"}>Github
    </a>
      <a href="https://www.linkedin.com/in/carson-adair-29029511b/" target={"_blank"}>LinkedIn</a>
      <a href="https://stackoverflow.com/users/20737779/carson-adair" target={"_blank"}>Stackoverflow</a>
        </div>
    </footer>
  );
}