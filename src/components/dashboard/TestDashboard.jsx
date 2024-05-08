import React, { useEffect, useState } from "react";

// Custom hook for WebSocket connection
const useWebSocket = (url) => {
  const [ws, setWs] = useState(null);
  const [content, setMessage] = useState("");

  useEffect(() => {
    const websocket = new WebSocket(url);

    websocket.onopen = () => {
      console.log("WebSocket connection opened");
    };

    websocket.onmessage = (e) => {
      console.log("Received message:", e.data);
      setMessage(e.data);
    };

    websocket.onerror = (e) => {
      console.log("WebSocket error:", e);
    };

    websocket.onclose = (e) => {
      console.log("WebSocket connection closed:", e.code, e.reason);
    };

    setWs(websocket);

    return () => {
      websocket.close();
    };
  }, [url]);

  // Function to send data through the WebSocket connection
  const sendData = (data) => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      console.log("Data send:", data);
      ws.send(data);
    } else {
      console.log("WebSocket connection not established");
    }
  };

  return [content, sendData];
};

export default function App() {
  const [sender, setInput1] = useState("");
  const [receiver, setInput2] = useState("");
  const [content, sendMessage] = useWebSocket("ws://192.168.1.55:8085/ws");

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <div style={{ marginBottom: 20 }}>
        <h3 style={{ textAlign: "center" }}>Client 1</h3>
        <textarea
          style={{
            padding: 8,
            margin: 4,
            width: "60%",
            height: 100,
            borderWidth: 1,
            borderColor: "gray",
            borderRadius: 5,
          }}
          placeholder="Type here..."
          onChange={(e) => setInput1(e.target.value)}
          value={sender}
        />
        <button onClick={() => sendMessage(sender)}>Send</button>
        <p>Received Message: {content}</p>
      </div>
      <div>
        <h3 style={{ textAlign: "center" }}>Client 2</h3>
        <textarea
          style={{
            padding: 8,
            marginb: 4,
            width: "60%",
            height: 100,
            borderWidth: 1,
            borderColor: "gray",
            borderRadius: 5,
          }}
          placeholder="Type here..."
          onChange={(e) => setInput2(e.target.value)}
          value={receiver}
        />
        <button onClick={() => sendMessage(receiver)}>Send</button>
        <p>Received Message: {content}</p>
      </div>
    </div>
  );
}
