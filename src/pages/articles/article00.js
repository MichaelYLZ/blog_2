import React from "react"
import styles from "./article01.js.module.css"
import pic01 from "./imgs/01.png"




export default () => (
	<article className={styles.container}>
    
    <h1 className={styles.h1}>
    00-JS 那些事儿
    </h1>
 
    <div className={styles.date}>
    2018-11-30
    </div>
    
    <div>
    仅以此文，表达我对JS的爱。
    </div>
    <br/>
    
    <ol>
    <a href="#header01">
    <li>JS官网</li>
    </a>
    
    <a href="#header02">
    <li>JS和Java</li>
    </a>
    
    <a href="#header03">
    <li>JS名字</li>
    </a>
    
    <a href="#header04">
    <li>JS最重点的特点</li>
    </a>
    
    <a href="#header05">
    <li>JS创始人</li>
    </a>
    
    <a href="#header06">
    <li>JS借鉴这些语言</li>
    </a>
    
    <a href="#header07">
    <li>单线程</li>
    </a>
    
    <a href="#header08">
    <li>JS异步编程</li>
    </a>
    
    <a href="#header09">
    <li>ES5/ES6</li>
    </a>
    
    <a href="#header10">
    <li>JS最新版本</li>
    </a>
    
    </ol>
    
    <h2 name="header01">
    01-JS官网
    </h2>
    
    <div>
    先上官网。<br/>
    https://developer.mozilla.org/en-US/docs/Web/JavaScript
    
    <br/><br/>
    我一开始就是跟着官网学习。现在想想，其实是个错误的选择。<br/><br/>
    
    JS官网不适合非计算机科班的人。<br/><br/>
    
    比如，官网教程中，完全没有提到常用数据结构的工作机制。
    <br/><br/>
    
    第一次见到recursion/递归代码的时候，我的头，晕了好久。<br/><br/>
    
    后来才知道，call stack，LIFO，是理解递归函数的关键。<br/><br/>
    
    我读过一本o'reilly 教材，上面提到，这些写官网教材的程序员，他们时间精力也有限，教材不可能详细到方方面面，每个细节。<br/><br/>
    
    这个网站的话，其实不只有JS讲解，例子。<br/>
    还有HTML讲解，CSS讲解，HTTP讲解，,DOM API，等等。
    </div>
    <br/>
    
    <h2 name="header02">
    02-JS和Java
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
   
    
    链接
    
    <a href='https://www.netlify.com/blog/2016/02/24/a-step-by-step-guide-gatsby-on-netlify/' target='_blank' rel="noopener noreferrer">具体操作可点击这里</a>
   
    </article>
)