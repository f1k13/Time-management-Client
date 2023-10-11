import { REGISTER_ROUTE } from "@/app/routes/paths";
import { LoginForm } from "@/features/login-form/ui";
import { useNavigate } from "react-router-dom";
import peepsHappy from "../../../shared/peeps/peeps-happy-mainbg.jpg";
import peepsSad from "../../../shared/peeps/peeps-sad-mainbg.jpg";
import { useStore } from "effector-react/effector-react.umd";
import { $status } from "@/entities/error/model/status";

const Login = () => {
  const navigate = useNavigate();
  const status = useStore($status);
  return (
    <div className="flex w-full h-full items-center justify-center">
      <div className="flex flex-col items-center bg-authBG h-full rounded-xl p-20">
        <h1 className="text-loginColor text-40px font-bold leading-normal mt-10">
          Login
        </h1>
        <div className="mt-[45px]">
          <LoginForm />
          <p className="text-loginColor mt-5">
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
        className="w-1/2 h-[900px]"
        src={status === "error" ? peepsSad : peepsHappy}
        alt=""
      />
    </div>
  );
};

export default Login;
