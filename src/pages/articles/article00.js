import React from "react"
import styles from "./article01.js.module.css"
import pic01 from "./imgs/01.png"




export default () => (
	<article className={styles.container}>
    
    <h1 className={styles.h1}>
    demo代码 GitHub链接
    </h1>
    
    <div className={styles.date}>
    2018-12-13
    </div>

    <ol>
    <a href="#header01">
    <li>Node.js demo代码链接</li>
    </a>
    <a href="#header02">
    <li>Jest+Enzyme测试 demo代码链接</li>
    </a>
    <a href="#header03">
    <li>Markdown 语法讲解链接</li>
    </a>
    </ol>
    
    <h1 name="header01">
    01-Node.js demo代码链接
    </h1>
  
    <ol>
    
    <li>
    读取文件之 <a href='https://github.com/MichaelYLZ/-readFileSync' target='_blank' rel="noopener noreferrer">readFileSync</a> 
    </li>
    
    <li>
    读取文件之 <a href='https://github.com/MichaelYLZ/node_basic_readFile' target='_blank' rel="noopener noreferrer">readFile</a>
    </li>
    
    <li>
    读取文件之 <a href='https://github.com/MichaelYLZ/node_basic_require' target='_blank' rel="noopener noreferrer">require</a>
    </li>
    
    <li>
    写入之 <a href='https://github.com/MichaelYLZ/node_basic_-writeFileSync' target='_blank' rel="noopener noreferrer">writeFileSync</a>
    </li>
    
    <li>
    写入之 <a href='https://github.com/MichaelYLZ/node_basic_-writeFileSync_02' target='_blank' rel="noopener noreferrer">writeFileSync </a>输出进行排版
    </li>
    
    <li>
    写入之 <a href='https://github.com/MichaelYLZ/node_basic_writeFile' target='_blank' rel="noopener noreferrer">writeFile</a>
    </li>
    
    </ol>
   
    <h1 name="header02">
    02 Jest+Enzyme测试 demo代码链接
    </h1>
    
    <ol>
    
    <li>
    <a href='https://github.com/MichaelYLZ/basic_Jest_test' target='_blank' rel="noopener noreferrer">最基本测试代码/模板</a>
    </li>
    
   
    <li>
    
    </li>
    
    </ol>
    
    <h1 name="header03">
    03-Markdown 语法讲解链接
    </h1>
    
    <a href='https://www.markdownguide.org/basic-syntax' target='_blank' rel="noopener noreferrer">这个网站</a> <span className={styles.code}>markdown</span>讲得不错<br/>
    
  
    <a href='' target='_blank' rel="noopener noreferrer">具体操作可点击这里</a><br/>
    
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
    
    <a href='baidu.com' target='_blank' rel="noopener noreferrer">具体操作可点击这里</a>
   
    </article>
)