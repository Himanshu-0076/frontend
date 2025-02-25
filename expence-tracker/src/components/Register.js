import React, { useState } from "react";
import "../assets/css/Register.css";
import { Link, useNavigate } from "react-router-dom";
//rfce
function Register() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const doRegister = (event) => {
    event.preventDefault();
    console.log("clicked", inputs);
    navigate("/dashboard");
  };

  return (
    <div className="mainContainer">
      <div className="formcard">
        <div>
          <h2 style={{ alignSelf: "center" }}>Register</h2>
        </div>

        <form onSubmit={doRegister}>
          <div>
            <label>
              Name:{" "}
              <input
                required
                type="text"
                placeholder="Your Name"
                name="Name"
                value={inputs.Name || ""}
                onChange={handleChange}
              />{" "}
            </label>
          </div>

          <div>
            <label>
              Email:{" "}
              <input
                type="email"
                placeholder="Enter Your Email"
                name="email"
                value={inputs.email || ""}
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              Password:{" "}
              <input
                type="password"
                placeholder="Enter Your Password"
                name="pass"
                value={inputs.pass || ""}
                onChange={handleChange}
              />{" "}
            </label>
          </div>

          <div>
            <label>
              Confirm Password:{" "}
              <input
                type="password"
                placeholder="Enter Confirm Password"
                name="conpass"
                value={inputs.conpass || ""}
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <button>Submit</button>
          </div>

          <div>
            <span>
              already a user?<Link to="/">Login</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
