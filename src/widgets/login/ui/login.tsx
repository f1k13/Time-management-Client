import { REGISTER_ROUTE } from "@/app/routes/paths";
import { LoginForm } from "@/features/login-form/ui";
import { useNavigate } from "react-router-dom";
import peepsHappy from "../../../shared/peeps/peeps-happy-mainbg.jpg";
import peepsSad from "../../../shared/peeps/peeps-sad-mainbg.jpg";
import { useStore } from "effector-react";
import { $notification } from "@/entities/notification/model/notification";

const Login = () => {
  const navigate = useNavigate();
  const { status } = useStore($notification);
  console.log(status);
  return (
    <div className="flex w-full h-full items-center justify-between px-[50px]">
      <div className="flex flex-col items-center justify-center bg-authBG rounded-xl px-[26px] w-full h-[80%]">
        <h1 className="text-mainColor text-40px font-bold leading-normal mt-5">
          Login
        </h1>
        <div className="w-full">
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
      <div className="h-full w-[50%]">
        <img
          className="w-full h-full object-cover"
          src={status === "error" ? peepsSad : peepsHappy}
          alt="Peeps"
        />
      </div>
    </div>
  );
};

export default Login;
