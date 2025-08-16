import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Send } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { useNavigate } from "react-router-dom";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const Chat = () => {
  const { language } = useApp();
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [initialized, setInitialized] = useState(false);

  const content = {
    en: {
      title: "Live Chat Support",
      placeholder: "Type your message...",
      send: "Send",
      greeting: "Hello! How can I help you with TN Thittam schemes today?",
      back: "Back"
    },
    ta: {
      title: "நேரடி அரட்டை ஆதரவு",
      placeholder: "உங்கள் செய்தியை தட்டச்சு செய்யுங்கள்...",
      send: "அனுப்பு",
      greeting: "வணக்கம்! TN திட்ட திட்டங்களில் இன்று நான் உங்களுக்கு எவ்வாறு உதவ முடியும்?",
      back: "திரும்பு"
    }
  };

  const t = content[language];

  const generateBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    // Scheme-related questions
    if (input.includes('scheme') || input.includes('திட்ட')) {
      if (input.includes('eligible') || input.includes('qualify') || input.includes('தகுதி')) {
        return language === 'en' 
          ? "Eligibility depends on factors like age, income, caste, and education. You can check specific scheme requirements on our recommendations page after filling your details."
          : "தகுதி வயது, வருமானம், சாதி மற்றும் கல்வி போன்ற காரணிகளைப் பொறுத்தது. உங்கள் விவரங்களை நிரப்பிய பின் எங்கள் பரிந்துரைகள் பக்கத்தில் குறிப்பிட்ட திட்ட தேவைகளைச் சரிபார்க்கலாம்.";
      }
      if (input.includes('apply') || input.includes('application') || input.includes('விண்ணப்ப')) {
        return language === 'en'
          ? "To apply for schemes: 1) Fill your personal details 2) Check recommendations 3) Click 'How to Apply' for step-by-step instructions 4) Visit the official portal through 'View Details'"
          : "திட்டங்களுக்கு விண்ணப்பிக்க: 1) உங்கள் தனிப்பட்ட விவரங்களை நிரப்பவும் 2) பரிந்துரைகளைச் சரிபார்க்கவும் 3) படிப்படியான வழிமுறைகளுக்கு 'எவ்வாறு விண்ணப்பிப்பது' என்பதைக் கிளிக் செய்யவும் 4) 'விவரங்களைப் பார்க்கவும்' மூலம் அதிகாரப்பூர்வ போர்ட்டலைப் பார்வையிடவும்";
      }
      if (input.includes('document') || input.includes('ஆவண')) {
        return language === 'en'
          ? "Common documents needed: Aadhaar card, income certificate, caste certificate, educational certificates, bank passbook, and recent photographs. Specific requirements vary by scheme."
          : "தேவையான பொதுவான ஆவணங்கள்: ஆதார் அட்டை, வருமான சான்றிதழ், சாதி சான்றிதழ், கல்வி சான்றிதழ்கள், வங்கி வங்கி பாஸ்புக் மற்றும் சமீபத்திய புகைப்படங்கள். திட்டத்தின் அடிப்படையில் குறிப்பிட்ட தேவைகள் மாறுபடும்.";
      }
      return language === 'en'
        ? "TN Thittam offers various government schemes for education, healthcare, agriculture, and welfare. Use our portal to find schemes you're eligible for!"
        : "TN திட்டம் கல்வி, சுகாதாரம், விவசாயம் மற்றும் நலன்புரிக்கான பல்வேறு அரசு திட்டங்களை வழங்குகிறது. நீங்கள் தகுதியுள்ள திட்டங்களைக் கண்டறிய எங்கள் போர்ட்டலைப் பயன்படுத்தவும்!";
    }

    // Age-related questions
    if (input.includes('age') || input.includes('வயது')) {
      return language === 'en'
        ? "Age is a key eligibility factor. Different schemes have different age requirements - some for youth (18-35), others for seniors (60+), and some for children."
        : "வயது ஒரு முக்கிய தகுதி காரணி. வெவ்வேறு திட்டங்களுக்கு வெவ்வேறு வயது தேவைகள் உள்ளன - சில இளைஞர்களுக்கு (18-35), மற்றவை முதியவர்களுக்கு (60+), மற்றும் சில குழந்தைகளுக்கு.";
    }

    // Income-related questions
    if (input.includes('income') || input.includes('salary') || input.includes('வருமான')) {
      return language === 'en'
        ? "Income limits vary by scheme. Many schemes are for families below poverty line or with annual income under ₹2-3 lakhs. Check specific scheme requirements."
        : "வருமான வரம்புகள் திட்டத்தின் அடிப்படையில் மாறுபடும். பல திட்டங்கள் வறுமைக் கோட்டிற்கு கீழே உள்ள குடும்பங்களுக்கு அல்லது ஆண்டு வருமானம் ₹2-3 லட்சத்திற்கு கீழ் உள்ளவர்களுக்கு. குறிப்பிட்ட திட்ட தேவைகளைச் சரிபார்க்கவும்.";
    }

    // Education-related questions
    if (input.includes('education') || input.includes('study') || input.includes('scholarship') || input.includes('கல்வி')) {
      return language === 'en'
        ? "Educational schemes include scholarships, fee waivers, free books, uniforms, and hostel facilities. Available from primary school to higher education levels."
        : "கல்வி திட்டங்களில் உதவித்தொகை, கட்டண விலக்கு, இலவச புத்தகங்கள், சீருடைகள் மற்றும் விடுதி வசதிகள் உள்ளன. ஆரம்பப் பள்ளி முதல் உயர் கல்வி வரை கிடைக்கும்.";
    }

    // Status/tracking questions
    if (input.includes('status') || input.includes('track') || input.includes('நிலை')) {
      return language === 'en'
        ? "To track your application status, visit the official scheme portal using the 'View Details' button and use your application reference number."
        : "உங்கள் விண்ணப்ப நிலையைக் கண்காணிக்க, 'விவரங்களைப் பார்க்கவும்' பொத்தானைப் பயன்படுத்தி அதிகாரப்பூர்வ திட்ட போர்ட்டலைப் பார்வையிட்டு உங்கள் விண்ணப்ப குறிப்பு எண்ணைப் பயன்படுத்தவும்.";
    }

    // Contact/help questions
    if (input.includes('contact') || input.includes('help') || input.includes('support') || input.includes('தொடர்பு')) {
      return language === 'en'
        ? "For immediate assistance, call our helpline at 1800-425-2001. You can also visit your nearest District Collectorate or use the FAQ section."
        : "உடனடி உதவிக்காக, எங்கள் உதவி எண் 1800-425-2001 ஐ அழைக்கவும். உங்கள் அருகிலுள்ள மாவட்ட ஆட்சியர் அலுவலகத்தைப் பார்வையிடலாம் அல்லது FAQ பிரிவைப் பயன்படுத்தலாம்.";
    }

    // Greeting responses
    if (input.includes('hello') || input.includes('hi') || input.includes('வணக்கம்')) {
      return language === 'en'
        ? "Hello! I'm here to help you with TN government schemes. Ask me about eligibility, applications, documents, or any other questions!"
        : "வணக்கம்! TN அரசு திட்டங்களில் உங்களுக்கு உதவ நான் இங்கே இருக்கிறேன். தகுதி, விண்ணப்பங்கள், ஆவணங்கள் அல்லது வேறு ஏதேனும் கேள்விகளைக் கேட்கலாம்!";
    }

    // Default response for unrecognized queries
    return language === 'en'
      ? "I can help you with information about TN government schemes, eligibility criteria, application process, required documents, and more. What would you like to know?"
      : "TN அரசு திட்டங்கள், தகுதி நிபந்தனைகள், விண்ணப்ப செயல்முறை, தேவையான ஆவணங்கள் மற்றும் பலவற்றைப் பற்றிய தகவல்களில் நான் உங்களுக்கு உதவ முடியும். நீங்கள் என்ன தெரிந்து கொள்ள விரும்புகிறீர்கள்?";
  };

  const sendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const userInput = inputText;
    setInputText("");

    // Generate intelligent bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(userInput),
        sender: "bot",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  // Initialize chat with greeting message
  if (!initialized) {
    const greetingMessage: Message = {
      id: "greeting",
      text: t.greeting,
      sender: "bot",
      timestamp: new Date()
    };
    setMessages([greetingMessage]);
    setInitialized(true);
  }

  return (
    <div className="min-h-screen bg-background">
      <Card className="h-screen rounded-none flex flex-col">
        <CardHeader className="flex flex-row items-center justify-between p-4 bg-primary text-primary-foreground">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate(-1)}
              className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <CardTitle className="text-lg">{t.title}</CardTitle>
          </div>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col p-0">
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-muted text-muted-foreground rounded-bl-sm"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-4 border-t bg-background">
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
    </div>
  );
};

export default Chat;