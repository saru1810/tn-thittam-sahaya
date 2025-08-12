import React, { createContext, useContext, useMemo, useState } from "react";

export type Language = "en" | "ta";

export type Gender = "male" | "female" | "other";
export type SchoolType = "government" | "government_aided" | "private" | "";

export interface Profile {
  name?: string;
  age?: number;
  gender?: Gender;
  isTNResident?: boolean;
  annualIncome?: number;
  landWetAcres?: number;
  landDryAcres?: number;
  isGovtEmployee?: boolean;
  isTaxPayer?: boolean;
  isWomanHead?: boolean;
  isStudent?: boolean;
  schoolType?: SchoolType;
  higherEdEnrolled?: boolean;
  disabilityPercent?: number;
  isTransgender?: boolean;
}

interface AppContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  profile: Profile;
  setProfile: (p: Profile) => void;
  reset: () => void;
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en");
  const [profile, setProfile] = useState<Profile>({});

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      profile,
      setProfile,
      reset: () => {
        setLanguage("en");
        setProfile({});
      },
    }),
    [language, profile]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
};
