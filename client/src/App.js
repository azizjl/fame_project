import "./App.css";
import React, { useState, useEffect } from "react";
import { Curtains } from "./component/Curtains";
import { Login } from "./component/Login";
import { Home } from "./component/Home";
import { MoviePlayer } from "./component/MoviePlayer";
import { Recorder } from "./component/Recorder";
import { Switch, Route } from "react-router-dom";

import PrivateRoute from "./component/PrivateRoute/PrivateRoute";

import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "./JS/actions/userAction";
import { Player } from "./component/Player";
import { Chat } from "./component/Chat";

import io from "socket.io-client";

const socket = io.connect("https://famegmc.herokuapp.com/");

function App() {
  //auth

  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const user = useSelector((state) => state.userReducer.user);

  const [roomname, setRoomname] = useState("public");
  const [movieStarted, setMovieStarted] = useState(false);

  useEffect(() => {
    dispatch(getProfile());
  }, [isAuth]);

  //

  const [checked, setChecked] = useState(true);

  const logoStyleBig = {
    width: "358px",
    top: "50%",
  };

  let logoStyleSmall = { width: "150px", top: "10%" };
  let logoStyleMovie = { width: "100px", top: "8%", left: "6%" };

  // let movieWait = {
  //   left: "translateX(-80%)",
  //   right: "translateX(80%)",
  // };

  return (
    <div className="App">
      <img
        style={
          checked
            ? logoStyleBig
            : movieStarted
            ? logoStyleMovie
            : logoStyleSmall
        }
        className="logo"
        src="fame.png"
        onClick={() => setChecked(!checked)}
      />

      <Curtains
        // movieWaitLeft={movieWait.left}
        // movieWaitRight={movieWait.right}
        checked={checked}
        setChecked={setChecked}
      />
      {/* {user && <Chat user={user} roomname={roomname} socket={socket} />} */}

      <Switch>
        <PrivateRoute exact path="/" render={() => <Home />} />
        <Route
          path="/login"
          render={() => (
            <Login checked={checked} setChecked={setChecked} SignIn={true} />
          )}
        />

        <Route
          path="/register"
          render={() => (
            <Login checked={checked} setChecked={setChecked} SignIn={false} />
          )}
        />
        <Route
          path="/movie"
          render={() => (
            <Player
              setMovieStarted={setMovieStarted}
              user={user}
              roomname={roomname}
              socket={socket}
            />
          )}
        />
        <Route path="/waiting" render={() => <MoviePlayer />} />
      </Switch>
    </div>
  );
}

export default App;
