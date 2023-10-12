import AppRouter from "@/app/app-router.tsx";
import Providers from "@/app/layouts/providers.tsx";
import "./styles/main.scss";

const App = () => {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
};

export default App;
