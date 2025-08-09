import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useApp } from "@/context/AppContext";

const labels = {
  en: {
    title: "Tell us about you",
    age: "Age",
    gender: "Gender",
    male: "Male",
    female: "Female",
    other: "Other",
    resident: "Tamil Nadu resident",
    income: "Annual family income (₹)",
    wet: "Wet land (acres)",
    dry: "Dry land (acres)",
    govtEmp: "Government employee",
    taxPayer: "Income tax payer",
    womanHead: "Woman head of family",
    student: "Student",
    schoolType: "School type (if student)",
    govt: "Government",
    aided: "Government Aided",
    private: "Private",
    higherEd: "Enrolled in higher education",
    disability: "Disability percentage (%)",
    transgender: "Transgender",
    continue: "See recommendations",
  },
  ta: {
    title: "உங்களைப் பற்றி கூறுங்கள்",
    age: "வயது",
    gender: "பாலினம்",
    male: "ஆண்",
    female: "பெண்",
    other: "மற்றவை",
    resident: "தமிழ்நாடு வதிவாளர்",
    income: "ஆண்டு குடும்ப வருமானம் (₹)",
    wet: "நன்நிலம் (ஏக்கர்)",
    dry: "பஞ்சநிலம் (ஏக்கர்)",
    govtEmp: "அரசு ஊழியர்",
    taxPayer: "வருமானவரி செலுத்துபவர்",
    womanHead: "குடும்பத் தலைவி",
    student: "மாணவர்/மாணவி",
    schoolType: "பள்ளி வகை (மாணவர் என்றால்)",
    govt: "அரசு",
    aided: "அரசு உதவி",
    private: "தனியார்",
    higherEd: "உயர்கல்வியில் சேர்க்கை",
    disability: "மாற்றுத் திறன் (%)",
    transgender: "திருநங்கை",
    continue: "தகுதித் திட்டங்கள் காண்க",
  },
};

const Details = () => {
  const navigate = useNavigate();
  const { language, setProfile, profile } = useApp();
  const t = labels[language];

  const [form, setForm] = useState({
    age: profile.age ?? 25,
    gender: profile.gender ?? ("male" as const),
    isTNResident: profile.isTNResident ?? true,
    annualIncome: profile.annualIncome ?? 200000,
    landWetAcres: profile.landWetAcres ?? 0,
    landDryAcres: profile.landDryAcres ?? 0,
    isGovtEmployee: profile.isGovtEmployee ?? false,
    isTaxPayer: profile.isTaxPayer ?? false,
    isWomanHead: profile.isWomanHead ?? false,
    isStudent: profile.isStudent ?? false,
    schoolType: profile.schoolType ?? ("" as const),
    higherEdEnrolled: profile.higherEdEnrolled ?? false,
    disabilityPercent: profile.disabilityPercent ?? 0,
    isTransgender: profile.isTransgender ?? false,
  });

  useEffect(() => {
    document.title = language === "ta" ? "TN திட்டம் – தகவல்" : "TN Thittam – Details";
  }, [language]);

  const update = (k: string, v: any) => setForm((p) => ({ ...p, [k]: v }));

  const onSubmit = () => {
    setProfile(form);
    toast.success(
      language === "ta" ? "உங்கள் விவரங்கள் சேமிக்கப்பட்டது" : "Details saved"
    );
    navigate("/recommendations");
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto p-6">
        <Card>
          <CardHeader>
            <CardTitle asChild>
              <h1 className="text-2xl">{t.title}</h1>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="age">{t.age}</Label>
                <Input id="age" type="number" min={0} value={form.age}
                  onChange={(e) => update("age", Number(e.target.value))} />
              </div>

              <div>
                <Label>{t.gender}</Label>
                <div className="flex gap-4 items-center mt-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="gender"
                      checked={form.gender === "male"}
                      onChange={() => update("gender", "male")}
                    />
                    {t.male}
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="gender"
                      checked={form.gender === "female"}
                      onChange={() => update("gender", "female")}
                    />
                    {t.female}
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="gender"
                      checked={form.gender === "other"}
                      onChange={() => update("gender", "other")}
                    />
                    {t.other}
                  </label>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="resident">{t.resident}</Label>
                <Switch id="resident" checked={form.isTNResident}
                  onCheckedChange={(v) => update("isTNResident", v)} />
              </div>

              <div>
                <Label htmlFor="income">{t.income}</Label>
                <Input id="income" type="number" min={0} value={form.annualIncome}
                  onChange={(e) => update("annualIncome", Number(e.target.value))} />
              </div>

              <div>
                <Label htmlFor="wet">{t.wet}</Label>
                <Input id="wet" type="number" min={0} value={form.landWetAcres}
                  onChange={(e) => update("landWetAcres", Number(e.target.value))} />
              </div>

              <div>
                <Label htmlFor="dry">{t.dry}</Label>
                <Input id="dry" type="number" min={0} value={form.landDryAcres}
                  onChange={(e) => update("landDryAcres", Number(e.target.value))} />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="govt">{t.govtEmp}</Label>
                <Switch id="govt" checked={form.isGovtEmployee}
                  onCheckedChange={(v) => update("isGovtEmployee", v)} />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="tax">{t.taxPayer}</Label>
                <Switch id="tax" checked={form.isTaxPayer}
                  onCheckedChange={(v) => update("isTaxPayer", v)} />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="woman">{t.womanHead}</Label>
                <Switch id="woman" checked={form.isWomanHead}
                  onCheckedChange={(v) => update("isWomanHead", v)} />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="student">{t.student}</Label>
                <Switch id="student" checked={form.isStudent}
                  onCheckedChange={(v) => update("isStudent", v)} />
              </div>

              <div>
                <Label htmlFor="school">{t.schoolType}</Label>
                <select
                  id="school"
                  className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2"
                  value={form.schoolType}
                  onChange={(e) => update("schoolType", e.target.value)}
                >
                  <option value="">—</option>
                  <option value="government">{t.govt}</option>
                  <option value="government_aided">{t.aided}</option>
                  <option value="private">{t.private}</option>
                </select>
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="he">{t.higherEd}</Label>
                <Switch id="he" checked={form.higherEdEnrolled}
                  onCheckedChange={(v) => update("higherEdEnrolled", v)} />
              </div>

              <div>
                <Label htmlFor="dis">{t.disability}</Label>
                <Input id="dis" type="number" min={0} max={100} value={form.disabilityPercent}
                  onChange={(e) => update("disabilityPercent", Number(e.target.value))} />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="tg">{t.transgender}</Label>
                <Switch id="tg" checked={form.isTransgender}
                  onCheckedChange={(v) => update("isTransgender", v)} />
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <Button onClick={onSubmit}>{t.continue}</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Details;
