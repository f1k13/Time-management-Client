import { LOGIN_ROUTE } from "@/app/routes/paths";
import { RegisterForm } from "@/features/register-form/ui";
import { useNavigate } from "react-router-dom";
import peepsHappy from "../../../shared/peeps/peeps-happy-mainbg.jpg";
import peepsSad from "../../../shared/peeps/peeps-sad-mainbg.jpg";
import { $authStatus } from "@/entities/auth-status/model/auth-status.ts";
import { useStore } from "effector-react";
import clsx from "clsx";
const Register = () => {
  const navigate = useNavigate();
  const status = useStore($authStatus);
  return (
    <div className="flex w-full h-full items-center justify-between px-[50px]">
      <div className="flex flex-col items-center justify-center bg-secondaryColorAccent rounded-xl px-[26px] w-full h-[90%] max-w-[2000px]">
        <h1 className="text-secondaryColor text-40px font-bold leading-normal my-[76px]">
          Register
        </h1>
        <div className="w-full">
          <RegisterForm />
          <p className="text-secondaryColor my-5">
            No have an account?
            <span
              className="ml-2 cursor-pointer"
              onClick={() => navigate(LOGIN_ROUTE)}
            >
              Register!
            </span>
          </p>
        </div>
      </div>
      <img
        className={clsx("w-full h-full max-w-[700px]")}
        src={status === "success" ? peepsHappy : peepsSad}
        alt="Peeps"
      />
    </div>
  );
};

export default Register;
