import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useApp } from "@/context/AppContext";
import { schemes } from "@/data/schemes";

const headings = {
  en: {
    title: "Recommended schemes",
    change: "Edit details",
    details: "View details",
    noMatch: "No exact matches found. Explore these statewide programs:",
  },
  ta: {
    title: "உங்களுக்கு பரிந்துரைக்கப்படும் திட்டங்கள்",
    change: "விவரங்களை திருத்தவும்",
    details: "விவரங்கள்",
    noMatch: "உரிய பொருத்தங்கள் இல்லை. இத்திட்டங்களைப் பாருங்கள்:",
  },
};

const Recommendations = () => {
  const { language, profile } = useApp();
  const navigate = useNavigate();
  const t = headings[language];

  useEffect(() => {
    document.title =
      language === "ta" ? "TN திட்டம் – பரிந்துரைகள்" : "TN Thittam – Recommendations";
  }, [language]);

  const eligible = useMemo(
    () => schemes.filter((s) => s.rule(profile)),
    [profile]
  );

  const others = useMemo(
    () => schemes.filter((s) => !s.rule(profile)),
    [profile]
  );

  useEffect(() => {
    if (!Object.keys(profile).length) navigate("/details");
  }, [profile, navigate]);

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold">{t.title}</h1>
          <Button variant="secondary" onClick={() => navigate("/details")}>
            {t.change}
          </Button>
        </div>

        {/* Eligible schemes */}
        <div className="grid md:grid-cols-2 gap-6">
          {eligible.map((s) => (
            <Card key={s.id} className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">
                    {language === "ta" ? s.name.ta : s.name.en}
                  </CardTitle>
                  <Badge>{s.category}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  {language === "ta" ? s.summary.ta : s.summary.en}
                </p>
                <div>
                  <p className="font-medium">Eligibility</p>
                  <p className="text-sm text-muted-foreground">
                    {language === "ta" ? s.eligibilityNotes.ta : s.eligibilityNotes.en}
                  </p>
                </div>
                <div>
                  <p className="font-medium">Documents</p>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground">
                    {s.documents.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-medium">How to apply</p>
                  <p className="text-sm text-muted-foreground">
                    {language === "ta" ? s.apply.ta : s.apply.en}
                  </p>
                </div>
                {s.officialUrl && (
                  <a
                    href={s.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                    aria-label={
                      (language === "ta" ? s.name.ta : s.name.en) + " official link"
                    }
                  >
                    <Button variant="outline">{t.details}</Button>
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Fallback / other programs */}
        {eligible.length === 0 && (
          <p className="text-muted-foreground">{t.noMatch}</p>
        )}
        <div className="grid md:grid-cols-2 gap-6">
          {others
            .filter((s) => s.id === "green-tn" || s.id === "simplegov" || s.id === "kudimaramathu")
            .map((s) => (
              <Card key={s.id} className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">
                      {language === "ta" ? s.name.ta : s.name.en}
                    </CardTitle>
                    <Badge>{s.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    {language === "ta" ? s.summary.ta : s.summary.en}
                  </p>
                  {s.officialUrl && (
                    <a
                      href={s.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <Button variant="outline">{t.details}</Button>
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </main>
  );
};

export default Recommendations;
