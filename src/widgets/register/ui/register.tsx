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
    <div className="flex  justify-center items-center w-full">
      <div className="flex flex-col items-center bg-authBG h-full rounded-xl py-10 w-2/4">
        <h1 className="text-secondaryColor text-40px font-bold leading-normal mt-10">
          Registration
        </h1>
        <div className="mt-[45px] w-1/2">
          <RegisterForm />
          <p className="text-secondaryColor mt-5">
            Have account?
            <span
              className="ml-2 cursor-pointer"
              onClick={() => navigate(LOGIN_ROUTE)}
            >
              Login
            </span>
          </p>
        </div>
      </div>
      <img src={status === "error" ? peepsSad : peepsHappy} alt="" />
    </div>
  );
};

export default Register;
