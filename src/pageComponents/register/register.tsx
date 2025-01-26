import RegisterForm from "./form/form";

const Register = () => {
  return (
    <div className="py-3 sm:py-10 px-6">
      <div className="max-w-sm sm:max-w-lg flex-col m-auto rounded-xl p-5 border-4 justify-center items-center flex w-full dark:border-neutral-800">
        <h1 className="text-xl sm:text-2xl mb-5 font-semibold dark:text-white">
          Register
        </h1>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
