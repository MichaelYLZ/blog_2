import React from "react"
import styles from "./article01.js.module.css"
import pic27 from "./imgs/27.png"
import pic28 from "./imgs/28.png"



export default () => (
	<article className={styles.container}>
    
    <h1 className={styles.h1}>
    webpack 4 汇总
    </h1>
    
    <div className={styles.date}>
    2018-11-22
    </div>
    
    <div>
    这几天全身心学习<span className={styles.code}>webpack 4</span>，觉得很有意思。另一方面，webpack 4时效性很强，需要很细心的处理，不然，一言不合就跑不起来。
    </div>
    <br/>
    
    <div>
    我觉得有必要把思路和一些必要的配置代码整理下来。不熟或想不起来的时候，上自己博客看一下就OK了。以后需要更新的话也很方便。
    </div>
    <br/>
    
    <ol>
    
    <a href="#header01">
    <li>01-webpack 4 无配置文件</li>
    </a>
    
    <a href="#header02">
    <li>02-无配置文件对有配置文件影响</li>
    </a>
    
    <a href="#header02">
    <li>03-webpack 4 配置文件的语法结构</li>
    </a>
    
    </ol>
    
    <h2 name='header01'>01-webpack 4 无配置文件</h2>
    
    <div>
    不需要配置文件，是webpack 4的特点之一。
    <br />
    <br />
    没有配置文件的话，功能相当有限。webpack 4是基于<span className={styles.code}>Node.js</span>的应用。webpack 4自身只能处理<span className={styles.code}>js</span>或<span className={styles.code}>json</span>类型文件。
    <br />
    <br />
    但无配置文件下使用webpack仍然是学习webpack的最佳起点。
    <br />
    <br />
    请输入以下代码。
    </div>
    <br/>
    
    <div className={styles.codeblock}>
    <pre className={styles.pre}>
    <code>
    mkdir webpack-learning
    <br />
    cd webpack-learning
    <br />
    npm init -y
    <br />
    npm install webpack webpack-cli -D
    </code>
    </pre>
    </div> 
    
    <br/>
    <div>
    安装OK后，打开<span className={styles.code}>package.json</span>文件夹，确定webpack版本是4.0以上。
    <br />
    加入以下代码。
    </div>
   
    <br />
    <div>
    <img src={pic27} alt="package.json配置代码" className={styles.img}/>
    </div>
    <br />
    
    <div>
    新建<span className={styles.code}>src</span>文件夹。
    <br />
    新建<span className={styles.code}>index.js</span>文件。
    <br/>
    运行：
    </div>
    
    <br/>
    <div className={styles.codeblock}>
    <pre className={styles.pre}>
    <code data-lang="javascript">
    npm run dev
    </code>
    </pre>
    </div> 
    <br/>
    
    <div>
    跑起来了。你会发现文件夹中多了一<span className={styles.code}>dist</span>文件夹。
    <br/>
    dist是英文distribution的缩写。
    <br/>
    你会看到以下图片：
    </div>
    
    <br />
    <div>
    <img src={pic28} alt="提示信息" className={styles.img}/>
    </div>
    <br />
    
    关键词
    <span className={styles.code}>Gatsby</span>
    
    图片
    <br />
    <div>
    <img src={pic27} alt="Gatsby大量使用无状态组件" className={styles.img}/>
    </div>
    <br />
    
    
    <br />
    <div className={styles.codeblock}>
    <pre className={styles.pre}>
    <code>
    mkdir webpack-learning
    <br />
    
    </code>
    </pre>
    </div> 
    <br />
    
    
    
    <div>
    正文
    </div>
    <br/>
    
    
    可复制代码块01
    <br/>
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