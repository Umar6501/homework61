import React from "react";
import "./Hero3.css";

function Hero3() {
  return (
    <section className="hero3">
      <div className="container">
        <h5>Contents Strategies</h5>
        <h3>
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </h3>
        <div className="hero3-content">
          <div className="items">
            <img src="assets/cards-1.png" alt="" />
            <h5>By Wahid Ari | 03 March 2019</h5>
            <p>Increasing Prosperity With Positive Thinking</p>
          </div>
          <div className="items">
            <img src="assets/cards-2.png" alt="" />
            <h5>By Wahid Ari | 03 March 2019</h5>
            <p>Increasing Prosperity With Positive Thinking</p>
          </div>
          <div className="items">
            <img src="assets/cards-3.png" alt="" />
            <h5>By Wahid Ari | 03 March 2019</h5>
            <p>Increasing Prosperity With Positive Thinking</p>
          </div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1470"
        height="390"
        viewBox="0 0 1400 390"
        fill="none"
        className="bagj"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M692.343 389.829C207.738 390.422 -278.12 116.867 -420.409 29.8361C-433.049 22.1049 -427.495 3.54608 -412.678 3.52792L1811.89 0.803345C1826.75 0.785156 1832.32 19.4038 1819.62 27.1203C1675.79 114.532 1184.69 389.226 692.343 389.829Z"
          fill="url(#paint0_linear_1_85)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_85"
            x1="1819.9"
            y1="388.519"
            x2="1819.44"
            y2="-0.498001"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#EDEDED" />
            <stop offset="1" stop-color="white" stop-opacity="0.01" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
}

export default Hero3;
