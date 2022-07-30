import React from "react";
// import logo from "";
import Box from "./Btn";
import "../TopNav.scss";
import { Link } from "react-router-dom";
import "../header/Btn.scss";

const Header = () => {
  return (
    <div>
      <nav>
        <img className="logo" alt="logo"></img>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="Q-Quiz">Q-Quiz</Link>
          </li>
          <li>
            <Link to="/Contribute">Contribute</Link>
          </li>
          <li>
            <Link to="/Top-Score">Top-Score</Link>
          </li>
        </ul>
        <Box />
      </nav>
    </div>
  );
};

export default Header;
