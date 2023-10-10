import { REGISTER_ROUTE } from "@/app/routes/paths";
import { LoginForm } from "@/features/login-form/ui";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-labelColor text-40px font-bold leading-normal mt-10">
        Login
      </h1>
      <div className="mt-[45px]">
        <LoginForm />
        <p className="text-labelColor mt-5">
           No have account?
          <span
            className="ml-2 cursor-pointer"
            onClick={() => navigate(REGISTER_ROUTE)}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
