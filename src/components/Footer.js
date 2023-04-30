import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

export default function Footer() {
  return (
    <div id="Contact">
      <section>
<div className="container">  
  <form id="contact" action="" method="post">
    <h3>Contact Me!</h3>
    <fieldset>
      <input placeholder="Your name" type="text" tabindex="1" required autofocus></input>
    </fieldset>
    <fieldset>
      <input placeholder="Your Email Address" type="email" tabindex="2" required></input>
    </fieldset>

    <fieldset>
      <textarea placeholder="Type your Message Here...." tabindex="5" required></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
  </form>
 
  
</div>
</section>
<a href="#Header">
            <button type="button" class="btn btn-outline-primary each-button">To Top</button>
          </a>    <footer className="pagefooter">
        <div className="footer_container">
    <a href="https://github.com/carsonadair" target={"_blank"}>Github
    </a>
      <a href="https://www.linkedin.com/in/carson-adair-29029511b/" target={"_blank"}>LinkedIn</a>
      <a href="https://stackoverflow.com/users/20737779/carson-adair" target={"_blank"}>Stackoverflow</a>
        </div>
    </footer>
    </div>
  );
}