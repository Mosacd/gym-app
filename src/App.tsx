import React from 'react';
import Navbar from './components/navBar';
import HeroBanner from './components/heroBanner';
import FeaturesSection from './components/featuresSection';
import Footer from './components/footer';
import CaruselForMain from './components/carusel';
import LeverBeltBanner from './components/advert';
import { ThemeProvider } from "@/components/theme-provider"

const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    <div className='dark:bg-neutral-950 w-full max-w-full overflow-x-hidden'>
      <Navbar />
      <HeroBanner />
      <CaruselForMain/>
      <LeverBeltBanner/>
      <CaruselForMain/>
      <FeaturesSection/>
      <Footer />
    </div>
    </ThemeProvider>
  );
};

export default App;
