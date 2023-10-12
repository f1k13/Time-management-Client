import { LOGIN_ROUTE } from "@/app/routes/paths";
import { RegisterForm } from "@/features/register-form/ui";
import { useNavigate } from "react-router-dom";
import peepsHappy from "../../../shared/peeps/peeps-happy-mainbg.jpg";
import peepsSad from "../../../shared/peeps/peeps-sad-mainbg.jpg";
import { $notification } from "@/entities/notification/model/notification";
import { useStore } from "effector-react";
const Register = () => {
  const navigate = useNavigate();
  const { status } = useStore($notification);
  console.log(status);
  return (
    <div className="flex w-full h-full items-center justify-between px-[50px]">
      <div className="flex flex-col items-center justify-center bg-secondaryColorAcsent rounded-xl px-[26px] w-full h-[60%]">
        <h1 className="text-secondaryColor text-40px font-bold leading-normal mt-5">
          Registration
        </h1>
        <div className="w-full">
          <RegisterForm />
          <p className="text-secondaryColor my-5">
            Have a account?
            <span
              className="ml-2 cursor-pointer"
              onClick={() => navigate(LOGIN_ROUTE)}
            >
              Login!
            </span>
          </p>
        </div>
      </div>
      <div className="h-full w-1/2">
        <img
          className="w-full h-screen object-cover"
          src={status === "error" ? peepsSad : peepsHappy}
          alt="Peeps"
        />
      </div>
    </div>
  );
};

export default Register;
