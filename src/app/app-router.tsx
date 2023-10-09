import { Route, Routes } from "react-router-dom";
import { authRoutes, publicRoutes } from "./routes/routes";
import { $isAuth } from "@/entities/auth/model/auth";
import { useStore } from "effector-react";
import { useEffect } from "react";
import { getToken } from "@/shared/lib";
import { setIsAuth } from "@/entities/auth/lib";
import { setTokenToApi } from "@/shared/api/api.ts";
import { getSelfFx } from "@/entities/user/lib";
const AppRouter = () => {
  const isAuth = useStore($isAuth);
  useEffect(() => {
    const token = getToken();
    if (!token) {
      setIsAuth(false);
    }
    setTokenToApi(String(token));
    getSelfFx();
    console.log(isAuth, "isAuth");
  }, []);
  return (
    <Routes>
      {isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<>Notfound</>} />
    </Routes>
  );
};

export default AppRouter;
