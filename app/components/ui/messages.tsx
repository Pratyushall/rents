import { useEffect, useState } from "react";

const Messages = ({ token, receiverId }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const fetchMessages = async () => {
    try {
      const res = await fetch(`/api/messages/${receiverId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setMessages(data);
    } catch (err) {
      console.error("Failed to fetch messages:", err);
    }
  };

  const sendMessage = async () => {
    if (!message.trim()) return;

    try {
      await fetch("/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ receiver_id: receiverId, message }),
      });

      setMessage("");
      fetchMessages(); // refresh messages
    } catch (err) {
      console.error("Failed to send message:", err);
    }
  };

  useEffect(() => {
    if (receiverId && token) {
      fetchMessages();
    }
  }, [receiverId]);

  return (
    <div className="p-4 bg-white rounded shadow max-w-xl mx-auto mt-6">
      <h2 className="text-xl font-semibold mb-2">Messages</h2>
      <div className="max-h-64 overflow-y-auto border p-2 mb-4">
        {messages.length === 0 ? (
          <p className="text-gray-500">No messages yet</p>
        ) : (
          messages.map((msg, idx) => (
            <div key={idx} className="mb-2">
              <span className="font-bold">{msg.senderName || "User"}:</span>{" "}
              {msg.message}
            </div>
          ))
        )}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          className="flex-1 border rounded px-3 py-2"
        />
        <button
          onClick={sendMessage}
          className="bg-purple-600 text-white px-4 py-2 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Messages;
