import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="left-box">
            <h1>Work at the speed of thought</h1>
            <h4>
              Tools, tutorials, design and innovation experts, all in one place!
              The most intuitive way to imagine your next user experience.
            </h4>
            <div className="gg">
              <a href="#" className="one-one">
                Get started
              </a>
              <a href="#" className="two-two">
                Watch the Video
              </a>
            </div>
          </div>
          <div className="right-box">
            <img src="assets/amico.png" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
