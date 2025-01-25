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
    full_name_en?: string ;
    full_name_ka?: string ;
    phone_number?: string ;
    username?: string ;
    address?: string;
};

interface AuthContextType {
  user: User;
  profileData: Profile;
  loading: boolean;
  handleSetUser: (user: User) => void;
}

// interface AuthContextType {
//   user: User;
//   loading: boolean;
//   handleSetUser: (user: User) => void;
// }

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState<boolean>(true);
  // const [profile, setProfile] = useState<Profile>();

  const handleSetUser = useCallback((user: User) => {
    setUser(user);
    setLoading(false);
  }, []);

  // const handleSetProfile = useCallback((profile: Profile) => {
  //   setProfile(profile);
  // }, []);

  // const updateProfile = useCallback((updatedData: Partial<Profile>) => {
  //   setProfile((prevProfile) => (prevProfile ? { ...prevProfile, ...updatedData } : prevProfile));
  // }, []);


    const {data: profileData = {
      avatar_url:  "",
      full_name_en: "",
      full_name_ka: "",
      phone_number: "",
      address:  "",
      username: "",
    }} = useGetProfileInfo({ queryOptions: { select: mapProfileTableData } }, user?.id);

    // useEffect(() => {
    //   if (profileData && user) {
    //     handleSetProfile(profileData);
    //   }
    // }, [profileData,handleSetProfile,user]);
    
  // useEffect(() => {
  //   const checkSession = async () => {
  //     const { data: { session } } = await supabase.auth.getSession();
  //     console.log("Session: ", session);
  //     if (session) {
  //       handleSetUser({
  //         id: session.user.id,
  //         email: session.user.email,
  //         token: session.access_token,
  //       });
  //     } else {
  //       handleSetUser(null);
  //       handleSetProfile(null);
  //     }
  //   };

  //   checkSession();

  //   const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
  //     console.log("Session on auth state change:", session);
  //     if (session) {
  //       handleSetUser({
  //         id: session.user.id,
  //         email: session.user.email,
  //         token: session.access_token,
  //       });
  //     } else {
  //       handleSetUser(null);
  //         handleSetProfile(null);
  //     }
  //   });

  //   return () => {
  //     subscription.unsubscribe();
  //   };
  // }, [handleSetUser,handleSetProfile]);



  return (
    <AuthContext.Provider value={{ user, profileData, loading, handleSetUser }}>
      {children}
    </AuthContext.Provider>
  );
};