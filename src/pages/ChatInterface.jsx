import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Card } from '@mui/material';
import { Button } from '@mui/material';
import { Input } from '@mui/material';

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I help you today?", sender: "bot" },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      setMessages([
        ...messages,
        { id: messages.length + 1, text: inputMessage, sender: "user" }
      ]);
      setInputMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="flex items-center justify-center bg-blue-400 h-screen rounded-xl">
        <div className=' w-[50%] h-[80%]'>
        <div className="text-center text-2xl font-semibold my-4 text-white">Chat-Space</div>
      <Card className="bg-white shadow-xl">
        {/* Chat Messages Area */}
        <div className="h-96 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[70%] rounded-lg px-4 py-2 ${
                  message.sender === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="border-t p-4 flex gap-2 bg-blue-200">
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1"
          />
          <div className="rounded-lg">
            <Button
              onClick={handleSendMessage}
              className="bg-blue-500 hover:bg-black"
              >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Card>
      </div>
    </div>
  );
};

export default ChatInterface;