import beltimg from '../assets/BeltHeader_1a.webp'
import { Button } from './ui/button';
const LeverBeltBanner = () => {
  return (
    <div className="relative bg-black text-white">
      <div className="relative flex items-center justify-center bg-cover bg-center" 
           style={{ backgroundImage: `url(${beltimg})` }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center p-32">
          <h3 className="text-base md:text-lg font-semibold uppercase tracking-wide">BLK/BLK</h3>
          <h1 className="text-purple-800 text-3xl md:text-4xl font-bold tracking-wider">LEVER BELT</h1>
          <p className="text-xl md:text-2xl font-medium mt-2 tracking-wide">40% SALE</p>
          <Button className="mt-4 px-8 py-6 text-white font-bold">
            SHOP NOW
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LeverBeltBanner;
