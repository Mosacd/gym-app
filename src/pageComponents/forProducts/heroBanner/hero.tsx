import beltimg from "@/assets/pexels-franki-frank-11513151.jpg";

import {
  banner,
  bannerInner,
  overlay,
  content,
  heading,
} from "./hero.styles.ts";

const ProductsHeroBanner = () => {
  return (
    <div className={banner()}>
      <div
        className={bannerInner()}
        style={{
          backgroundImage: `url(${beltimg})`,
          backgroundPosition: "50% 65%",
        }}
      >
        <div className={overlay()}></div>
        <div className={content()}>
          <h1 className={heading()}>
            Quality, long-lasting fitness equipment and active wear to help your
            healthy lifestyle
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProductsHeroBanner;
