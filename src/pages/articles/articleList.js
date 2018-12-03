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
           href='/../articles/article00/'
           target='_blank'
        >
          <strong>01</strong> JS 那些事儿
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
          <strong>05</strong> webpack-loader运行顺序及写法
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
          <strong>08</strong> webpack 4 汇总 02
        </a>
       </div>
    
     <div className={styles.up}>
        <a className={styles.link} 
           href='/../articles/article08/'
           target='_blank'
        >
          <strong>09</strong> 安利一个webpack 4 学习网站
        </a>
       </div>
    
      <div className={styles.down}>
        <a className={styles.link} 
           href='/../articles/article09/'
           target='_blank'
        >
          <strong>10</strong> webpack 4 官网摘抄01
        </a>
       </div>
    
      <div className={styles.up}>
        <a className={styles.link} 
           href='/../articles/article10/'
           target='_blank'
        >
          <strong>11</strong> webpack 4 官网摘抄02
        </a>
       </div>
    
      
</nav>
)