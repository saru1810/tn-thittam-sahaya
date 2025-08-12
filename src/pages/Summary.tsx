import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useApp } from "@/context/AppContext";

const labels = {
  en: {
    title: "Summary of Your Details",
    name: "Name",
    age: "Age",
    gender: "Gender",
    male: "Male",
    female: "Female", 
    other: "Other",
    resident: "Tamil Nadu Resident",
    income: "Annual Income",
    landWet: "Wet Land",
    landDry: "Dry Land",
    govtEmp: "Government Employee",
    taxPayer: "Tax Payer",
    womanHead: "Woman Head of Family",
    student: "Student",
    schoolType: "School Type",
    higherEd: "Higher Education",
    disability: "Disability",
    transgender: "Transgender",
    yes: "Yes",
    no: "No",
    govt: "Government",
    aided: "Government Aided",
    private: "Private",
    continue: "Get Recommendations",
    edit: "Edit Details",
    acres: "acres",
    percent: "%"
  },
  ta: {
    title: "உங்கள் விவரங்களின் சுருக்கம்",
    name: "பெயர்",
    age: "வயது",
    gender: "பாலினம்",
    male: "ஆண்",
    female: "பெண்",
    other: "மற்றவை",
    resident: "தமிழ்நாடு வதிவாளர்",
    income: "ஆண்டு வருமானம்",
    landWet: "நன்நிலம்",
    landDry: "பஞ்சநிலம்",
    govtEmp: "அரசு ஊழியர்",
    taxPayer: "வரி செலுத்துபவர்",
    womanHead: "குடும்பத் தலைவி",
    student: "மாணவர்/மாணவி",
    schoolType: "பள்ளி வகை",
    higherEd: "உயர்கல்வி",
    disability: "மாற்றுத் திறன்",
    transgender: "திருநங்கை",
    yes: "ஆம்",
    no: "இல்லை",
    govt: "அரசு",
    aided: "அரசு உதவி",
    private: "தனியார்",
    continue: "பரிந்துரைகள் பெற",
    edit: "விவரங்களை திருத்து",
    acres: "ஏக்கர்",
    percent: "%"
  }
};

const Summary = () => {
  const navigate = useNavigate();
  const { language, profile } = useApp();
  const t = labels[language];

  useEffect(() => {
    document.title = language === "ta" ? "TN திட்டம் – சுருக்கம்" : "TN Thittam – Summary";
  }, [language]);

  useEffect(() => {
    if (!Object.keys(profile).length) navigate("/details");
  }, [profile, navigate]);

  const getGenderText = () => {
    if (profile.gender === "male") return t.male;
    if (profile.gender === "female") return t.female;
    return t.other;
  };

  const getSchoolTypeText = () => {
    if (profile.schoolType === "government") return t.govt;
    if (profile.schoolType === "government_aided") return t.aided;
    if (profile.schoolType === "private") return t.private;
    return "—";
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto p-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{t.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {profile.name && (
                <div>
                  <p className="font-medium text-muted-foreground">{t.name}</p>
                  <p className="text-lg">{profile.name}</p>
                </div>
              )}

              {profile.age && (
                <div>
                  <p className="font-medium text-muted-foreground">{t.age}</p>
                  <p className="text-lg">{profile.age}</p>
                </div>
              )}

              {profile.gender && (
                <div>
                  <p className="font-medium text-muted-foreground">{t.gender}</p>
                  <p className="text-lg">{getGenderText()}</p>
                </div>
              )}

              <div>
                <p className="font-medium text-muted-foreground">{t.resident}</p>
                <Badge variant={profile.isTNResident ? "default" : "secondary"}>
                  {profile.isTNResident ? t.yes : t.no}
                </Badge>
              </div>

              {profile.annualIncome && (
                <div>
                  <p className="font-medium text-muted-foreground">{t.income}</p>
                  <p className="text-lg">₹{profile.annualIncome?.toLocaleString()}</p>
                </div>
              )}

              {(profile.landWetAcres || profile.landDryAcres) && (
                <>
                  <div>
                    <p className="font-medium text-muted-foreground">{t.landWet}</p>
                    <p className="text-lg">{profile.landWetAcres || 0} {t.acres}</p>
                  </div>
                  <div>
                    <p className="font-medium text-muted-foreground">{t.landDry}</p>
                    <p className="text-lg">{profile.landDryAcres || 0} {t.acres}</p>
                  </div>
                </>
              )}

              <div>
                <p className="font-medium text-muted-foreground">{t.govtEmp}</p>
                <Badge variant={profile.isGovtEmployee ? "default" : "secondary"}>
                  {profile.isGovtEmployee ? t.yes : t.no}
                </Badge>
              </div>

              <div>
                <p className="font-medium text-muted-foreground">{t.taxPayer}</p>
                <Badge variant={profile.isTaxPayer ? "default" : "secondary"}>
                  {profile.isTaxPayer ? t.yes : t.no}
                </Badge>
              </div>

              <div>
                <p className="font-medium text-muted-foreground">{t.womanHead}</p>
                <Badge variant={profile.isWomanHead ? "default" : "secondary"}>
                  {profile.isWomanHead ? t.yes : t.no}
                </Badge>
              </div>

              <div>
                <p className="font-medium text-muted-foreground">{t.student}</p>
                <Badge variant={profile.isStudent ? "default" : "secondary"}>
                  {profile.isStudent ? t.yes : t.no}
                </Badge>
              </div>

              {profile.isStudent && profile.schoolType && (
                <div>
                  <p className="font-medium text-muted-foreground">{t.schoolType}</p>
                  <p className="text-lg">{getSchoolTypeText()}</p>
                </div>
              )}

              <div>
                <p className="font-medium text-muted-foreground">{t.higherEd}</p>
                <Badge variant={profile.higherEdEnrolled ? "default" : "secondary"}>
                  {profile.higherEdEnrolled ? t.yes : t.no}
                </Badge>
              </div>

              {profile.disabilityPercent && profile.disabilityPercent > 0 && (
                <div>
                  <p className="font-medium text-muted-foreground">{t.disability}</p>
                  <p className="text-lg">{profile.disabilityPercent}{t.percent}</p>
                </div>
              )}

            </div>

            <div className="mt-8 flex gap-4 justify-end">
              <Button variant="outline" onClick={() => navigate("/details")}>
                {t.edit}
              </Button>
              <Button onClick={() => navigate("/recommendations")}>
                {t.continue}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Summary;