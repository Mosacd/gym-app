import { AuthContext } from "..";
import { useContext } from "react";

export const useAuthContext = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("use Auth Context inside Auth Context Provider");
  }

  return authContext;
};
