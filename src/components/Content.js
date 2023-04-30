import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import itMe from "./assets/it_me.jpg";
import rohan from "./assets/rohan.png"

export default function About() {
  return (
    <article id="AboutMe">
      <h1>About Me</h1>
      <div>
        <img id="itme" src={itMe} alt="Profile"></img>
        <p>
        I am a specialist in various multi-media fields including photography, videography, design, and production. 
            I received a BA in Film, Television, and Media Arts with a minor in Asian Studies, and a MBA with a focus in marketing and management. 
            I enjoy hands-on projects, working in groups and independently, and being a part of something big! 
            I have skills in production, editing, and multi media management, including social media accounts. 
            I enjoy front-end web development.
        </p>
        <img id="rohan" src={rohan} alt="Rohan"></img>
      </div>
    </article>
  );
}
