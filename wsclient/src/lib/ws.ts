import { io } from "socket.io-client";

export const ws = io("http://app.local", {
  autoConnect: false,
  path: "/ws",
});
