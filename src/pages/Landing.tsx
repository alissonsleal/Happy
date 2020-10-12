import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

import "../styles/pages/landing.css";

import logoImg from "../images/Logo.svg";

function Landing() {
  return (
    <div id="pageLanding">
      <div className="wrapper">
        <img src={logoImg} alt="happy" />
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>
        <div className="location">
          <strong>Brasília</strong>
          <span>Distrito Federal</span>
        </div>

        <Link to="/app" className="enterApp">
          <FiArrowRight size={26} />
        </Link>
      </div>
    </div>
  );
}

export default Landing;
