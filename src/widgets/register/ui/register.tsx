import { LOGIN_ROUTE } from "@/app/routes/paths";
import { RegisterForm } from "@/features/register-form/ui";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full h-full items-center justify-center px-[50px]">
      <div className="flex flex-col items-center justify-center bg-secondaryColorAccent rounded-xl px-[26px] w-full h-[95%]">
        <h1 className="text-secondaryColor text-40px font-bold leading-normal my-[76px]">
          Register
        </h1>
        <div className="w-full">
          <RegisterForm />
          <p className="text-secondaryColor my-5 ">
            Have an account?
            <span
              className="ml-2 cursor-pointer"
              onClick={() => navigate(LOGIN_ROUTE)}
            >
              Login!
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
