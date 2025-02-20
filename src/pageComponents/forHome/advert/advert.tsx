import beltimg from "@/assets/BeltHeader_1a.webp";
import { Button } from "@/componentsShadcn/ui/button";
import { motion } from "framer-motion";
import {
  banner,
  bannerInner,
  overlay,
  content,
  subHeading,
  heading,
  saleText,
  button,
} from "./advert.styles";
import { Link } from "react-router-dom";

const LeverBeltBanner = () => {
  return (
    <motion.div
      className={banner()}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div
        className={bannerInner()}
        style={{ backgroundImage: `url(${beltimg})` }}
      >
        <div className={overlay()}></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className={content()}
        >
          <h3 className={subHeading()}>BLK/BLK</h3>
          <h1 className={heading()}>LEVER BELT</h1>
          <p className={saleText()}>40% SALE</p>
          <Link to="/dashboard/products">
            <Button className={button()}>SHOP NOW</Button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LeverBeltBanner;
