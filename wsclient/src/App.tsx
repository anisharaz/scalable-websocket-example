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
      <h1>Chat</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          ws.send(input);
        }}
      >
        Messages: <input type="text" onChange={handleInputChange} />
        <input type="submit" hidden />
        <button type="submit">Send</button>
      </form>
      <ul
        style={{
          border: "1px solid black",
        }}
      >
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
