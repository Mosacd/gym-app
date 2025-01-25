
import { Outlet } from "react-router-dom";

const AuthLayout: React.FC = () =>{

    return(
    <div className='bg-white w-full max-w-full overflow-x-hidden dark:bg-neutral-950'>
    <div className="mt-20">
        <Outlet/>
        </div>
        </div>
  
    )
    
}


export default AuthLayout;