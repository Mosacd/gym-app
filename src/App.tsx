import { lazy, Suspense, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import DashboardLayout from "./layouts/dashboardLayout";
import { ThemeProvider } from "./componentsShadcn/theme/theme-provider";
import AuthGuardLogIn from "./pageComponents/route-guards/auth/forSignIn";
import AuthGuardLogOut from "./pageComponents/route-guards/auth/forSignOut";
import AuthLayout from "./layouts/authlayout";
import { Loader } from "./pageComponents/loader/loader";
import { useAuthContext } from "./context/auth/hooks/useAuthContext";
import { supabase } from "./supabase/supabase";

const LogIn = lazy(() => import("./pageComponents/logIn/logIn"));
const Register = lazy(() => import("./pageComponents/register/register"));
const Main = lazy(() => import("./pages/mainPage"));
const Products = lazy(() => import("./pages/productsPage"));
const ProductDetail = lazy(() => import("./pages/singleProductPage"));
const CartPage = lazy(() => import("./pages/cartPage"));
const Profile = lazy(() => import("./pages/profilePage"));
const IdOrder = lazy(() => import("./pageComponents/idOrder/idOrder"));

const App: React.FC = () => {
  const { handleSetUser } = useAuthContext();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
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
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
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

    return () => subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<Navigate to="dashboard/main" replace />} />

        <Route path="dashboard" element={<DashboardLayout />}>
          <Route
            path="main"
            element={
              <Suspense fallback={<Loader />}>
                <Main />
              </Suspense>
            }
          />
          <Route
            path="products"
            element={
              <Suspense fallback={<Loader />}>
                <Products />
              </Suspense>
            }
          />
          <Route
            path="productDetail/:id"
            element={
              <Suspense fallback={<Loader />}>
                <ProductDetail />
              </Suspense>
            }
          />
          <Route
            path="cartPage"
            element={
              <Suspense fallback={<Loader />}>
                <CartPage />
              </Suspense>
            }
          />
          <Route
            path="profilePage"
            element={
              <AuthGuardLogOut>
                <Suspense fallback={<Loader />}>
                  <Profile />
                </Suspense>
              </AuthGuardLogOut>
            }
          />
          <Route
            path="idOrder"
            element={
              <Suspense fallback={<Loader />}>
                <IdOrder />
              </Suspense>
            }
          />
        </Route>

        <Route
          path="/auth"
          element={
            <AuthGuardLogIn>
              <AuthLayout />
            </AuthGuardLogIn>
          }
        >
          <Route
            path="signIn"
            element={
              <Suspense fallback={<Loader />}>
                <LogIn />
              </Suspense>
            }
          />
          <Route
            path="register"
            element={
              <Suspense fallback={<Loader />}>
                <Register />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
