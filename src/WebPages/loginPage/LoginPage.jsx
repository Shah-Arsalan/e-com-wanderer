import "./Loginpage.css";
import { useState } from "react";
import { useAuth } from "../../Contexts/auth-context";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const { loginCall, token, user } = useAuth();

  const [loginDetails, setLoginDetails] = useState({
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
  });

  useEffect(() => {
    if (token) {
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, [token]);

  return (
    <>
      <div className="login-page">
        <div className="login-container">
          <div className="login-inputs">
            <h1>Login</h1>
            <div className="input">
              <label>Email</label>
              <input
                value={loginDetails.email}
                className="input-txt"
                type="email"
              />
            </div>
            <div className="input">
              <label>Password</label>
              <input
                value={loginDetails.password}
                className="input-txt"
                type="password"
              />
            </div>

            <div className="input htmlFot-password">
              <div className="list-item">
                <input id="item-1" type="checkbox" name="checkbox-input" />
                <label htmlFor="item-1">Remember me</label>
                <a href="">Forgot Password</a>
              </div>
            </div>

            <div className="input btn-input">
              <button
                className="primary-button"
                onClick={() =>
                  loginCall(loginDetails.email, loginDetails.password)
                }
              >
                Log In
              </button>
            </div>

            <div className="input flex-justify-center">
              Dont have existing accout : Sign Up?
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { LoginPage };
