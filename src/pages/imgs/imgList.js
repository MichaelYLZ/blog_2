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
           href='../bestLooking/'
           target='_blank'
         >
          <strong>01</strong>
            编程书籍封面-高颜值系列
         </a>
      </div>

      <div className={styles.down}>
        <a className={styles.link} href='../OReillyBooks/'
        target='_blank'
        > 
        <strong>02</strong> 编程书籍封面-O'Reilly 动物王国系列01</a>
       </div>
    
      <div className={styles.down}>
        <a className={styles.link} href='../OReillyBooks02/'
        target='_blank'
        > 
        <strong>03</strong> 编程书籍封面-O'Reilly 动物王国系列02</a>
       </div>
    
       <div className={styles.down}>
        <a className={styles.link} href='../ManningBooks/'
        target='_blank'
        > 
        <strong>04</strong> 编程书籍封面-Manning 系列</a>
       </div>
      
</nav>
)