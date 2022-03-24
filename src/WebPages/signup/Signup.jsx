import { useState } from "react";
import { useEffect } from "react";
import { useAuth } from "../../Contexts/auth-context";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const { signupHandler, token } = useAuth();
  const [signUpDetails, setSignUpDetails] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    confirmpassword: "",
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
      <div className="signup-page">
        <div className="login-container">
          <div className="login-inputs">
            <h1>Sign Up</h1>
            <div className="input">
              <label>Email</label>
              <input
                value={signUpDetails.email}
                placeholder="user@gmail.com"
                className="input-txt"
                type="email"
                onChange={(e) =>
                  setSignUpDetails({ ...signUpDetails, email: e.target.value })
                }
              />
            </div>
            <div className="input">
              <label>First name</label>
              <input
                value={signUpDetails.firstname}
                placeholder="Jon"
                className="input-txt"
                type="email"
                onChange={(e) =>
                  setSignUpDetails({
                    ...signUpDetails,
                    firstname: e.target.value,
                  })
                }
              />
            </div>

            <div className="input">
              <label>Last Name</label>
              <input
                value={signUpDetails.lastname}
                placeholder="Doe"
                className="input-txt"
                type="email"
                onChange={(e) =>
                  setSignUpDetails({
                    ...signUpDetails,
                    lastname: e.target.value,
                  })
                }
              />
            </div>
            <div className="input">
              <label>Password</label>
              <input
                value={signUpDetails.password}
                placeholder="********"
                className="input-txt"
                type="password"
                onChange={(e) =>
                  setSignUpDetails({
                    ...signUpDetails,
                    password: e.target.value,
                  })
                }
              />
            </div>
            <div className="input">
              <label>Confirm Password</label>
              <input
                value={signUpDetails.confirmpassword}
                placeholder="********"
                className="input-txt"
                type="password"
                onChange={(e) =>
                  setSignUpDetails({
                    ...signUpDetails,
                    confirmpassword: e.target.value,
                  })
                }
              />
            </div>

            <div className="input forgot-password">
              <div className="list-item">
                <input id="item-1" type="checkbox" name="checkbox-input" />
                <label for="item-1">I accept all terms and conditions</label>
              </div>
            </div>

            <div className="input btn-input">
              <button
                className="primary-button"
                onClick={() =>
                  signupHandler(
                    signUpDetails.email,
                    signUpDetails.password,
                    signUpDetails.firstname,
                    signUpDetails.lastname
                  )
                }
              >
                Create Account
              </button>
            </div>

            <div className="input flex-justify-center">
              <a href="/WebPages/login/login.html">Already a user? Login</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Signup };
