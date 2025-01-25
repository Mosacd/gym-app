import FormElement from "./form/form"


const LogIn = () =>{
  return(
    <div className="py-10 flex flex-col items-center gap-5 px-6 sm:p-36">
            <h1 className="text-3xl text-purple-900 md:text-4xl cursor-pointer font-bold italic hover:text-purple-900 font-mono">GymGear</h1>
    <div className="max-w-sm flex-col m-auto rounded-xl p-5 border-4 justify-center items-center flex w-full dark:border-neutral-800">
      <h1 className="text-2xl mb-5 font-semibold dark:text-white">Log In</h1>
      <FormElement/>
      </div>
      </div>
  )
} 

export default LogIn