import Footer from "@/pageComponents/footer/footer";
import Header from "@/pageComponents/header/header";
import { Outlet } from "react-router-dom";

const DashboardLayout: React.FC = () => {
  return (
    <div className="relative bg-white w-full max-w-full overflow-x-hidden dark:bg-neutral-950 min-h-screen overflow-hidden">
      {/* Decorative Background Elements - Straight Lines */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        {/* <div className="absolute hidden lg:inline  top-0 left-1/3  w-20 h-full bg-black opacity-5 dark:bg-white"></div> */}
        <div className="absolute  top-0 left-10 md:left-20 w-20 h-full bg-black opacity-5 dark:bg-white"></div>
        {/* <div className="absolute hidden lg:inline  top-0 right-1/3 w-20 h-full bg-black opacity-5 dark:bg-white"></div> */}
        <div className="absolute  top-0 right-10 md:right-20 w-20 h-full bg-black opacity-5 dark:bg-white"></div>
       
      </div>

      <Header />

      <div className="relative mt-20 min-h-screen z-10">
        <Outlet />
      </div>
      <div className="relative"> 
      <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
