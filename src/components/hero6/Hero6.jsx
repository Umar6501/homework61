import React from "react";
import "./Hero6.css";

function Hero6() {
  return (
    <section className="hero6">
      <div className="container">
        <div className="hero6-content">
          <div className="left">
            <h1 className="tt1">
              Join 100 Compannies who boost their business with Product
            </h1>
            <h2 className="tt2">Product</h2>
            <a href="#" className="tt3">
              Get This
            </a>
          </div>
          <div className="right">
            <img src="assets/screen.png" alt="" />
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

export default Hero6;
