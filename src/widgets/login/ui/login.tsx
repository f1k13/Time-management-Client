import { REGISTER_ROUTE } from "@/app/routes/paths";
import { LoginForm } from "@/features/login-form/ui";
import { useNavigate } from "react-router-dom";
import peepsHappy from "../../../shared/peeps/peeps-happy-mainbg.jpg";
import peepsSad from "../../../shared/peeps/peeps-sad-mainbg.jpg";
import { useStore } from "effector-react";
import { $authStatus } from "@/entities/auth-status/model/auth-status.ts";
import clsx from "clsx";
import {setNotificationsEvent} from "@/entities/notifications/lib/notifications-events.ts";

const Login = () => {
  const navigate = useNavigate();
  const status = useStore($authStatus);
  return (
    <div className="flex w-full h-full items-center justify-between px-[50px]">
      <div className="flex flex-col items-center justify-center bg-secondaryColorAccent rounded-xl px-[26px] w-full h-[80%] max-w-[2000px]">
        <h1 className="text-mainColorAccent text-40px font-bold leading-normal mb-[76px]">
          Login
        </h1>
        <div className="w-full">
          <LoginForm />
          <p className="text-mainColorAccent my-5">
            No have an account?
            <span
              className="ml-2 cursor-pointer"
              onClick={() => navigate(REGISTER_ROUTE)}
            >
              Register!
            </span>
          </p>
          <button onClick={() => setNotificationsEvent({text: 'sadsads', type: 'error'})} className='bg-white'>asdasddasdasdas</button>
        </div>
      </div>
      <img
        className={clsx("w-full h-full max-w-[600px]")}
        src={status === "success" ? peepsHappy : peepsSad}
        alt="Peeps"
      />
    </div>
  );
};

export default Login;
