import React from "react";

export default function Footer(){
  return(
    <footer>
      <div className="footer">
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <div className="footer-content">
          <div className="details">
            <h2>ByteCode Learners</h2>
            <p>About Us</p>
            <p>ByteCodeLearners Community is an initiative to promote Project based learning .</p>
            <p id="initiator">INITIATOR</p>
          </div>
          <div className="contact">
            <h2>Contact Us</h2>
            <p>Email- bytecodelearners@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="copy-right">
        <p>Copyright © 2020 | Created by ByteCodeLearners.</p>
        <div className="footer-icons">
        <span><i className="fab fa-facebook-f"></i></span>
        <span><i className="fab fa-twitter"></i></span>
        <span><i className="fab fa-instagram"></i></span>
        <span><i className="fab fa-github"></i></span>

        </div>
      </div>
    </footer>
  );
}