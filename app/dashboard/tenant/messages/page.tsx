"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import DashboardLayout from "../../../components/layout/dashboard-layout";
import { Send, Paperclip } from "lucide-react";

export default function TenantMessages() {
  const [selectedChat, setSelectedChat] = useState(0);
  const [newMessage, setNewMessage] = useState("");

  const chats = [
    {
      id: 1,
      name: "John Smith (Landlord)",
      lastMessage: "I'll send someone to check the heating tomorrow",
      time: "2 hours ago",
      unread: 2,
      avatar: "JS",
    },
    {
      id: 2,
      name: "Property Manager",
      lastMessage: "Your lease renewal documents are ready",
      time: "1 day ago",
      unread: 0,
      avatar: "PM",
    },
    {
      id: 3,
      name: "Maintenance Team",
      lastMessage: "Work completed successfully",
      time: "3 days ago",
      unread: 0,
      avatar: "MT",
    },
  ];

  const messages = [
    {
      id: 1,
      sender: "me",
      content:
        "Hi, the heating system in my apartment seems to be making strange noises. Could you please check it?",
      time: "10:30 AM",
    },
    {
      id: 2,
      sender: "John Smith",
      content:
        "Hello! Thank you for letting me know. I'll arrange for a technician to come and inspect the heating system.",
      time: "11:15 AM",
    },
    {
      id: 3,
      sender: "John Smith",
      content:
        "I'll send someone to check the heating tomorrow between 2-4 PM. Will you be available?",
      time: "11:16 AM",
    },
    {
      id: 4,
      sender: "me",
      content:
        "Yes, I'll be home during that time. Thank you for the quick response!",
      time: "11:45 AM",
    },
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Handle sending message
      console.log("Sending message:", newMessage);
      setNewMessage("");
    }
  };

  return (
    <DashboardLayout role="tenant">
      <div className="h-[calc(100vh-8rem)]">
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Messages</CardTitle>
            <CardDescription>
              Communicate with landlords and property managers
            </CardDescription>
          </CardHeader>
          <CardContent className="h-full p-0">
            <div className="flex h-full">
              {/* Chat List */}
              <div className="w-1/3 border-r border-gray-200">
                <div className="p-4 border-b border-gray-200">
                  <Input
                    placeholder="Search conversations..."
                    className="w-full"
                  />
                </div>
                <div className="overflow-y-auto">
                  {chats.map((chat, index) => (
                    <div
                      key={chat.id}
                      onClick={() => setSelectedChat(index)}
                      className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
                        selectedChat === index
                          ? "bg-primary/5 border-l-4 border-l-primary"
                          : ""
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                          {chat.avatar}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="font-bold text-sm truncate">
                              {chat.name}
                            </p>
                            {chat.unread > 0 && (
                              <span className="bg-primary text-white text-xs rounded-full px-2 py-1 font-bold">
                                {chat.unread}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 truncate">
                            {chat.lastMessage}
                          </p>
                          <p className="text-xs text-gray-500">{chat.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 flex flex-col">
                {/* Chat Header */}
                <div className="p-4 border-b border-gray-200 bg-white">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {chats[selectedChat]?.avatar}
                    </div>
                    <div>
                      <p className="font-bold">{chats[selectedChat]?.name}</p>
                      <p className="text-sm text-green-600">Online</p>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.sender === "me"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          message.sender === "me"
                            ? "bg-primary text-white"
                            : "bg-gray-100 text-gray-900"
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p
                          className={`text-xs mt-1 ${
                            message.sender === "me"
                              ? "text-primary-100"
                              : "text-gray-500"
                          }`}
                        >
                          {message.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="p-4 border-t border-gray-200 bg-white">
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="icon">
                      <Paperclip className="w-4 h-4" />
                    </Button>
                    <Input
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1"
                      onKeyPress={(e) =>
                        e.key === "Enter" && handleSendMessage()
                      }
                    />
                    <Button
                      onClick={handleSendMessage}
                      className="bg-primary hover:bg-primary/90"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
