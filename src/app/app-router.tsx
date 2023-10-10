import { Route, Routes, useNavigate } from "react-router-dom";
import { authRoutes, publicRoutes } from "./routes/routes";
import { $isAuth } from "@/entities/auth/model/auth";
import { useStore } from "effector-react";
import { useEffect } from "react";
import { getToken } from "@/shared/lib";
import { setIsAuth } from "@/entities/auth/lib";
import { setTokenToApi } from "@/shared/api/api.ts";
import { getSelfFx } from "@/entities/user/lib";
import {  REGISTER_ROUTE } from "./routes/paths";
const AppRouter = () => {
  const isAuth = useStore($isAuth);
  const navigate = useNavigate();
  useEffect(() => {
    const token = getToken();
    if (!token) {
      setIsAuth(false);
      navigate(REGISTER_ROUTE);
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
