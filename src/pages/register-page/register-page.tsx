import { AuthLayout } from "@/app/layouts";
import { Register } from "@/widgets/register";



const RegisterPage = () => {
  return (
    <div className="flex justify-center items-center">
      <AuthLayout>
        <Register/>
      </AuthLayout>
    </div>
  );
};

export default RegisterPage;
