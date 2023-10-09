import { AuthLayout } from "@/app/layouts";
import RegisterForm from "@/features/register-form/ui/register-form";

const RegisterPage = () => {
  return (
    <div className="flex justify-center items-center">
      <AuthLayout>
        <RegisterForm />
      </AuthLayout>
    </div>
  );
};

export default RegisterPage;
