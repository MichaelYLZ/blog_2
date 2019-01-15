import React from "react"
import styles from "./article01.js.module.css"

export default () => (
	<article className={styles.container}>
    
    <h1 className={styles.h1}>
    GitHub Demo代码汇总+常用网站链接
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
    <li>常用网站链接</li>
    </a>
     <a href="#header04">
    <li>React和Redux 相关</li>
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
    <a href='https://github.com/MichaelYLZ/react_test' target='_blank' rel="noopener noreferrer">
    思路完整的React 组件测试
    </a>
    </li>
    
    </ol>
    
    <h1 name="header03">
    03-常用网站链接
    </h1>
    
    <ol>
    
    <li>
    <a href='https://hackerthemes.com/bootstrap-cheatsheet/' target='_blank' rel="noopener noreferrer">bootstrap 4 class合集</a>
    </li>
    
    <li>
    <a href='https://www.markdownguide.org/basic-syntax' target='_blank' rel="noopener noreferrer">这个网站</a> <span className={styles.code}>markdown</span>讲得不错
    </li>
    
   
    <li>
    <a href='https://www.netlify.com/blog/2016/02/24/a-step-by-step-guide-gatsby-on-netlify/' target='_blank' rel="noopener noreferrer">netlify</a>
    </li>
    
    <li>
    <a href='https://github.com/MichaelYLZ/About_IIFE' target='_blank' rel="noopener noreferrer">关于IIFE</a>
    </li>
    
    <li>
    <a href='https://www.favicon-generator.org/' target='_blank' rel="noopener noreferrer">
    自动生成网站Favicon.ico神器
    </a>
    </li>
    
    <li>
    <a href='https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch' target='_blank' rel="noopener noreferrer">
    fetch MDN讲解
    </a>
    </li>
    
    <li>
    <a href='https://css-tricks.com/using-fetch/' target='_blank' rel="noopener noreferrer">
    fetch 学习资料
    </a>
    </li>
    
    <li>
    <a href='https://jsonplaceholder.typicode.com/' target='_blank' rel="noopener noreferrer">
    fetch 实战资源--JSONPlaceholder
    </a>
    </li>
    
    <li>
    <a href='https://www.hostingadvice.com/how-to/nodejs__dirname/' target='_blank' rel="noopener noreferrer">
    原生Node Path 讲解01
    </a>
    </li>
    
    <li>
    <a href='https://flaviocopes.com/node-module-path/' target='_blank' rel="noopener noreferrer">
    原生Node Path 讲解02
    </a>
    </li>
    
    <li>
    <a href='https://tylermcginnis.com/blog' target='_blank' rel="noopener noreferrer">
    不错的JS-React 讲解博客
    </a>
    </li>
    
    <li>
    <a href='https://github.com/axios/axios' target='_blank' rel="noopener noreferrer">
    axios讲解 github主页
    </a>
    </li>
    
    <li>
    <a href='https://flaviocopes.com/axios/' target='_blank' rel="noopener noreferrer">
    axios 资料02
    </a>
    </li>
    
    <li>
    <a href='http://codeheaven.io/how-to-use-axios-as-your-http-client/' target='_blank' rel="noopener noreferrer">
    axios 资料03
    </a>
    </li>
    
    <li>
    <a href='https://www.sitepoint.com/axios-beginner-guide/' target='_blank' rel="noopener noreferrer">
    axios 资料04 sitepoint
    </a>
    </li>
    
    <li>
    <a href='https://www.codecademy.com/articles/what-is-cors' target='_blank' rel="noopener noreferrer">
    cors 跨域入门讲解
    </a>
    </li>
    
    <li>
    <a href='https://webpack.jakoblind.no/' target='_blank' rel="noopener noreferrer">
    Webpack 开发神奇/(工具)
    </a>
    </li>
    
    <li>
    <a href='http://blog.jakoblind.no/' target='_blank' rel="noopener noreferrer">
    综合性资源01-挪威程序员-React-webpack-redux相关
    </a>
    </li>
    
    <li>
    <a href='https://www.techiediaries.com/' target='_blank' rel="noopener noreferrer">
    综合性资源02-React-Vue-Angular-Django
    </a>
    </li>
    
    <li>
    <a href='https://www.sohamkamani.com/blog' target='_blank' rel="noopener noreferrer">
    综合性资源03-Soham
    </a>
    </li>
    
    <li>
    <a href='https://coursework.vschool.io/mongoose-schemas/' target='_blank' rel="noopener noreferrer">
    数据库-Mongoose讲解Schema
    </a>
    </li>

    <li>
    <a href='https://coursework.vschool.io/mongoose-crud/' target='_blank' rel="noopener noreferrer">
    数据库-Mongoose讲解CRUD
    </a>
    </li>

    <li>
    <a href='https://www.codecademy.com/articles/what-is-rest' target='_blank' rel="noopener noreferrer">
    HTTP 基础知识讲解-01
    </a>
    </li>

    <li>
    <a href='https://www.codecademy.com/articles/http-requests' target='_blank' rel="noopener noreferrer">
    HTTP 基础知识讲解-02
    </a>
    </li>

    <li>
    <a href='https://www.codecademy.com/articles/what-is-crud' target='_blank' rel="noopener noreferrer">
    HTTP 基础知识讲解-03
    </a>
    </li>
    
    </ol>
    
    <h1 name="header04">
    04-React 相关
    </h1>
    
    <ol>
    <li>
    <a href='https://github.com/MichaelYLZ/redux_src_code' target='_blank' rel="noopener noreferrer">
    Redux 相关源码
    </a>
    </li>

    <li>
    <a href='https://github.com/MichaelYLZ/simple_react_fetch' target='_blank' rel="noopener noreferrer">
    简单React fetch GET请求
    </a>
    </li>
    
   
    <li>
    <a href='https://github.com/MichaelYLZ/express_react_basic' target='_blank' rel="noopener noreferrer">
    React+Express 实现最基本的GET
    </a>
    </li>
    
    <li>
    <a href='https://github.com/MichaelYLZ/sentenceApp_doesNotWork' target='_blank' rel="noopener noreferrer">
    React+Express+数据库(JSON文件) 全栈APP--有个问题-头疼
    </a>
    </li>

    <li>
    <a href='https://github.com/MichaelYLZ/front_end_done' target='_blank' rel="noopener noreferrer">
    一句话APP React+Express+数据库(JSON文件)--前端部分搞定
    </a>
    </li>

    <li>
    <a href='https://github.com/MichaelYLZ/post_done' target='_blank' rel="noopener noreferrer">
    一句话APP React+Express+数据库(JSON文件)--后端实现了GET和POST
    </a>
    </li>

    <li>
    <a href='https://github.com/MichaelYLZ/app_production' target='_blank' rel="noopener noreferrer">
    一句话APP React+Express+数据库(JSON文件)--应用版
    </a>
    </li>

    <li>
    <a href='https://github.com/MichaelYLZ/app_all_code' target='_blank' rel="noopener noreferrer">
    一句话APP React+Express+数据库(JSON文件)--全部代码(非应用版)
    </a>
    </li>

    <li>
    <a href='https://github.com/MichaelYLZ/axios_practise' target='_blank' rel="noopener noreferrer">
    练习Axios HTTP请求
    </a>
    </li>
    
    </ol> 
    </article>
)