// import { Link } from "react-router-dom"
import FormElement from "./form/form";

const LogIn = () => {
  return (
    <div className="py-3 sm:py-10 px-6 ">
      <div className="max-w-sm flex-col bg-white dark:bg-neutral-950 m-auto rounded-xl p-5 border-4 justify-center items-center flex w-full dark:border-neutral-800">
        <h1 className="text-xl sm:text-2xl mb-5 font-semibold dark:text-white">
          Log In
        </h1>
        <FormElement />
      </div>
    </div>
  );
};

export default LogIn;
