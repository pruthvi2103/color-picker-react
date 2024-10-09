import { getUserData } from "@/services/user-service";

export const useUser = () => {
  const data = getUserData();
  return {
    userData: data,
  };
};
