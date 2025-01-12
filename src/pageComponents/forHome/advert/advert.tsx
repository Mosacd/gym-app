import beltimg from '@/assets/BeltHeader_1a.webp';
import { Button } from '@/components/ui/button';

import {
  banner,
  bannerInner,
  overlay,
  content,
  subHeading,
  heading,
  saleText,
  button,
} from './advert.styles';

const LeverBeltBanner = () => {
  return (
    <div className={banner()}>
      <div
        className={bannerInner()}
        style={{ backgroundImage: `url(${beltimg})` }}
      >
        <div className={overlay()}></div>
        <div className={content()}>
          <h3 className={subHeading()}>BLK/BLK</h3>
          <h1 className={heading()}>LEVER BELT</h1>
          <p className={saleText()}>40% SALE</p>
          <Button className={button()}>SHOP NOW</Button>
        </div>
      </div>
    </div>
  );
};

export default LeverBeltBanner;
