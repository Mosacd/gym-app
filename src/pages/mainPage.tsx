import LeverBeltBanner from "@/pageComponents/forHome/advert/advert";
import CaruselForMain from "@/pageComponents/forHome/carouselMain/carusel";
import FeaturesSection from "@/pageComponents/forHome/featuresSection/featuresSection";
import HeroBanner from "@/pageComponents/forHome/heroBanner/heroBanner";


const Main = () =>{
    console.log("main")
    return(
        <>
        <HeroBanner />
      <CaruselForMain/>
      <LeverBeltBanner/>
      <CaruselForMain/>
      <FeaturesSection/>
        </>
    )

}


export default Main;