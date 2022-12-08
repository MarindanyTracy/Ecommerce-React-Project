import React from 'react';
import styles from './Hero.module.css';
import HeroImg from '../assets/hero.png';
import { RiShoppingBagFill } from 'react-icons/ri';
import { BsArrowRight } from 'react-icons/bs';


const Hero = () => {
  return (
    <div className={styles.container}>
      {/* left side */}
      <div className={styles.h_sides}>
        <span className={styles.text1}>Skin protection cream</span>
        <div className={styles.text2}>
          <span>Trendy Collection</span>
          <span>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator. </span>
        </div>
      </div>

      {/* middle side */}
      <div className={styles.wrapper}>
        <div className={styles.blueCircle}></div>
        <img src={HeroImg} alt='a person' width={600}></img>
        <div className={styles.cart2}>
          <RiShoppingBagFill />


          <div className={styles.signup}>
            <span>Best Signup Offers</span>
            <div>
              <BsArrowRight />
            </div>
          </div>

        </div>
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
  )
}

export default Hero
