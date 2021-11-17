import React, { useState, useEffect } from "react";
import { Footer } from "./Footer";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";

//auth
import { Link, Redirect, useHistory } from "react-router-dom";
import { userLogin } from "./../JS/actions/userAction";
import { userRegister } from "./../JS/actions/userAction";

//auth
export const Login = ({ SignIn, checked, setChecked }) => {
  let history = useHistory();

  // const [SignIn, setSignIn] = useState(true);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [badCred, setBadCred] = useState(false);

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.userReducer.loading);
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  // const error = useSelector((state) => state.userReducer.error);

  const login = (e) => {
    const cred = { email, password };
    e.preventDefault();
    setChecked(true);

    dispatch(userLogin(cred)).then((res) => {
      if (res) {
        setTimeout(() => {
          setEmail("");
          setPassword("");
          history.push("/");
          setChecked(false);
        }, 3000);
      } else {
        setTimeout(() => {
          setBadCred(true);
          setChecked(false);
        }, 3000);
      }
    });
  };

  const register = (e) => {
    const newUser = { fullName, email, phone, password };
    e.preventDefault();

    dispatch(userRegister(newUser)).then((res) => {
      if (res.msg === "User added successfully") {
        history.push("/login");
      }
    });
    setFullName("");
    setEmail("");
    setPhone("");
    setPassword("");
  };

  useEffect(() => {
    if (isAuth) {
      setChecked(true);

      setTimeout(() => {
        history.push("/");
        setChecked(false);
      }, 3000);
    }
  }, [isAuth]);

  // return isAuth ? (
  //   <Redirect to="/" />
  // ) :
  return (
    <div
      className="login_wrapper"
      style={{
        backgroundImage: `url("popcorn.png")`,
      }}>
      {SignIn ? (
        <form>
          <h2 style={{ color: "white" }}>Sign in to join</h2>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
            style={badCred ? { border: "2px solid red" } : {}}
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            style={badCred ? { border: "2px solid red" } : {}}
          />
          <button onClick={(e) => login(e)}>Sign in</button>
          <span>
            Don't have an account ?{" "}
            <Link to="/register">
              <span style={{ fontWeight: "bold", cursor: "pointer" }}>
                Sign up here
              </span>
            </Link>
          </span>
        </form>
      ) : (
        <form>
          <h2 style={{ color: "white" }}>Sign up to join</h2>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            type="text"
            placeholder="Full Name"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="number"
            placeholder="Phone"
          />
          <button onClick={(e) => register(e)}>Sign up</button>
          <span>
            Already have an account ?{" "}
            <Link to="/login">
              <span style={{ fontWeight: "bold", cursor: "pointer" }}>
                Sign in here
              </span>
            </Link>
          </span>
        </form>
      )}
      <Footer />
    </div>
  );
};
