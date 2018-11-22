import React from "react"
import styles from "./article01.js.module.css"
import pic42 from "./imgs/42.png"
import pic43 from "./imgs/43.png"



export default () => (
	<article className={styles.container}>
    
    <h1 className={styles.h1}>
    学习Sass
    </h1>
    
    <div className={styles.date}>
    2018-11-22
    </div>
    
    <div>
    最近跟着网上webpack教材代码，将<span className={styles.code}>.scss</span>文件转化成<span className={styles.code}>.css</span>。而且，添加了不同浏览器所需要的前缀，觉得Sass很有意思，功能强大，有必要学习一下。谷歌了几篇资料，学起来还蛮快的。
    </div>
    <br/>
    
    <ol>
    
    <a href="#header01">
    <li>学习网站</li>
    </a>
    
    <a href="#header02">
    <li>安装Sass</li>
    </a>
    
    <a href="#header03">
    <li>使用Sass</li>
    </a>
    
    <a href="#header04">
    <li>使用变量</li>
    </a>
    
    </ol>
    
    <h2 name="header01">
    学习资料网站
    </h2>
    
    <a href='https://sass-lang.com/install' target='_blank' rel="noopener noreferrer">01-官网</a>
    
    <br />
    
     <a href='https://1stwebdesigner.com/learn-sass-tutorial/' target='_blank' rel="noopener noreferrer">02-实际使用的网站，很赞</a>
    
      
    <h2 name="header02">
    安装Sass
    </h2>
    
    <div>
    先要安装<span className={styles.code}>Ruby</span>。
    <a href='https://rubyinstaller.org/' target='_blank' rel="noopener noreferrer">Ruby官网</a>。
    <br/>
    安装以后检查<span className={styles.code}>ruby -v</span>。
    <br/>
    OK以后，安装sass。
    <br/>
    命令行输入<span className={styles.code}>gem install sass</span>
    <br/>
    检查sass是否安装到位<span className={styles.code}>sass --version</span>
    <br/>
    </div>
    <br/>
    
    
    <h2 name="header03">
    使用Sass
    </h2>
    
    <div>
    创建文件夹<span className={styles.code}>sass</span>。
    <br/>
    创建<span className={styles.code}>index.html</span>。里面复制粘贴链接02的HTML代码。
    <br/>
    创建<span className={styles.code}>style.scss</span>。里面复制粘贴链接02的HTML代码。
    <br/>
    真正意义上使用sass。
    打开命令行，输入<span className={styles.code}>sass ––watch Sass:Sass</span>
    <br/>
    这样文件夹会多一个新的css文件，并可以被html文件使用。
    </div>
    <br/>
    
    <h2 name="header04">
    使用变量
    </h2>
    
    <div>
    Sass variables are declared using the $ character and are defined like CSS values. Using Sass, you can declare variables for styles like font size, margin, padding and so on. Using variables and giving it a style value makes it easy to reuse a style repeatedly.
There are six different types of variables you can use with Sass.
    <br/>
    语法示范和例子如下：
    </div>
    <br/>
    
    <br />
    <div>
    <img src={pic42} alt="语法demo" className={styles.img}/>
    </div>
    <br />
    
    <br />
    <div>
    <img src={pic43} alt="语法demo" className={styles.img}/>
    </div>
    <br />
    
   
    
    <div className={styles.codeblock}>
    <pre className={styles.pre}>
    <code data-lang="javascript">
    import ApolloClient from 'apollo-boost';
    </code>
    </pre>
    </div> 
    
    
    
    
    关键词
    <span className={styles.code}>Gatsby</span>
    
    图片
    <br />
    <div>
    <img src={pic42} alt="Gatsby大量使用无状态组件" className={styles.img}/>
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
    
    链接
    
    <a href='https://www.netlify.com/blog/2016/02/24/a-step-by-step-guide-gatsby-on-netlify/' target='_blank' rel="noopener noreferrer">具体操作可点击这里</a>
   
    </article>
)