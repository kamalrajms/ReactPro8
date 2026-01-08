import React, { useState } from "react";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [dealy, setDelay] = useState(5);
  const [isSending, setIsSeding] = useState(false);
  const [timerId, setTimerID] = useState(null);
  const [sentMessage, setSendMessage] = useState("");

  const handleSend = () => {
    setIsSeding(true);
    const id = setTimeout(() => {
      setSendMessage(message);
      setMessage("");
      setIsSeding(false);
    }, dealy * 1000);

    setTimerID(id);
  };

  const handleCancel = () => {
    if (timerId) clearTimeout(timerId);
    setIsSeding(false);
  };
  return (
    <div className="chat">
      <div className="chat-app">
        <h2>DM message Delay buttom</h2>
        <textarea
          name=""
          id=""
          placeholder="enter message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <input
          type="number"
          value={dealy}
          onChange={(e) => setDelay(e.target.value)}
        />
        {!isSending ? (
          <button onClick={handleSend}>Send with delay</button>
        ) : (
          <button onClick={handleCancel}>Cancel sending</button>
        )}

        {sentMessage && (
          <div>
            <h2>received message</h2>
            <h3>{sentMessage}</h3>
          </div>
        )}
      </div>
    </div>
  );
}
