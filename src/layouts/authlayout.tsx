
import { Outlet } from "react-router-dom";

const AuthLayout: React.FC = () =>{

    return(
    <div className='bg-white min-h-screen items-center justify-center flex w-full max-w-full overflow-x-hidden dark:bg-neutral-950'>
    <div className="w-full">
        <Outlet/>
        </div>
        </div>
  
    )
    
}


export default AuthLayout;