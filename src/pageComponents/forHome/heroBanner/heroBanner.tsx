import React from "react";
import gymheroimg from "@/assets/pexels-binyaminmellish-17840.jpg";
import { Button } from "../../../componentsShadcn/ui/button";
import {
  heroSectionClass,
  overlayClass,
  contentClass,
  headingClass,
  paragraphClass,
  buttonContainerClass,
  buttonClass,
  ghostButtonClass,
} from "./heroBanner.styles";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroBanner: React.FC = () => {
  return (
    <section
      className={heroSectionClass()}
      style={{
        backgroundImage: `url(${gymheroimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className={overlayClass()}></div>

      {/* Content */}
      <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className={contentClass()}>
        <h1 className={headingClass()}>Empower Your Fitness Journey</h1>
        <p className={paragraphClass()}>
          Premium gear for athletes who demand the best.
        </p>
        <div className={buttonContainerClass()}>
          <Link to="/dashboard/products">
            <Button variant={"default"} className={buttonClass()}>
              Shop Now
            </Button>
          </Link>
          <Button variant={"ghost"} className={ghostButtonClass()}>
            Learn More
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroBanner;
