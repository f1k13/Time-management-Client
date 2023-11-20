import { REGISTER_ROUTE } from "@/app/routes/paths";
import { LoginForm } from "@/features/login-form/ui";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex w-1/2 h-full items-center ">
      <div className="flex flex-col items-center justify-center bg-secondaryColorAccent rounded-xl px-[26px] w-full h-[80%] ">
        <h1 className="text-mainColorAccent text-40px font-bold leading-normal mb-[76px]">
          Login
        </h1>
        <div className="w-full">
          <LoginForm />
          <p className="text-mainColorAccent my-5">
            No have an account?
            <span
              className="ml-2 cursor-pointer hover:border-b-2 border-mainColorAccent"
              onClick={() => navigate(REGISTER_ROUTE)}
            >
              Register!
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
