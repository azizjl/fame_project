import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { Movie } from "./Movie";
import "./MoviePlayer.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export const MoviePlayer = () => {
  const history = useHistory();

  const user = useSelector((state) => state.userReducer.user);
  const [time_r, setTime_r] = useState("00:00:00");
  useEffect(() => {
    var timer = setInterval(function () {
      var now = new Date();
      var then = new Date(now);
      then.setDate(then.getDate() + 1);
      then.setHours(14);
      then.setMinutes(59);
      then.setSeconds(0);
      then.setMilliseconds(0);
      let left = then.getTime() - now.getTime();

      let duration = left;
      var milliseconds = Math.floor((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

      setTime_r(
        `${hours < 10 ? `0${hours}` : hours}:${
          minutes < 10 ? `0${minutes}` : minutes
        }:${seconds < 10 ? `0${seconds}` : seconds}`
      );
    }, 1000);
  });

  useEffect(() => {
    if (time_r === "00:12:00") {
      history.push("/movie");
    }
  }, [time_r]);

  const updateUserImage = (e) => {
    e.preventDefault();
    const data = new FormData();
    const files = e.target.files;

    data.append("userEmail", user.email);
    data.append("file", files[0]);

    console.log(user.email);

    if (files && files.length > 0) {
      setBtnpdp("uploading...");
      axios({
        method: "post",
        url: "https://famegmc.herokuapp.com/user/update-image",
        data: data,
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
        .then(function (response) {
          setBtnpdp("Update profil picture");
          getImages();
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const photoRef = useRef();
  const handleImgInput = () => {
    photoRef.current.click();
  };

  const [userImages, setUserImages] = useState([]);
  const getImages = () => {
    axios
      .get("https://famegmc.herokuapp.com/user/usersImages")
      .then((res) => setUserImages(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getImages();
    const interval = setInterval(() => {
      getImages();
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const [btnpdp, setBtnpdp] = useState("Update profil picture");

  return (
    <div className="MoviePlayer">
      <div
        style={{ backgroundImage: `url('titanic.jpg')` }}
        className="movieWaitWrapper">
        <img src="titanicLogo.png" className="logoMovieWait" />
        <span className="moviesTitles bold">Movie starts in {time_r}</span>
        <input
          style={{ display: "none" }}
          ref={photoRef}
          onChange={(e) => updateUserImage(e)}
          type="file"
          name="file"
        />
        <button
          className="updatePdp"
          style={{ zIndex: 9 }}
          onClick={() => handleImgInput()}>
          {btnpdp}
        </button>
        <div className="peoples">
          {userImages &&
            userImages
              .filter((el) => {
                return el.photo != "";
              })
              .slice(0, 5)
              .map((el, key) => (
                <div key={key} className="people">
                  <img src={el.photo} />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};
