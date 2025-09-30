import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ChatWidget = () => {
  const navigate = useNavigate();

  const openChat = () => {
    navigate('/chat');
  };

  return (
    <Button
      onClick={openChat}
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-floating bg-gradient-primary hover:opacity-90 z-50 transition-all duration-300 hover:scale-105"
      size="icon"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
};

export default ChatWidget;