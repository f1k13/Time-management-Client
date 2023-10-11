import { LOGIN_ROUTE } from "@/app/routes/paths";
import { RegisterForm } from "@/features/register-form/ui";
import { useNavigate } from "react-router-dom";
import peepsHappy from "../../../shared/peeps/peeps-happy-mainbg.jpg";
import peepsSad from "../../../shared/peeps/peeps-sad-mainbg.jpg";
import { useStore } from "effector-react/compat";
import { $status } from "@/entities/error/model/status";
const Register = () => {
  const navigate = useNavigate();
  const status = useStore($status);
  return (
    <div className="flex pl-20 items-center w-full">
      <div className="flex flex-col items-center bg-authBG h-full rounded-xl p-[50px]">
        <h1 className="text-labelColor text-40px font-bold leading-normal mt-10">
          Registration
        </h1>
        <div className="mt-[45px]">
          <RegisterForm />
          <p className="text-labelColor mt-5">
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
      <img
        className="w-1/2 h-[900px]"
        src={status === "error" ? peepsSad : peepsHappy}
        alt=""
      />
    </div>
  );
};

export default Register;
