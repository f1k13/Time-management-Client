import { setIsAuth } from "@/entities/auth/lib";
import { $isAuth } from "@/entities/auth/model/auth";
import { getSelfFx } from "@/entities/user/lib";
import { setTokenToApi } from "@/shared/api/api.ts";
import { getToken } from "@/shared/lib";
import { useStore } from "effector-react";
import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { authRoutes, publicRoutes } from "./routes/routes";
import { NotFoundPage } from "@/pages/not-found-page";
import { CALENDAR_ROUTE, REGISTER_ROUTE } from "./routes/paths";
import { Loader } from "@/features/loader/ui";
const AppRouter = () => {
  const isAuth = useStore($isAuth);
  const isLoading = useStore(getSelfFx.pending);
  const navigate = useNavigate();
  useEffect(() => {
    const token = getToken();
    if (token) {
      setIsAuth(true);
      navigate(CALENDAR_ROUTE);
    } else {
      navigate(REGISTER_ROUTE);
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
      {publicRoutes.map(({ path, Component, Layout }) => (
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
      <Route path="*" element={isLoading ? <Loader /> : <NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
