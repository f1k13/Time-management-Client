import { AuthLayout } from "@/app/layouts";
import Login from "@/widgets/login/ui/login";

const LoginPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <AuthLayout>
        <Login />
      </AuthLayout>
    </div>
  );
};

export default LoginPage;
