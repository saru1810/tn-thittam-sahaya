import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send } from "lucide-react";
import { useApp } from "@/context/AppContext";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const ChatWidget = () => {
  const { language } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");

  const content = {
    en: {
      title: "Live Chat Support",
      placeholder: "Type your message...",
      send: "Send",
      greeting: "Hello! How can I help you with TN Thittam schemes today?",
      defaultResponses: [
        "Thank you for your question. Our support team will assist you shortly.",
        "For immediate assistance, please call our helpline at 1800-425-2001.",
        "You can also visit the FAQ section for common questions and answers."
      ]
    },
    ta: {
      title: "நேரடி அரட்டை ஆதரவு",
      placeholder: "உங்கள் செய்தியை தட்டச்சு செய்யுங்கள்...",
      send: "அனுப்பு",
      greeting: "வணக்கம்! TN திட்ட திட்டங்களில் இன்று நான் உங்களுக்கு எவ்வாறு உதவ முடியும்?",
      defaultResponses: [
        "உங்கள் கேள்விக்கு நன்றி. எங்கள் ஆதரவு குழு விரைவில் உங்களுக்கு உதவும்.",
        "உடனடி உதவிக்காக, எங்கள் உதவி எண் 1800-425-2001 ஐ அழைக்கவும்.",
        "பொதுவான கேள்விகள் மற்றும் பதில்களுக்கு FAQ பிரிவையும் பார்க்கலாம்."
      ]
    }
  };

  const t = content[language];

  const sendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: t.defaultResponses[Math.floor(Math.random() * t.defaultResponses.length)],
        sender: "bot",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const initializeChat = () => {
    if (messages.length === 0) {
      const greetingMessage: Message = {
        id: "greeting",
        text: t.greeting,
        sender: "bot",
        timestamp: new Date()
      };
      setMessages([greetingMessage]);
    }
    setIsOpen(true);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={initializeChat}
        className="fixed bottom-6 right-6 h-12 w-12 rounded-full shadow-lg z-50"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Chat Widget */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 h-96 shadow-xl z-50 flex flex-col">
          <CardHeader className="flex flex-row items-center justify-between p-4 bg-primary text-primary-foreground">
            <CardTitle className="text-sm">{t.title}</CardTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-6 w-6 text-primary-foreground hover:bg-primary-foreground/20"
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          
          <CardContent className="flex-1 flex flex-col p-0">
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs p-2 rounded-lg text-sm ${
                      message.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder={t.placeholder}
                  onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                  className="flex-1"
                />
                <Button onClick={sendMessage} size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ChatWidget;