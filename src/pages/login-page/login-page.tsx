import { AuthLayout } from "@/app/layouts";
import Login from "@/widgets/login/ui/login";

const LoginPage = () => {
  return (
    <div>
      <AuthLayout>
        <Login />
      </AuthLayout>
    </div>
  );
};

export default LoginPage;
