import Footer from "@/pageComponents/footer/footer";
import Header from "@/pageComponents/header/header";
import { Outlet } from "react-router-dom";

const DashboardLayout: React.FC = () =>{

    return(
    <div className='bg-white w-full max-w-full overflow-x-hidden dark:bg-neutral-950'>
        <Header/>

    <div className="mt-20 min-h-screen">
        <Outlet/>
        </div>

        <Footer />
        </div>
  
    )
    
}


export default DashboardLayout;