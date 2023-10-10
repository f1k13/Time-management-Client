import { LOGIN_ROUTE } from "@/app/routes/paths";
import { RegisterForm } from "@/features/register-form/ui";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-labelColor text-40px font-bold leading-normal mt-10">
        Registration
      </h1>
      <div className="mt-[45px]">
        <RegisterForm />
        <p className="text-labelColor mt-5">
          Have account?
          <span className="ml-2 cursor-pointer" onClick={() => navigate(LOGIN_ROUTE)}>Login</span>
        </p>
      </div>
    </div>
  );
};

export default Register;
