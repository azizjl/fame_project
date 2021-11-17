import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faPaperPlane,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
import Picker from "emoji-picker-react";

export const Chat = ({ user, socket }) => {
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([]);
  const [emojiToggle, setEmojiToggle] = useState(false);
  const [roomname, setRoomname] = useState("public");

  const onEmojiClick = (event, emojiObject) => {
    setMsg(msg + emojiObject.emoji);
    setEmojiToggle(false);
    msgTextRef.current.focus();
  };

  useEffect(() => {
    console.log(user.fullName);
    console.log(roomname);
    if (user.fullName !== "" && roomname !== "") {
      let username = user.fullName;
      socket.emit("joinRoom", { username, roomname });
      //if empty error message pops up and returns to the same page
    } else {
      alert("username and roomname are must !");
      window.location.reload();
    }
  }, []);

  useEffect(() => {
    socket.on("message", (data) => {
      setMessages((oldArray) => [...oldArray, data]);
    });
  }, []);

  const sendMsg = () => {
    // send message
    if (msg != "") {
      socket.emit("chat", msg);
      setMsg("");
    }
  };

  const handleSend = (e) => {
    if (e.key === "Enter") {
      sendMsg();
    } else {
      //   console.log("bad key");
    }
  };

  const msgTextRef = useRef();

  return (
    <div className="chat chatOverlay">
      <div className="chatWrapper">
        <div className="messages">
          {messages
            .map((el, key) => (
              <div key={key} className="message">
                <b style={{ color: el.color }}>{el.username} : </b>
                <span>{el.text}</span>
              </div>
            ))
            .reverse()}
        </div>
        <div className="chatBox">
          <input
            type="text"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            placeholder="Type message"
            onKeyPress={(e) => handleSend(e)}
            ref={msgTextRef}
          />
          {emojiToggle ? (
            <Picker
              onEmojiClick={onEmojiClick}
              //   pickerStyle={{ width: "1000px", top: "-198px", right: "20px" }}
              pickerStyle={{
                width: "280px",
                bottom: "60px",
                right: "20px",
                position: "fixed",
              }}
            />
          ) : (
            ""
          )}
          <FontAwesomeIcon
            onClick={() => setEmojiToggle(!emojiToggle)}
            className="sendBtn"
            icon={faSmile}
            color="white"
          />
        </div>
      </div>
    </div>
  );
};
