import React from "react"
import styles from './imgList.module.css'



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
        <a className={styles.link} href='/../articles/timer/'
        target='_blank'
       > 
    
       <strong>02</strong> 现在时间-demo</a>
       </div>
    
      
</nav>
)