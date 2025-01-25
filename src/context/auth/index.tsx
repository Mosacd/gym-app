import { createContext, PropsWithChildren, useCallback, useState, useEffect } from "react";
import { supabase } from "../../supabase/supabase"; // Adjust the import based on your project structure

type User = {
  id?: string;
  email?: string;
  token: string;
} | null;

interface AuthContextType {
  user: User;
  loading: boolean;
  handleSetUser: (user: User) => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const handleSetUser = useCallback((user: User) => {
    setUser(user);
    setLoading(false);
  }, []);


  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      console.log("Session: ", session);
      if (session) {
        handleSetUser({
          id: session.user.id,
          email: session.user.email,
          token: session.access_token,
        });
      } else {
        handleSetUser(null);
      }
    };

    checkSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log("Session on auth state change:", session);
      if (session) {
        handleSetUser({
          id: session.user.id,
          email: session.user.email,
          token: session.access_token,
        });
      } else {
        handleSetUser(null);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [handleSetUser]);

  return (
    <AuthContext.Provider value={{ user, loading, handleSetUser }}>
      {children}
    </AuthContext.Provider>
  );
};