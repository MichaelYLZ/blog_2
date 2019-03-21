import React from "react"
import "./cssForCV.css"




export default () => (
  <article>
    <h1 className="welcome">
    欢迎阅读我的简历
    </h1>
    
    <h2 className="head">
    李杨 
    </h2>
    
    <p className="intro data">
    本科/学士学位<br />
    来自江苏高邮<br />
    可以随时到岗<br />
    177-1289-6753 <br />liyang_shifan@163.com
    <br />
    <a href='https://liyang2019.netlify.com/' className="link" target='_blank'>个人React博客</a>
    </p>
    
    <h2 className="head extra">
    求职意向
    </h2>
                               
    <p className="data">
    Web前端
    </p>
    
    <h2 className="head extra">
    技能介绍
    </h2>
                               
    <p className="data">
    热爱IT行业<br /><br />
    
    无障碍阅读英文技术博客/文档<br /><br />
    
    每天都使用<code>谷歌</code>，搜索阅读一些技术文档<br /><br />
    
    理解<code>笔记</code>重要性，有<code>做笔记</code>的习惯<br /><br />
    
    理解<code>代码可读性</code>重要性<br /><br />
    
    愿意了解，学习<code>Linux</code>和<code>Linux 命令行</code><br /><br />
    
    愿意了解，学习<code>Angular</code>以及<code>TypeScript</code>，<code>RxJS</code><br /><br />
    
    理解性能的重要性，愿意持续学习和整理<code>如何提高应用性能</code><br /><br />
    
    <strong>前端</strong><br /><br />
    
    对<code>原生JavaScript</code>有很好的理解，熟练使用 <code>ES6</code><br /><br />
    
    对原生<code>DOM API</code>，<code>BOM API</code>有很好的理解<br /><br />
    
    熟练使用<code>React</code><br /><br />
    
    熟悉<code>webpack</code>使用，搭配常用loader和plugin，压缩以及优化JS和CSS代码，优化图片，解决浏览器兼容性<br /><br />
    
    熟悉原生<code>Ajax</code>，<code>HTTP</code>协议，对前后端交互有很好的理解<br /><br />
    
    <strong>后端</strong><br /><br />
    可以用<code>Express</code>框架搭配<code>MongoDB</code>实现<code>CRUD</code>功能<br /><br />
    
    熟悉<code>SQL</code>基础语句，熟悉<code>MySQL</code>基础命令行操作
    </p>
    
    <h2 className="head extra">
    教育背景
    </h2>
    
    <div className="flexParent">
    <div className="flex1 time">
    2007年9月-2012年6月
    </div>
    
    <div className="flex2">
    扬州科技学院高邮学院<br />
    专业：英语专业<br />
    学历：专科<br />
    </div>
    </div>
    
    <div className="flexParent">
    <div className="flex1 time">
    2012年9月-2014年6月
    </div>
    
    <div className="flex2">
    江苏第二师范学院<br />
    专业：汉语言文学<br />
    学历：本科
    </div>
    </div>
  </article>
)