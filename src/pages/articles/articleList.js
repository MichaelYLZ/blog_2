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
          <strong>01</strong> GitHub Demo代码汇总+常用网站链接
        </a>
      </div>
    
     <div className={styles.down}>
        <a className={styles.link} 
           href='/../articles/article11/'
           target='_blank'
        >
          <strong>02</strong> 提高JS代码可读性小结
        </a>
     </div>
    
     <div className={styles.up}>
        <a className={styles.link} 
           href='/../articles/article04/'
           target='_blank'
        >
          <strong>03</strong> webpack-loader运行顺序及写法
        </a>
       </div>
    
      <div className={styles.down}>
        <a className={styles.link} 
           href='/../articles/article05/'
           target='_blank'
        >
          <strong>04</strong> 学习Sass
        </a>
       </div>
    
     <div className={styles.up}>
        <a className={styles.link} 
           href='/../articles/article07/'
           target='_blank'
        >
          <strong>05</strong> 介绍 webpack.config.babel.js
        </a>
       </div>
    
     <div className={styles.down}>
        <a className={styles.link} 
           href='/../articles/article08/'
           target='_blank'
        >
          <strong>06</strong> 解释 [hash]-[chunkhash]-[contenthash]
        </a>
       </div>
    
      <div className={styles.up}>
        <a className={styles.link} href='/../articles/article01/'
        target='_blank'
       > 
       <strong>07</strong> 我的全栈React + Express APP介绍</a>
       </div>
    
      <div className={styles.down}>
        <a className={styles.link} 
           href='/../articles/article02/'
           target='_blank'
        >
          <strong>08</strong> 前后端交互的实践与小结
        </a>
       </div>
    
     <div className={styles.up}>
        <a className={styles.link} href='/../articles/article09/'
        target='_blank'
       > 
       <strong>09</strong> webpack官网摘抄 01</a>
     </div>
    
    <div className={styles.down}>
        <a className={styles.link} 
           href='/../articles/article10/'
           target='_blank'
        >
          <strong>10</strong> webpack官网摘抄 02
        </a>
    </div>
      
</nav>
)