"use client";
import { useEffect, useState } from "react";
import { ws } from "./lib/ws";

function Home() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  useEffect(() => {
    ws.connect();
    ws.on("connect", () => {
      console.log("connected");
    });
    ws.on("message", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => {
      ws.close();
    };
  }, []);
  return (
    <div>
      <div className="text-4xl shadow-lg p-4 mb-4">Chat</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          ws.send(input);
        }}
        className="p-4"
      >
        <div className="text-xl">Messages:</div>
        <input
          type="text"
          onChange={handleInputChange}
          className="border-4 rounded-lg p-2 w-full mb-2"
        />
        <input type="submit" hidden />
        <button
          type="submit"
          className="bg-blue-400 rounded-xl p-2 mb-4 hover:bg-blue-500 w-20"
        >
          Send
        </button>
      </form>
      <div className="p-4">
        <div>
          <div className="text-xl">Messages:</div>
        </div>
        <ul>
          {messages.map((message, index) => (
            <li key={index} className="underline underline-offset-2">
              {index + 1 + ". " + message}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
