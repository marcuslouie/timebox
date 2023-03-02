import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignIn } from "react-auth-kit";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [loginError, setLoginError] = useState(false);

  //Function to compare login against a database
  const validCredentials = { Lulu: "Silverwhisker27", Marcus: "pikaPikachu" };

  const signIn = useSignIn();

  const navigate = useNavigate();
  function checkCredentials(username, password, res) {
    if (
      username in validCredentials &&
      password === validCredentials[username]
    ) {
      console.log("success!!!!");
      if (
        //DEFINE RES
        signIn({
          token: Math.random().toString(36).slice(2),
          expiresIn: 3600,
          tokenType: "Bearer",
          authState: username,
        })
      )
        navigate("/");
    } else {
      console.log("FAILED");
      setLoginError(true);
    }
  }

  return (
    <div className="wholesite-wrapper">
      <div className="center">
        <div className="container">
          <div className="box">
            <div class="container">
              <div class="card">
                <a class="login">Log in</a>
                <div class="inputBox">
                  <input
                    type="text"
                    required="required"
                    defaultValue={null}
                    onChange={(event) => {
                      setUsername(event.target.value);
                    }}
                  />
                  <span>Username</span>
                </div>

                <div class="inputBox">
                  <input
                    type="password"
                    required="required"
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                  />
                  <span>Password</span>
                </div>

                <button
                  class="enter"
                  onClick={() => {
                    console.log(username);
                    console.log(password);
                    const res = { token: "josia23OSDF" };
                    //Just check if username password combo is in database
                    checkCredentials(username, password, res);
                  }}
                  type="button"
                >
                  Enter
                </button>
              </div>
              {loginError && <p> Username or password is incorrect </p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
