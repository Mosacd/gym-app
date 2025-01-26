import { createContext, PropsWithChildren, useCallback, useState } from "react";
// import { supabase } from "../../supabase/supabase"; // Adjust the import based on your project structure
import { mapProfileTableData } from "@/supabase/account";
import { useGetProfileInfo } from "@/reactQuery/query/profile";

type User = {
  id?: string;
  email?: string;
  token: string;
} | null;

type Profile = {
  avatar_url?: string;
  full_name_en?: string;
  full_name_ka?: string;
  phone_number?: string;
  username?: string;
  address?: string;
};

interface AuthContextType {
  user: User;
  profileData: Profile;
  loading: boolean;
  handleSetUser: (user: User) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const handleSetUser = useCallback((user: User) => {
    setUser(user);
    setLoading(false);
  }, []);

  const {
    data: profileData = {
      avatar_url: "",
      full_name_en: "",
      full_name_ka: "",
      phone_number: "",
      address: "",
      username: "",
    },
  } = useGetProfileInfo(
    { queryOptions: { select: mapProfileTableData } },
    user?.id,
  );

  return (
    <AuthContext.Provider value={{ user, profileData, loading, handleSetUser }}>
      {children}
    </AuthContext.Provider>
  );
};
