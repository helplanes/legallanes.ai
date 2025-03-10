"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Sidebar from "@/components/ui/sidebar";

export default function Home() {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState<string[]>([]);

  const sendMessage = () => {
    if (!message.trim()) return;
    setChats([...chats, message]);
    setMessage("");
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center md:block hidden">
          <h1 className="text-xl font-bold">LegalLanes.AI</h1>
        </nav>

        {/* Chat Container */}
        <div className="flex flex-1 overflow-auto p-4">
          <Card className="w-full max-w-3xl mx-auto p-4 bg-white shadow-lg">
            <div className="space-y-4">
              {chats.map((chat, index) => (
                <div key={index} className="bg-gray-100 p-3 rounded-lg">
                  {chat}
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-white border-t flex items-center">
          <Input
            className="flex-1"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button className="ml-2" onClick={sendMessage}>
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}
