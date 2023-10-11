import { errorsList } from "@/shared/lib/errors-form-list";
import { ValidationError } from "effector-forms";

const FormErrorHandler = ({
  error,
}: {
  error?: ValidationError<string> | null;
}) => {
  if (!error) return null;
  return <div>{errorsList[error.rule]}</div>;
};

export default FormErrorHandler;
