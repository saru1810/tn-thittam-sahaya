import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useApp } from "@/context/AppContext";

const Language = () => {
  const navigate = useNavigate();
  const { setLanguage } = useApp();

  useEffect(() => {
    document.title = "TN Thittam – Choose Language";
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle asChild>
            <h1 className="text-2xl">Select your language / உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்</h1>
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Button
            aria-label="Choose English language"
            onClick={() => {
              setLanguage("en");
              navigate("/details");
            }}
          >
            English
          </Button>
          <Button
            variant="secondary"
            aria-label="தமிழ் மொழியைத் தேர்ந்தெடுக்கவும்"
            onClick={() => {
              setLanguage("ta");
              navigate("/details");
            }}
          >
            தமிழ்
          </Button>
        </CardContent>
      </Card>
    </main>
  );
};

export default Language;
