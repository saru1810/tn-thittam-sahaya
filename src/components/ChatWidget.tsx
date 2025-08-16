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
      className="fixed bottom-6 right-6 h-12 w-12 rounded-full shadow-lg z-50"
      size="icon"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
};

export default ChatWidget;