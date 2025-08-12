import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { schemes } from "@/data/schemes";

const SchemeDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const { language } = useApp();
  const [activeTab, setActiveTab] = useState(searchParams.get("tab") || "eligibility");

  const scheme = schemes.find(s => s.id === id);

  useEffect(() => {
    if (!scheme) navigate("/recommendations");
  }, [scheme, navigate]);

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab) setActiveTab(tab);
  }, [searchParams]);

  useEffect(() => {
    if (scheme) {
      document.title = language === "ta" 
        ? `TN திட்டம் – ${scheme.name.ta}` 
        : `TN Thittam – ${scheme.name.en}`;
    }
  }, [language, scheme]);

  if (!scheme) return null;

  const labels = {
    en: {
      eligibility: "Eligibility Details",
      application: "How to Apply",
      backToRecommendations: "Back to Recommendations",
      viewOfficial: "View Official Page",
      requiredDocuments: "Required Documents",
      eligibilityTab: "Eligibility",
      applicationTab: "Application"
    },
    ta: {
      eligibility: "தகுதி விவரங்கள்",
      application: "விண்ணப்பிக்கும் முறை",
      backToRecommendations: "பரிந்துரைகளுக்கு திரும்பு",
      viewOfficial: "அதிகாரப்பூர்வ பக்கம்",
      requiredDocuments: "தேவையான ஆவணங்கள்",
      eligibilityTab: "தகுதி",
      applicationTab: "விண்ணப்பம்"
    }
  };

  const t = labels[language];

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto p-6">
        <div className="mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/recommendations")}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t.backToRecommendations}
          </Button>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">
                {language === "ta" ? scheme.name.ta : scheme.name.en}
              </CardTitle>
              <Badge>{scheme.category}</Badge>
            </div>
            <p className="text-muted-foreground">
              {language === "ta" ? scheme.summary.ta : scheme.summary.en}
            </p>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 mb-6">
              <Button
                variant={activeTab === "eligibility" ? "default" : "outline"}
                onClick={() => setActiveTab("eligibility")}
              >
                {t.eligibilityTab}
              </Button>
              <Button
                variant={activeTab === "application" ? "default" : "outline"}
                onClick={() => setActiveTab("application")}
              >
                {t.applicationTab}
              </Button>
            </div>

            {activeTab === "eligibility" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">{t.eligibility}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {language === "ta" ? scheme.eligibilityNotes.ta : scheme.eligibilityNotes.en}
                  </p>
                </div>

                <div>
                  <h4 className="font-medium mb-3">{t.requiredDocuments}</h4>
                  <ul className="space-y-2">
                    {scheme.documents.map((doc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "application" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">{t.application}</h3>
                  <div className="prose prose-sm max-w-none">
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {language === "ta" ? scheme.apply.ta : scheme.apply.en}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {scheme.officialUrl && (
              <div className="mt-8 pt-6 border-t">
                <a
                  href={scheme.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button variant="outline">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {t.viewOfficial}
                  </Button>
                </a>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default SchemeDetails;