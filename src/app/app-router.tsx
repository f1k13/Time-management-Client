import { setIsAuth } from "@/entities/auth/lib";
import { $isAuth } from "@/entities/auth/model/auth";
import { getSelfFx } from "@/entities/user/lib";
import { setTokenToApi } from "@/shared/api/api.ts";
import { getToken } from "@/shared/lib";
import { useStore } from "effector-react";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { authRoutes, publicRoutes } from "./routes/routes";
import { NotFoundPage } from "@/pages/not-found-page";
import { Loader } from "@/features/loader/ui";
const AppRouter = () => {
  const isAuth = useStore($isAuth);
  const isLoading = useStore(getSelfFx.pending);
  useEffect(() => {
    const token = getToken();
    if (!token || !isAuth) {
      setIsAuth(false);
      // navigate(REGISTER_ROUTE);
    }
    setTokenToApi(String(token));
    getSelfFx();
  }, []);
  return (
    <Routes>
      {isAuth &&
        authRoutes.map(({ path, Component, Layout }) => (
          <Route
            key={path}
            path={path}
            element={
              <Layout>
                <Component />
              </Layout>
            }
          />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={isLoading ? <Loader /> : <NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
