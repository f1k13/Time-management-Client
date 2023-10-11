import { LOGIN_ROUTE } from "@/app/routes/paths";
import { RegisterForm } from "@/features/register-form/ui";
import { useNavigate } from "react-router-dom";
import peepsHappy from "../../../shared/peeps/peeps-happy-mainbg.jpg";
import peepsSad from "../../../shared/peeps/peeps-sad-mainbg.jpg";

const Register = () => {
  const navigate = useNavigate();
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
        
        src={status === "error" ? peepsSad : peepsHappy}
        alt=""
      />
    </div>
  );
};

export default Register;
