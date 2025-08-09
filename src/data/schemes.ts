import { Profile } from "@/context/AppContext";

export type Category =
  | "Education & Skill"
  | "Women Welfare"
  | "Disability Support"
  | "Transport"
  | "Agriculture & Environment"
  | "Governance";

export interface Scheme {
  id: string;
  category: Category;
  name: { en: string; ta: string };
  summary: { en: string; ta: string };
  eligibilityNotes: { en: string; ta: string };
  documents: string[];
  apply: { en: string; ta: string };
  officialUrl?: string;
  rule: (p: Profile) => boolean;
}

const num = (v?: number) => (typeof v === "number" && !isNaN(v) ? v : 0);
const bool = (v?: boolean) => !!v;

export const schemes: Scheme[] = [
  {
    id: "breakfast",
    category: "Education & Skill",
    name: {
      en: "Chief Minister’s Breakfast Scheme",
      ta: "முதல்வர் காலை உணவு திட்டம்",
    },
    summary: {
      en: "Free nutritious breakfast for students in Tamil Nadu Government schools.",
      ta: "தமிழ்நாடு அரசு பள்ளி மாணவர்களுக்கு இலவச சத்துணவு காலை உணவு.",
    },
    eligibilityNotes: {
      en: "Student enrolled in a TN Government school (primary grades).",
      ta: "தமிழ்நாடு அரசு பள்ளியில் (தொடக்க வகுப்புகள்) பயிலும் மாணவர்.",
    },
    documents: ["School ID / EMIS (managed by school)"],
    apply: {
      en: "No individual application required; provided via schools.",
      ta: "தனிப்பட்ட விண்ணப்பம் தேவையில்லை; பள்ளி மூலம் வழங்கப்படும்.",
    },
    officialUrl:
      "https://tnsocialwelfare.tn.gov.in/en/specilisationsnutritious-meal-programme/chief-ministers-breakfast-scheme",
    rule: (p) => bool(p.isStudent) && p.schoolType === "government",
  },
  {
    id: "naan-mudhalvan",
    category: "Education & Skill",
    name: { en: "Naan Mudhalvan", ta: "நான் முதலவன்" },
    summary: {
      en: "State upskilling platform with courses and targeted scholarships.",
      ta: "திறன் மேம்பாட்டு தளம்; பாடநெறிகள் மற்றும் இலக்கு உதவித்தொகைகள்.",
    },
    eligibilityNotes: {
      en: "Tamil Nadu students/youth; specific programs may set extra criteria.",
      ta: "தமிழ்நாடு மாணவர்கள்/இளைஞர்கள்; ஒவ்வொரு திட்டத்திற்கும் தனிக் குறிகள் உள்ளன.",
    },
    documents: ["Aadhaar", "Student/EMIS (if applicable)", "Bank details"],
    apply: {
      en: "Create an account and apply to active programs on the portal.",
      ta: "போர்டலில் கணக்கு உருவாக்கி செயலில் உள்ள திட்டங்களுக்கு விண்ணப்பிக்கவும்.",
    },
    officialUrl: "https://naanmudhalvan.tn.gov.in/",
    rule: (p) => bool(p.isStudent) || num(p.age) >= 18,
  },
  {
    id: "pudhumai-penn",
    category: "Education & Skill",
    name: {
      en: "Pudhumai Penn (Moovalur Ramamirtham)",
      ta: "புத்துமைப்பெண் (மூவலூர் ராமாமிருதம்)",
    },
    summary: {
      en: "Monthly support for girls from govt schools pursuing higher education.",
      ta: "அரசுப் பள்ளிகளில் படித்த மாணவிகள் உயர்கல்வி தொடர மாதாந்திர உதவி.",
    },
    eligibilityNotes: {
      en: "TN domicile; girl studied in Govt school; enrolled in higher education.",
      ta: "தமிழ்நாடு வதிவு; அரசுப் பள்ளியில் படிப்பு; உயர்கல்வியில் சேர்க்கை.",
    },
    documents: ["EMIS ID", "Aadhaar", "Bank passbook", "Bonafide/Admission proof"],
    apply: {
      en: "Apply via official portal or through your institution.",
      ta: "அதிகாரப்பூர்வ தளத்தில் அல்லது கல்வி நிறுவனத்தின் மூலம் விண்ணப்பிக்கவும்.",
    },
    officialUrl: "https://pudhumaipenn.tn.gov.in/",
    rule: (p) =>
      p.gender === "female" &&
      bool(p.isTNResident) &&
      bool(p.isStudent) &&
      p.schoolType === "government" &&
      bool(p.higherEdEnrolled),
  },
  {
    id: "tn-scholarships",
    category: "Education & Skill",
    name: { en: "TN Scholarships (Multiple)", ta: "தமிழ்நாடு கல்வி உதவித்தொகைகள்" },
    summary: {
      en: "Category-based Post Matric scholarships and fee concessions.",
      ta: "வகை அடிப்படையிலான உதவித்தொகைகள் மற்றும் கட்டண தள்ளுபடிகள்.",
    },
    eligibilityNotes: {
      en: "TN domicile; community/category; studying in recognized institutions.",
      ta: "தமிழ்நாடு வதிவு; சமூக/வகை; அங்கீகரிக்கப்பட்ட நிறுவனங்களில் பயிலும்.",
    },
    documents: [
      "Aadhaar",
      "Community certificate",
      "Income certificate",
      "Bonafide",
      "Bank passbook",
    ],
    apply: {
      en: "Apply via respective department portals/institutions.",
      ta: "துறைத்தளங்கள்/நிறுவனங்கள் மூலம் விண்ணப்பிக்கவும்.",
    },
    officialUrl: "https://www.myscheme.gov.in/",
    rule: (p) => bool(p.isStudent),
  },
  {
    id: "magalir-urimai",
    category: "Women Welfare",
    name: {
      en: "Kalaignar Women’s Rights Grant (₹1000/month)",
      ta: "கலைஞர் மகளிர் உரிமைத் தொகை (₹1000/மாதம்)",
    },
    summary: {
      en: "Monthly support to eligible woman heads of families in TN.",
      ta: "தமிழ்நாட்டில் தகுதி வாய்ந்த குடும்பத் தலைவி பெண்களுக்கு மாதாந்திர உதவி.",
    },
    eligibilityNotes: {
      en: "TN domicile; woman head; income ≤ ₹2.5L; land below limits; exclusions apply.",
      ta: "தமிழ்நாடு வதிவு; குடும்பத் தலைவி; வருமான வரம்பு; நில அளவு வரம்புகள்; விலக்குகள் உள்ளன.",
    },
    documents: ["Aadhaar", "Ration card", "Bank passbook", "Residence proof"],
    apply: {
      en: "Apply via e-Sevai/special camps; track status online.",
      ta: "e-Sevai/சிறப்பு முகாம்கள் மூலம் விண்ணப்பிக்கவும்; நிலையை ஆன்லைனில் பார்க்கவும்.",
    },
    officialUrl: "https://kmut.tn.gov.in/",
    rule: (p) =>
      p.gender === "female" &&
      bool(p.isTNResident) &&
      bool(p.isWomanHead) &&
      num(p.annualIncome) <= 250000 &&
      num(p.landWetAcres) < 5 &&
      num(p.landDryAcres) < 10 &&
      !bool(p.isGovtEmployee) &&
      !bool(p.isTaxPayer),
  },
  {
    id: "free-bus",
    category: "Transport",
    name: { en: "Free Bus Travel for Women", ta: "பெண்களுக்கு இலவச பேருந்து பயணம்" },
    summary: {
      en: "Zero-ticket travel in ordinary TNSTC/MTC buses.",
      ta: "இயல்பான அரசு பேருந்துகளில் இலவச பயணம் (பூஜ்ய-டிக்கெட்).",
    },
    eligibilityNotes: {
      en: "Women and transgender persons on ordinary state-run buses.",
      ta: "பெண்களும் திருநங்கைகளும் அரசு இயல்புப் பேருந்துகளில்.",
    },
    documents: ["None (zero-ticket issued by conductor)"] ,
    apply: { en: "Board eligible buses and request zero-ticket.", ta: "தகுதியான பேருந்துகளில் பயணம் செய்து பூஜ்ய-டிக்கெட் பெறவும்." },
    officialUrl:
      "https://www.tnsocialwelfare.tn.gov.in/en/specilisationswomen-welfare/free-travel-for-women-in-government-buses",
    rule: (p) => p.gender === "female" || bool(p.isTransgender),
  },
  {
    id: "disability",
    category: "Disability Support",
    name: {
      en: "Schemes for Persons with Disabilities",
      ta: "விதிவிலக்கு உடையோருக்கான திட்டங்கள்",
    },
    summary: {
      en: "Allowances, assistive devices, education and livelihood support.",
      ta: "ஒதுக்கீடுகள், உதவிப் பொருட்கள், கல்வி மற்றும் வாழ்வாதார ஆதரவு.",
    },
    eligibilityNotes: {
      en: "Valid disability ID/certificate; income/age as per scheme.",
      ta: "செல்லுபடியாகும் மாற்றுத்திறனாளர் அட்டை/சான்று; திட்டவாரி வரம்புகள்.",
    },
    documents: ["UDID/Disability ID", "Medical certificate", "Aadhaar", "Bank passbook"],
    apply: {
      en: "Apply via District Differently Abled Welfare Office/e-Sevai.",
      ta: "மாவட்ட மாற்றுத் திறனாளிகள் நல அலுவலகம்/e-Sevai மூலம் விண்ணப்பிக்கவும்.",
    },
    officialUrl: "https://chennai.nic.in/district-differently-abled-welfare-office/",
    rule: (p) => num(p.disabilityPercent) >= 40,
  },
  {
    id: "kudimaramathu",
    category: "Agriculture & Environment",
    name: { en: "Kudimaramathu Scheme", ta: "குடிமராமத்து திட்டம்" },
    summary: {
      en: "Community-led restoration of irrigation tanks and lakes.",
      ta: "நீர்தேக்கங்கள்/ஏரிகளின் சமூக முன்னெடுப்பு புதுப்பிப்பு.",
    },
    eligibilityNotes: {
      en: "Implemented via WRD/PWD with Water Users’ Associations.",
      ta: "WRD/PWD மூலம் நீர் பயனாளர்கள் சங்கங்களுடன் செயல்பாடு.",
    },
    documents: ["Association resolutions", "Project details"],
    apply: { en: "Coordinate with local WRD/PWD offices.", ta: "உள்ளூர் WRD/PWD அலுவலகங்களுடன் ஒருங்கிணைக்கவும்." },
    officialUrl: "https://timesofindia.indiatimes.com/city/chennai/",
    rule: () => false,
  },
  {
    id: "green-tn",
    category: "Agriculture & Environment",
    name: { en: "Green Tamil Nadu Mission", ta: "பசுமை தமிழ்நாடு இயக்கம்" },
    summary: {
      en: "10-year mission to increase green cover to ~33%; public participation.",
      ta: "பசுமை போர்வையை ~33% உயர்த்த 10 ஆண்டு இயக்கம்; பொதுப் பங்கேற்பு.",
    },
    eligibilityNotes: { en: "Open to all citizens/institutions.", ta: "அனைவருக்கும் திறந்து உள்ளது." },
    documents: [],
    apply: { en: "Pledge/participate via portal.", ta: "தளத்தின் மூலம் உறுதி/பங்கேற்பு." },
    officialUrl: "https://www.greentnmission.com/",
    rule: () => true,
  },
  {
    id: "simplegov",
    category: "Governance",
    name: { en: "SimpleGov (Fast-track Services)", ta: "சிம்பிள் கவ்வ் (விரைவு சேவைகள்)" },
    summary: {
      en: "One-stop digital services for select certificates/NOCs.",
      ta: "சான்றிதழ்கள்/NOC க்கான ஒரே இட டிஜிட்டல் சேவைகள்.",
    },
    eligibilityNotes: {
      en: "Phased rollout; service-specific criteria.",
      ta: "அடுக்கு அறிமுகம்; சேவை சார்ந்த தகுதிகள்.",
    },
    documents: ["Service-specific"],
    apply: { en: "Apply online when live for your district.", ta: "உங்கள் மாவட்டத்தில் செயல்பாட்டில் இருந்தால் ஆன்லைனில் விண்ணப்பிக்கவும்." },
    officialUrl: "https://tnega.tn.gov.in/",
    rule: () => true,
  },
];
