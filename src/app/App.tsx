import "./styles/main.scss";
import Providers from "@/app/layouts/providers.tsx";
import MainLayout from "@/app/layouts/main-layout.tsx";
import AppRouter from "@/app/app-router.tsx";

const App = () => {
  return (
    <Providers>
      <MainLayout>
        <AppRouter />
      </MainLayout>
    </Providers>
  );
};

export default App;
