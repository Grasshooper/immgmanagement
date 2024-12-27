"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";

const messages = [
  {
    id: "1",
    sender: "John Smith",
    avatar: "/avatars/john-smith.jpg",
    content: "Your work visa application has been reviewed. We need additional documentation.",
    timestamp: new Date(2024, 2, 15),
    isUnread: true,
  },
  {
    id: "2",
    sender: "Sarah Wilson",
    avatar: "/avatars/sarah-wilson.jpg",
    content: "Schedule confirmed for your consultation next week.",
    timestamp: new Date(2024, 2, 14),
    isUnread: false,
  },
];

export function MessageList() {
  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <Card key={message.id} className={message.isUnread ? "bg-primary/5" : ""}>
          <CardContent className="flex items-start space-x-4 p-4">
            <Avatar>
              <AvatarImage src={message.avatar} alt={message.sender} />
              <AvatarFallback>{message.sender[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <p className="font-semibold">{message.sender}</p>
                <span className="text-sm text-muted-foreground">
                  {formatDistanceToNow(message.timestamp, { addSuffix: true })}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{message.content}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}