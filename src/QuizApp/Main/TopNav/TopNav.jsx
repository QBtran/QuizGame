import "../TopNav/TopNav.scss";
import logo from "../asset/quiz.png";
import "../TopNav/Btn.scss";
import Box from "./Btn";
import Body from "./body/Body.jsx";
import Footer from "./footer/Footer";

const TopNav = () => {
  return (
    <div>
      <header>
        <nav>
          <img className="logo" src={logo} alt="logo"></img>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Q-Quiz</a>
            </li>
            <li>
              <a href="#">Contribute</a>
            </li>
            <li>
              <a href="#">Top-Score</a>
            </li>
          </ul>
          <Box />
        </nav>
      </header>
      <body>
        <Body />
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default TopNav;
