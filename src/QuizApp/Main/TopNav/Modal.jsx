import { useState } from "react";
import "../TopNav/Btn.scss";
const Modal = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");

  const handleOnchangeName = (e) => {
    setName(e.target.value);
  };
  const handleOnchangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleOnchangeMail = (e) => {
    setMail(e.target.value);
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    const data = { name, password };
    const url = "https://quizgame12145.herokuapp.com/user/login";
    const res = await fetch(url, {
      method: "POST",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    return res.json();
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const data = { name, password, mail };
    const url = "https://quizgame12145.herokuapp.com/user/regiter";
    const res = await fetch(url, {
      method: "POST",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    return res.json();
  };
  return (
    <>
      <button
        type="button"
        className="BTN color-1"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Login
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content ">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body signup">
              <div className="contain">
                <input type="checkbox" id="flip" />
                <div className="cover">
                  <div className="front">
                    {/* <img src="images/frontImg.jpg" alt="" /> */}
                    <div className="text">
                      <span className="text-1">
                        Every new friend is a <br /> new adventure
                      </span>
                      <span className="text-2">Let's get connected</span>
                    </div>
                  </div>
                  <div className="back">
                    {/* <img className="backImg" src="images/backImg.jpg" alt="" /> */}
                    <div className="text">
                      <span className="text-1">
                        Complete miles of journey <br /> with one step
                      </span>
                      <span className="text-2">Let's get started</span>
                    </div>
                  </div>
                </div>
                <div className="forms">
                  <div className="form-content">
                    <div className="login-form">
                      <div className="title">Login</div>
                      <form>
                        <div className="input-boxes">
                          <div className="input-box">
                            <i className="fas fa-envelope"></i>
                            <input
                              onChange={handleOnchangeName}
                              value={name}
                              type="text"
                              placeholder="Enter your email"
                              required
                            />
                          </div>
                          <div className="input-box">
                            <i className="fas fa-lock"></i>
                            <input
                              onChange={handleOnchangePassword}
                              value={password}
                              type="password"
                              placeholder="Enter your password"
                              required
                            />
                          </div>
                          <div className="text">
                            <a href="#">Forgot password?</a>
                          </div>
                          <div className="button input-box">
                            <button type="submit" onClick={handleLogin}>
                              Submit
                            </button>
                          </div>
                          <div className="text sign-up-text">
                            Don't have an account?{" "}
                            <label for="flip">Sigup now</label>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="signup-form">
                      <div className="title">Signup</div>
                      <form action="#">
                        <div className="input-boxes">
                          <div className="input-box">
                            <i className="fas fa-user"></i>
                            <input
                              onChange={handleOnchangeName}
                              value={name}
                              type="text"
                              placeholder="Enter your name"
                              required
                            />
                          </div>
                          <div className="input-box">
                            <i className="fas fa-envelope"></i>
                            <input
                              onChange={handleOnchangeMail}
                              value={mail}
                              type="email"
                              placeholder="Enter your email"
                              required
                            />
                          </div>
                          <div className="input-box">
                            <i className="fas fa-lock"></i>
                            <input
                              onChange={handleOnchangePassword}
                              value={password}
                              type="password"
                              placeholder="Enter your password"
                              required
                            />
                          </div>
                          <div className="button input-box">
                            <button type="submit" onClick={handleSignUp}>
                              Submit
                            </button>
                          </div>
                          <div className="text sign-up-text">
                            Already have an account?{" "}
                            <label for="flip">Login now</label>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
