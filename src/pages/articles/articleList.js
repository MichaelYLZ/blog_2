import React from "react"
import styles from './articleList.module.css'



export default () => (
  <nav>
      <a className={styles.back} href='/'>
        &#10094;&#10094;
      </a>
      <h2>文章目录</h2>

      <div className={styles.up}>
        <a className={styles.link} 
           href='/../articles/timer/'
           target='_blank'
        >
    
          <strong>01</strong> 倒计时-demo
        </a>
      </div>

      <div className={styles.down}>
        <a className={styles.link} href='/../articles/article01/'
        target='_blank'
       > 
    
       <strong>02</strong> Gatsby简介</a>
       </div>
    
      
</nav>
)