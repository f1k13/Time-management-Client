import { REGISTER_ROUTE } from "@/app/routes/paths";
import { LoginForm } from "@/features/login-form/ui";
import { useNavigate } from "react-router-dom";
import peepsHappy from "../../../shared/peeps/peeps-happy-mainbg.jpg";
import peepsSad from "../../../shared/peeps/peeps-sad-mainbg.jpg";


const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full h-full items-center justify-center">
      <div className="flex flex-col items-center bg-authBG h-full rounded-xl p-20">
        <h1 className="text-mainColor text-40px font-bold leading-normal mt-5">
          Login
        </h1>
        <div className="mt-[45px]">
          <LoginForm />
          <p className="text-mainColor mt-5">
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
      <img
        className=""
        src={status === "error" ? peepsSad : peepsHappy}
        alt=""
      />
    </div>
  );
};

export default Login;
