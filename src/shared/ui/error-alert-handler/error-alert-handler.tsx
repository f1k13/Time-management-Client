const ErrorAlertHandler = ({ status }: { status?: string }) => {
  return (
    <div className="relative">
      <div className="bg-errorBG absolute bottom-[250px] left-1/2 w-3/4 h-[55px] flex justify-between items-center p-2 rounded-xl">
        {status}
      </div>
    </div>
  );
};

export default ErrorAlertHandler;
