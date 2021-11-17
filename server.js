require("dotenv").config();
// require("dotenv").config({ path:"./config/.env" })
const express = require("express");
const connectDB = require("./config/connectDB");
const user = require("./routes/user");
const cors = require("cors");
const fs = require("fs");
const socket = require("socket.io");
const Vote = require("./models/vote");

const {
  get_Current_User,
  user_Disconnect,
  join_User,
} = require("./chat/dummyuser.js");
const vote = require("./models/vote");

const app = express();

app.use(cors());
app.use(express.static("public"));

const buildPath = path.join(__dirname, "..", "build");
app.use(express.static(buildPath));

app.use(express.json());

connectDB();

app.use("/user", user);

const movies = [
  { movieName: "titanic", file: "movie.mp4" },
  { movieName: "fast and furious", file: "movie2.mp4" },
];

var currentMovie = "";

app.post("/vote", async (req, res) => {
  let { email, movieNum } = req.body;
  let date = new Date().toLocaleDateString();

  var query = { email, date },
    update = { movieNum: movieNum },
    options = { upsert: true, new: true, setDefaultsOnInsert: true };
  Vote.findOneAndUpdate(query, update, options, function (error, result) {
    if (error) return;
    res.status(200).json({ msg: "Voted successfully" });
  });
});

app.get("/votes/:email", async (req, res) => {
  let date = new Date().toLocaleDateString();

  let votesCounter = [0, 0, 0];
  let email = req.params.email;
  let voted = 0;
  const votes = await Vote.find({ date });
  votes.forEach((vote) => {
    votesCounter[vote.movieNum - 1]++;
    voted = vote.email === email ? vote.movieNum : 0;
  });
  console.log(votesCounter);
  res.json({ votesCounter, voted });
});

app.get("/choose_movie/:movieIndex", (req, res) => {
  currentMovie = movies[req.params.movieIndex];
  console.log(currentMovie);
  res.json(currentMovie);
});

app.get("/video", function (req, res) {
  //   const path = `./assests/${currentMovie.file}`;
  const path = `./assests/movie.mp4`;
  const stat = fs.statSync(path);
  const fileSize = stat.size;
  const range = req.headers.range;
  if (range) {
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
    const chunksize = end - start + 1;
    const file = fs.createReadStream(path, { start, end });
    const head = {
      "Content-Range": `bytes ${start}-${end}/${fileSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": chunksize,
      "Content-Type": "video/mp4",
    };
    res.writeHead(206, head);
    file.pipe(res);
  } else {
    const head = {
      "Content-Length": fileSize,
      "Content-Type": "video/mp4",
    };
    res.writeHead(200, head);
    fs.createReadStream(path).pipe(res);
  }
});

const PORT = process.env.PORT || process.env.port;

var server = app.listen(
  PORT,
  console.log(`Server is running on the port no: ${PORT} `)
);

const io = socket(server);

//initializing the socket io connection
io.on("connection", (socket) => {
  //for a new user joining the room

  console.log("new connection");

  socket.on("joinRoom", ({ username, roomname }) => {
    //* create user
    // console.log(roomname);

    const p_user = join_User(socket.id, username, roomname);
    console.log(socket.id, "=id");
    socket.join(p_user.room);

    //display a welcome message to the user who have joined a room
    socket.emit("message", {
      userId: p_user.id,
      username: p_user.username,
      text: `Welcome ${p_user.username}`,
    });

    //displays a joined room message to all other room users except that particular user
    // socket.broadcast.to(p_user.room).emit("message", {
    socket.broadcast.to("public").emit("message", {
      userId: p_user.id,
      username: p_user.username,
      text: `${p_user.username} has joined the chat`,
    });
  });

  //user sending message
  socket.on("chat", (text) => {
    //gets the room user and the message sent
    const p_user = get_Current_User(socket.id);
    let colors = ["pink", "violet"];

    io.to(p_user.room).emit("message", {
      userId: p_user.id,
      username: p_user.username,
      text: text,
      color: colors[Math.floor(Math.random() * colors.length)],
    });
  });

  //when the user exits the room
  socket.on("disconnect", () => {
    //the user is deleted from array of users and a left room message displayed
    const p_user = user_Disconnect(socket.id);

    if (p_user) {
      io.to(p_user.room).emit("message", {
        userId: p_user.id,
        username: p_user.username,
        text: `${p_user.username} has left the room`,
      });
    }
  });
});
