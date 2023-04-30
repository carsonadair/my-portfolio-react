import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import IconOne from './assets/1.png'
import IconTwo from './assets/2.png'
import IconThree from './assets/3.png'
import IconFour from './assets/4.png'
import IconFive from './assets/5.png'
import IconSix from './assets/6.png'

export default function Projects() {
    return (
        <section id="Projects">
            <h1>My Projects</h1>
            <div className="gridparent">
            <a href="https://tiomeko.github.io/deja-brew/" target={"_blank"}>
                <figure className="grid-item">
                        <img src={IconOne} alt="statistics" width="300" height="300"></img>
                        <figcaption><button id="webappbuttons"> Deja Brew</button></figcaption>
                </figure> 
            </a>
            <a href="https://github.com/carsonadair/express-note-taker" target={"_blank"}>
                <figure className="grid-item">
                        <img src={IconTwo} alt="statistics" width="300" height="300"></img>
                        <figcaption><button id="webappbuttons"> Express Note Taker</button></figcaption>
                </figure> 
            </a>
            <a href="https://shielded-temple-21395.herokuapp.com/" target={"_blank"}>
                <figure className="grid-item">
                        <img src={IconThree} alt="statistics" width="300" height="300"></img>
                        <figcaption><button id="webappbuttons"> Terrain of Thought</button></figcaption>
                </figure> 
            </a>
            <a href="https://carsonadair.github.io/challeng-6-weather-app/"target={"_blank"}>
                        <figure className="grid-item">
                            <img src={IconFour} alt="statistics" width="300" height="300"></img>
                            <figcaption><button id="webappbuttons"> 5 Day Forecast</button></figcaption>
                        </figure>
            </a>
            <a href="https://github.com/carsonadair/employee-tracker"target={"_blank"}>
                <figure className="grid-item">
                        <img src={IconFive} alt="statistics" width="300" height="300"></img>
                        <figcaption><button id="webappbuttons"> Employee Tracker</button></figcaption>
                </figure> 
            </a>
            <a href="https://github.com/carsonadair/team-profile-generator"target={"_blank"}>
                    <figure className="grid-item">
                        <img src={IconSix} alt="statistics" width="300" height="300"></img>
                        <figcaption><button id="webappbuttons"> Team Profile Generator</button></figcaption>
                    </figure>
            </a>
            </div>
        </section>
    )
}