import React from "react"
import styles from "./article01.js.module.css"
import pic01 from "./imgs/01.png"




export default () => (
	<article className={styles.container}>
    
    <h1 className={styles.h1}>
    我的小型全栈APP介绍
    </h1>
    
    <div className={styles.date}>
    2018-12-21
    </div>
    
    <div>
    这篇博客是对最近自己写的一个小型全栈APP，前前后后的一些总结，介绍。
    </div>
    <br/>
    
    <ol>
    
    <a href="#header01">
    <li>APP 功能介绍</li>
    </a>
    
    <a href="#header02">
    <li>使用到的技术</li>
    </a>
    
    <a href="#header03">
    <li>最重要的是思路</li>
    </a>
    
    <a href="#header04">
    <li>我的收获</li>
    </a>
    
    <a href="#header05">
    <li>参考的App GitHub链接</li>
    </a>
    
    </ol>
    
    <h2 name="header01">
    01-APP 功能介绍
    </h2>
    
    <div>
    我给这个APP起得名字是<span className={styles.code}>一句话APP</span>。功能其实跟 To Do List 很像：
    </div>
    <br/>
    
    
    
    
    
    
    
    
    
    
    <h2 name="header02">
    使用到的技术
    </h2>
    
    <h2 name="header03">
    最重要的是思路
    </h2>
    
    <h2 name="header04">
     我的收获
    </h2>
   
    <h2 name="header05">
    参考的App GitHub链接
    </h2>
    
    关键词
    <span className={styles.code}>Gatsby</span>
    
    图片
    <br />
    <div>
    <img src={pic01} alt="Gatsby大量使用无状态组件" className={styles.img}/>
    </div>
    <br />
    
    可复制代码块01
    
    <div className={styles.codeblock}>
    <pre className={styles.pre}>
    <code data-lang="javascript">
    import ApolloClient from 'apollo-boost';
    </code>
    </pre>
    </div> 
    
    
	<div>
    正文
    </div>
    <br/>
    
    文章小节链接--需修改
    <ol>
    <a href="#header01">
    <li>不只react</li>
    </a>
    <a href="#header02">
    <li>Gatsby使用体验</li>
    </a>
    </ol>
    
    链接
    
    <a href='https://www.netlify.com/blog/2016/02/24/a-step-by-step-guide-gatsby-on-netlify/' target='_blank' rel="noopener noreferrer">具体操作可点击这里</a>
   
    </article>
)