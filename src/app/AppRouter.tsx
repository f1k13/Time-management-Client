import { Route, Routes } from "react-router-dom";
import { authRoutes, publicRoutes } from "./routes/routes";
import { $isAuth } from "@/entities/auth/model/auth";
import { useStore } from "effector-react";
import { useEffect } from "react";
const AppRouter = () => {
  const isAuth = useStore($isAuth);
  useEffect(() => {
    console.log(isAuth);
  });
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
