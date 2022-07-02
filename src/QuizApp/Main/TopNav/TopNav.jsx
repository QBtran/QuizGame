import "../TopNav/TopNav.scss";
import logo from "../asset/quiz.png";
import "../TopNav/Btn.scss";
import Box from "./Btn";

const TopNav = () => {
  return (
    <div>
      <header>
        <img className="logo" src={logo} alt="logo"></img>
        <nav>
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
        </nav>
        <Box />
      </header>
    </div>
  );
};
export default TopNav;
