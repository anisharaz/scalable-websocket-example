import express from "express";
import { Server } from "socket.io";
import cors from "cors";
import { createServer } from "http";
import Redis from "redis";
const port = process.env.PORT || 3000;

const app = express();

app.use(cors());

const server = createServer(app);

const sio = new Server(server, {
  cors: {
    origin: "*",
  },
  path: "/ws",
  transports: ["websocket"],
});

const Pub = Redis.createClient({
  url: process.env.REDIS_URL,
});

const sub = Redis.createClient({
  url: process.env.REDIS_URL,
});

Pub.connect();
sub.connect();

app.get("/", (req, res) => {
  res.send("<h1>Hello World WS Server</h1>");
});

sio.on("connection", (socket) => {
  console.log("Client connected " + socket.id);
  socket.emit("message", "Welcome to container -> " + process.env.ID);
  socket.on("message", (data) => {
    Pub.publish("MESSAGE", data);
  });
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

sub.subscribe("MESSAGE", (msg) => {
  sio.emit("message", msg);
});

server.listen(
  {
    host: "0.0.0.0",
    port: port,
  },
  () => {
    console.log(`Server running on port ${port}`);
  }
);
