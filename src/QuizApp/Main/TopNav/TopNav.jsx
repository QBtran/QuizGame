import "../TopNav/TopNav.scss";

import "./header/Btn.scss";

import Body from "./body/Body.jsx";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const TopNav = () => {
  return (
    <div>
      <header>
        <Header />
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
