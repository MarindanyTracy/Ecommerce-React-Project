import React from 'react';
import styles from './Header.module.css';
import Logo from '../assets/logo.png';
import {CgShoppingBag} from 'react-icons/cg';

const Header = () => {
  return (
    <div  className={styles.container}>
      <div className={styles.logo}>
        <img src={Logo} alt="logo" />
        <span>Amazon</span>
      </div>
      <div className={styles.right}>
        <div className={styles.menu}>
          <ul className={styles.menu}>
            <li>Collections</li>
            <li>Brands</li>
            <li>New</li>
            <li>Sales</li>
            <li>ENG</li>
          </ul>
        </div>

      

      <input type="text" className={styles.search}placeholder='Search Here' />

      <CgShoppingBag className={styles.cart} />
      </div>
    </div>
  )
}

export default Header
