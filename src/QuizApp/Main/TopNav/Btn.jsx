import { useState } from "react";
import "../TopNav/Btn.scss";
import Modal from "./Modal";

const Box = () => {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const login = (detail) => {
    console.log(detail);
    if (
      detail.email === adminUser.email &&
      detail.password === adminUser.password
    ) {
      console.log("logged in");
      setUser({
        name: detail.name,
        email: detail.email,
      });
    } else {
      console.log("detail do not match");
    }
  };

  const logout = () => {
    console.log("logout");
    setUser({ name: "", email: "" });
  };
  return (
    <>
      <div className="App">
        {user.email !== "" ? (
          <div className="welcome">
            <h2>
              Welcome,<span>{user.name}</span>
            </h2>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <Modal login={login} error={error} />
        )}
      </div>
    </>
  );
};
export default Box;
