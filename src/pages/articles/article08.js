import React from "react"
import styles from "./article01.js.module.css"
import pic96 from "./imgs/96.png"




export default () => (
	<article className={styles.container}>
    
    <h1 className={styles.h1}>
    安利一个webpack 4 学习网站
    </h1>
    
    <div className={styles.date}>
    2018-11-29
    </div>
    
    <div>
    先上资源。<br/> 
    <a href='https://survivejs.com/webpack/foreword/' target='_blank' rel="noopener noreferrer">学习网站链接</a>
    <br/><br/>
    好处是：<br/>
    01-免费；<br/>
    02-及时性有保证，有更新至<span className={styles.code}>webpack 4</span>。<br/>
    03-比官网讲得更细致。亚马逊美国站，美国网友对这本书评价很好。<br/>
    <br/>
    这本书是英文版的，貌似没有中文版。<br/><br/>
    另外，这个网站也有<span className={styles.code}>react</span>的讲解。
    </div>
    <br/>
    
    <br />
    <div>
    <img src={pic96} alt="推荐网站的webpack首页" className={styles.img}/>
    </div>
    <br />
    
    <br/><br/>
    <div>
    官网其实也很好。这几天都在跟着官网学习。<br/>
    但是官网有一个<strong>缺点</strong>。<br/>
    各知识点，官网只讲最基本语法。大部分情况，官网会提供链接。但是有时，啥链接都没有。
    </div>
    <br/>   
    </article>
)