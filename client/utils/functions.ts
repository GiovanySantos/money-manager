import { Profile } from "../interfaces/interfaces";

export const getCurrentMonth = (userProfile: Profile, monthId: number) =>
  userProfile?.months?.[monthId - 1];

export const BRLCurrencyMask = (inputValue: string): string => {
  return inputValue.replace(/^s*(?:[1-9]d{0,2}(?:.d{3})*|0),d{2}$/g, "");
};
