import React from "react"
import styles from "./article01.js.module.css"
import pic01 from "./imgs/01.png"




export default () => (
	<article className={styles.container}>
    
    <h1 className={styles.h1}>
    我的全栈React + Express APP介绍
    </h1>
    
    <div className={styles.date}>
    2018-12-21
    </div>
    
    <div>
    这篇博客是对最近自己写的一个小型全栈APP，前前后后的一些总结，介绍。<a href='https://www.netlify.com/blog/2016/02/24/a-step-by-step-guide-gatsby-on-netlify/' target='_blank' rel="noopener noreferrer">相关代码链接请点击这里</a>
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
    <li>我的收获</li>
    </a>

    <a href="#header04">
    <li>参考的App GitHub链接</li>
    </a>
    
    </ol>
    
    <h2 name="header01">
    01-APP 功能介绍
    </h2>
    
    <div>
    我给这个APP起得名字是<span className={styles.code}>一句话APP</span>。功能其实跟 To Do List 很像：
    </div>
    
    <ul>
        <li>
        可以<strong>新写</strong>一句话。
        </li>
    
        <li>
        可以<strong>编辑</strong>已存在的句子。
        </li>
    
        <li>
        可以<strong>删除</strong>一句话。
        </li>
    
        <li>
        以上操作都可以在<strong>data.json</strong>文件中得到体现。操作后的数据可以<strong>持续化存储</strong>。
        </li>
    </ul>
    
    <h2 name="header02">
    02-使用到的技术
    </h2>
    
    <div>
    <strong>前端</strong>相关:
    </div>
    
    <ul>
    <li>Fetch API与后端交互</li>
    <li>React.js</li>
    <li>react-dom</li>
    <li>原生CSS</li>
    <li>ES6模块语法</li>
    <li>IIFE+闭包 JS模块</li>
    <li>uuid</li>
    </ul>
    
    <div>
    <strong>构建工具相关</strong>相关:
    </div>
    
    <ul>
 
    <li>Webpack 4</li>
    <li>Babel 7</li>
    <li>@babel/register(这样就可以用ES6语法写webpack配置文件了)</li>

    </ul>
    
    <div>
    <strong>后端</strong>相关:
    </div>

    <ul>
    <li>express</li>
    <li>body-parser</li>
    <li>JSON文件夹搭配原生Node fs库 来实现数据库功能</li>

    </ul>

    <h2 name="header03">
    03-我的收获
    </h2>
    
    <div>
    真的是万事开头难。有几点感受比较深。<br/>
    <strong>一是:</strong><br/>
    <strong>看得懂</strong>参考例子代码，需要一定积累，技术知识了解得有一定的广度深度。
    <br/>自己<strong>独立实现</strong>类似的功能，难度会更大。<br/>
    <strong>二是:</strong><br/>
    正确的/合理的开发思路很重要。<br/>
    <strong>三是:</strong><br/>
    这个项目把之前学习到的技术知识点都串联起来了，复习巩固了一遍。蛮开心的。
    </div>
    <br/>
        
    <h3>开发思路很重要</h3>

    <div>
    之前学习<span className={styles.code}>React</span>时候，练习的方法就是去实现一些具体的，零散的知识点。在谷歌上面，也找到很好的关于React与后端相关讲解。<br/>
    但是自己去写这样一个全栈APP，一开始，真的一点思路都没有。<br/>
    还好，我用了一本<a href='https://www.fullstackreact.com/' target='_blank' rel="noopener noreferrer">很棒的教材</a>。<br/>
    跟着教材，先整体，后局部，来写代码。<br/>
    首先，从概念上，把从高到低的几个组件及其关系想好。<br/>
    代码是从最底层的组件开始写，最基本的JSX和CSS。<br/>
    数据的话先放state里面。<br/>
    实现了CRUD功能以后，把state数据全部删掉，逐渐实现React前端从后端获取数据，对后端数据进行操作。
    </div>
    
    <h3>实现比看得懂难</h3>

    <div>
    如果没有很好的ES6语法基础，React基础，应该很难看懂。<br/>
    参考的代码中，用IIFE和闭包，把浏览器fetch请求的代码所有代码都封装成一个模块。<br/>
    虽然是ES5的技巧，但是在这个模块中，也有ES6的语法。<br/>
    一开始自己没有反应过来，后来谷歌了几篇关于IIFE的文章，才豁然开朗，认识到参考代码的妙处。<br/><br/>
    自己实现的话，陆陆续续有一些更大的困难。<br/>
    一开始，没有思路。<br/>
    然后，写的组件不能达到预期的互动状态。<br/>
    最后，与后端的交互也要花点时间调整。
    </div>
    

    <h3>把之前知识都串联了起来</h3>

    <div>
    <strong>这是最大的收获。</strong><br/>
    比如说，在今年三四月份，我把<span className={styles.code}>http权威指南</span>大概看了一遍。<br/>
    现在有具体的使用，再去阅读相关的讲解，真的有不一样的体验。<br/>
    </div>
    <br/>

   
    <h2 name="header04">
    05-参考的App GitHub链接
    </h2>

     <a href='https://github.com/MichaelYLZ/time_tracking_app' target='_blank' rel="noopener noreferrer">请点击这里</a>
    </article>
)