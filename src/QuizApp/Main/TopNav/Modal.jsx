import { useState } from "react";
import "../TopNav/Btn.scss";
const Modal = ({ login, error }) => {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
  };

  login(details);

  return (
    <>
      {/* <form onSubmit={submitHandler}>
        <div className="form-inner">
          <h2>Login</h2>
          {error !== "" ? <div className="error">{error}</div> : ""}
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
              value={details.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              value={details.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            />
          </div>
          <input type="submit" value="LOGIN" />
        </div>
      </form> */}

      <button
        type="button"
        // class="btn btn-primary"
        className="BTN color-1"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Login
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              {/* <h5 class="modal-title" id="exampleModalLabel">
                Login
              </h5> */}
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body signup">
              <form onSubmit={submitHandler}>
                <div className="form-inner">
                  {/* <h2>Login</h2> */}
                  {error !== "" ? <div className="error">{error}</div> : ""}
                  <div className="form-group">
                    <label htmlFor="name">Login</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="User name"
                      onChange={(e) =>
                        setDetails({ ...details, name: e.target.value })
                      }
                      value={details.name}
                    />
                  </div>

                  <div className="form-group">
                    {/* <label htmlFor="password">Password</label> */}
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      onChange={(e) =>
                        setDetails({ ...details, password: e.target.value })
                      }
                      value={details.password}
                    />
                  </div>
                  {/* <input type="submit" value="LOGIN" /> */}
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Let go!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
