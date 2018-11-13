import React from "react"
import styles from "./homepage.module.css"
import Layout from '../components/layout'

const NavLinks = () => (
  <Layout>
  <nav className={styles.linkContainer}>
    <a href='/self/' className={styles.link}>
          文章
   </a>
    
    <a href='/self/' className={styles.link}>
          相册
    </a>
    
    <a href='/self/' className={styles.link}>
          关于博主
    </a>
    
    <a href='/self/' className={styles.link}>
          关于本站
    </a>
  </nav>
</Layout>
);
export default NavLinks;