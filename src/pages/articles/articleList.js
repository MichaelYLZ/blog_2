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
    
      <div className={styles.up}>
        <a className={styles.link} 
           href='/../articles/article02/'
           target='_blank'
        >
          <strong>03</strong> webpack 4 初体验
        </a>
       </div>
    
     <div className={styles.down}>
        <a className={styles.link} href='/../articles/article03/'
        target='_blank'
       > 
       <strong>04</strong> webpack 4 VS 正则</a>
       </div>
    
     <div className={styles.up}>
        <a className={styles.link} 
           href='/../articles/article04/'
           target='_blank'
        >
          <strong>05</strong> webpack 4 汇总
        </a>
       </div>
    
      <div className={styles.down}>
        <a className={styles.link} 
           href='/../articles/article05/'
           target='_blank'
        >
          <strong>06</strong> 学习Sass
        </a>
       </div>
    
      <div className={styles.up}>
        <a className={styles.link} 
           href='/../articles/article06/'
           target='_blank'
        >
          <strong>07</strong> 我的博客性能报告-未优化前
        </a>
       </div>
    
     <div className={styles.down}>
        <a className={styles.link} 
           href='/../articles/article07/'
           target='_blank'
        >
          <strong>08</strong> 学习 PostCSS
        </a>
       </div>
      
</nav>
)