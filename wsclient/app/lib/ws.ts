import { io } from "socket.io-client";

export const ws = io(process.env.BASE_URL, {
  path: "/ws",
});
