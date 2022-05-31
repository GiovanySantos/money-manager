import { Earn, Month, Profile } from "../interfaces/interfaces";

export const getCurrentMonth = (userProfile: Profile, monthId: number) =>
  userProfile?.months?.[monthId - 1];
