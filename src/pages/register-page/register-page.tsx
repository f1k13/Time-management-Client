import { AuthLayout } from "@/app/layouts";
import { Register } from "@/widgets/register";



const RegisterPage = () => {
  return (
    <div>
      <AuthLayout>
        <Register/>
      </AuthLayout>
    </div>
  );
};

export default RegisterPage;
