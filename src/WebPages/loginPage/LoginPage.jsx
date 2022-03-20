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
        <div class="login-container">
          <div class="login-inputs">
            <h1>Login</h1>
            <div class="input">
              <label>Email</label>
              <input
                value={loginDetails.email}
                class="input-txt"
                type="email"
              />
            </div>
            <div class="input">
              <label>Password</label>
              <input
                value={loginDetails.password}
                class="input-txt"
                type="password"
              />
            </div>

            <div class="input htmlFot-password">
              <div class="list-item">
                <input id="item-1" type="checkbox" name="checkbox-input" />
                <label htmlFor="item-1">Remember me</label>
                <a href="">Forgot Password</a>
              </div>
            </div>

            <div class="input btn-input">
              <button
                class="primary-button"
                onClick={() =>
                  loginCall(loginDetails.email, loginDetails.password)
                }
              >
                Log In
              </button>
            </div>

            <div class="input flex-justify-center">
              <a href="/WebPages/signup/signup.html">
                Dont have existing accout : Sign Up?
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { LoginPage };
