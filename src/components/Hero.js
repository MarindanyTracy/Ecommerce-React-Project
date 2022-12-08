import React from "react";
import styles from "./Hero.module.css";
import HeroImg from "../assets/hero.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { duration: 3, type: "spring" };

  return (
    <div className={styles.container}>
      {/* left side */}
      <div className={styles.h_sides}>
        <span className={styles.text1}>Skin protection cream</span>
        <div className={styles.text2}>
          <span>Trendy Collection</span>
          <span>
            Reference site about Lorem Ipsum, giving information on its origins,
            as well as a random Lipsum generator.{" "}
          </span>
        </div>
      </div>

      {/* middle side */}
      <div className={styles.wrapper}>
        {/* blueCircle */}
        <motion.div
          initial={{ bottom: "2rem" }}
          whileInView={{ bottom: "0rem" }}
          transition={transition}
          className={styles.blueCircle}
        ></motion.div>

      {/* hero image */}
        <motion.img 
        transition={transition}
        initial={{bottom: "-2rem"}}
        whileInView={{bottom: "0rem"}}
        src={HeroImg} 
        alt="a person"
         width={600}></motion.img>


      {/* cart div animating */}
        <motion.div 
        transition={transition}
        initial={{right: '4%'}}
        whileInView={{right:'2%'}}
        className={styles.cart2}>
          <RiShoppingBagFill />

          <div className={styles.signup}>
            <span>Best Signup Offers</span>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </motion.div>
      </div>

      {/* right side */}
      <div className={styles.h_sides}>
        <div className={styles.traffic}>
          <span>1.5m</span>
          <span>Monthly Traffic</span>
        </div>

        <div className={styles.customers}>
          <span>100k</span>
          <span>Happy Customers</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
