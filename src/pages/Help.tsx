import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useApp } from "@/context/AppContext";
import { useNavigate } from "react-router-dom";
import { Phone, Mail, MessageCircle, FileText, ArrowLeft } from "lucide-react";
import ChatWidget from "@/components/ChatWidget";

const Help = () => {
  const { language } = useApp();
  const navigate = useNavigate();

  const content = {
    en: {
      title: "Help & Support",
      subtitle: "We're here to help you with TN Thittam",
      contact: "Contact Information",
      phone: "Helpline Number",
      email: "Email Support",
      chat: "Live Chat",
      faq: "Frequently Asked Questions",
      faqItems: [
        {
          question: "How do I check my eligibility for schemes?",
          answer: "Complete your profile details and our system will automatically recommend eligible schemes for you."
        },
        {
          question: "What documents do I need?",
          answer: "Document requirements vary by scheme. Check the specific scheme details for required documents."
        },
        {
          question: "How long does application processing take?",
          answer: "Processing times vary by scheme, typically 15-30 days. You'll receive updates via SMS/email."
        },
        {
          question: "Can I apply for multiple schemes?",
          answer: "Yes, you can apply for multiple schemes if you meet their eligibility criteria."
        }
      ],
      backToHome: "Back to Home"
    },
    ta: {
      title: "உதவி மற்றும் ஆதரவு",
      subtitle: "TN திட்டத்தில் நாங்கள் உங்களுக்கு உதவ இருக்கிறோம்",
      contact: "தொடர்பு தகவல்",
      phone: "உதவி எண்",
      email: "மின்னஞ்சல் ஆதரவு",
      chat: "நேரடி அரட்டை",
      faq: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
      faqItems: [
        {
          question: "திட்டங்களுக்கான எனது தகுதியை எவ்வாறு சரிபார்ப்பது?",
          answer: "உங்கள் சுயவிவர விவரங்களை முடித்தால், எங்கள் அமைப்பு தானாகவே உங்களுக்கு தகுதியான திட்டங்களை பரிந்துரைக்கும்."
        },
        {
          question: "எனக்கு என்ன ஆவணங்கள் தேவை?",
          answer: "ஆவண தேவைகள் திட்டத்தின் அடிப்படையில் மாறுபடும். தேவையான ஆவணங்களுக்கு குறிப்பிட்ட திட்ட விவரங்களைச் சரிபார்க்கவும்."
        },
        {
          question: "விண்ணப்ப செயலாக்கம் எவ்வளவு நேரம் எடுக்கும்?",
          answer: "செயலாக்க நேரம் திட்டத்தின் அடிப்படையில் மாறுபடும், பொதுவாக 15-30 நாட்கள். SMS/மின்னஞ்சல் வழியாக புதுப்பிப்புகளைப் பெறுவீர்கள்."
        },
        {
          question: "நான் பல திட்டங்களுக்கு விண்ணப்பிக்க முடியுமா?",
          answer: "ஆம், அவற்றின் தகுதி நிபந்தனைகளை நீங்கள் பூர்த்தி செய்தால் பல திட்டங்களுக்கு விண்ணப்பிக்கலாம்."
        }
      ],
      backToHome: "முகப்புக்கு திரும்பு"
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center gap-4 mb-6">
          <Button 
            variant="outline" 
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.backToHome}
          </Button>
        </div>

        <Card className="border-2 border-primary/20 shadow-lg">
          <CardHeader className="text-center bg-gradient-to-r from-primary/10 to-primary/5">
            <CardTitle className="text-3xl font-bold text-primary">{t.title}</CardTitle>
            <p className="text-muted-foreground">{t.subtitle}</p>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" />
              {t.contact}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                <Phone className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-medium">{t.phone}</p>
                  <p className="text-sm text-muted-foreground">1800-425-2001</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-medium">{t.email}</p>
                  <p className="text-sm text-muted-foreground">support@tnthittam.gov.in</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                <MessageCircle className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-medium">{t.chat}</p>
                  <p className="text-sm text-muted-foreground">Click the chat icon below</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              {t.faq}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {t.faqItems.map((item, index) => (
              <div key={index} className="border border-border rounded-lg p-4 space-y-2">
                <h3 className="font-medium text-primary">{item.question}</h3>
                <p className="text-sm text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
      <ChatWidget />
    </div>
  );
};

export default Help;