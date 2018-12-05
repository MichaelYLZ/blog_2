import React from "react"
import styles from "./article01.js.module.css"
import pic01 from "./imgs/01.png"

import pic12 from "./imgs/12.png"
import pic13 from "./imgs/13.png"
import pic14 from "./imgs/14.png"
import pic15 from "./imgs/15.png"
import pic16 from "./imgs/16.png"
import pic17 from "./imgs/17.png"
import pic18 from "./imgs/18.png"
import pic19 from "./imgs/19.png"

export default () => (
    <article className={styles.container}>
    
    <h1 className={styles.h1}>
    推荐一个webpack 配置文件模板
    </h1>
    
    <div className={styles.date}>
    2018-12-3
    </div>
    
    <div>
    <span className={styles.code}>Webpack 4</span>默认是不需要配置文件的。<br/>
    但是，没有配置文件的话，功能会相当有限，可扩展性差。<br/>
    受官网和另一个技术博客启发，我发现一个很棒的webapck 配置文件模板。<br/>
    <br/>
     <i>本文使用最新版webpack。<br/>
    本文默认已经安装好Node.js,webpack,webpack-cli。</i>
    </div>
    <br/>
    
    <ol>
    
    <a href="#header01">
    <li>推荐的网站</li>
    </a>
    
    <a href="#header02">
    <li>配置文件写作流程及其优点</li>
    </a>
    </ol>
    
    <h2 name="header01">01-推荐的网站</h2>
    
    <div>
    受以下网站启发，我从对webpack 配置文件懵懵懂懂，到有自己的想法：
    <br/><br/>
    
    <a href="https://webpack.js.org/guides/production/">
    A-官网
    </a><br/>
    这个网站一打开，就提到，<strong>development</strong>和<strong>production</strong>开发环境需要单独配置文件的必要性。
    <br/>
    然后直接上了一个配置文件模板。<br/><br/>
    
    <a href="https://simonsmith.io/organising-webpack-config-environments/">
    B-一个英国人博客
    </a><br/>
    这个博客博主肯定是受到官网的基本原则指导。<br/>
    但是这个博客，提供了更详细的代码例子。<br/>
    <strong>以下介绍，是基于此博客。</strong>
    </div>
    <br/>

    <h2 name="header02">02-配置文件写作流程及其优点</h2>
    
    <ol>
    <a href="#header01">
    <li>配置文件-专属文件夹</li>
    </a>
    <a href="#header02">
    <li>安装以及介绍 webpack-merge</li>
    </a>
    
    <a href="#header03">
    <li>src 文件夹</li>
    </a>
    
    <a href="#header04">
    <li>安装其他loader/plugin</li>
    </a>
    
    <a href="#header05">
    <li>写配置文件</li>
    </a>
    
    <a href="#header06">
    <li>调整 package.json</li>
    </a>
    
    <a href="#header07">
    <li>跑起来</li>
    </a>
    
    <a href="#header07">
    <li>结语</li>
    </a>
    
    </ol>
    
    <h3 name="header01">01-配置文件-专属文件夹</h3>
   
    <div>
    根目录下，创建<span className={styles.code}>webpack</span>文件夹。<br/>
    
    此文件夹中，分别新建：<br/>
    <span className={styles.code}>base.config.js</span><br/>
    <span className={styles.code}>dev.config.js</span><br/>
    <span className={styles.code}>prod.config.js</span><br/>
    <br/>
    <span className={styles.code}>base.config.js</span>文件中，存放两个环境都需要的代码，比如：<br/>
    <strong>entry</strong><br/>
    <strong>plugins</strong><br/>
    <strong>loaders</strong><br/><br/>
    
    <strong>这样安排的优点</strong><br/><br/>
    首先，配置文件有单独的一个文件夹，他们专属的文件夹。<br/><br/>
    <span className={styles.code}>dev</span>是英语单词development缩写。<br/>
    <span className={styles.code}>prod</span>是英语单词production缩写。<br/><br/>
    只需要根据文件夹首字母，就可以区分，立刻马上你就会知道需要在哪个文件编写或修改代码。
    </div>
    <br/><br/>
    
    <h3 name="header02">02-安装以及介绍 webpack-merge</h3>
    
    <div>
    安装<span className={styles.code}>webpack-merge</span>：
    </div>
    <br/>
    
    <div className={styles.codeblock}>
    <pre className={styles.pre}>
    <code data-lang="javascript">
    npm install --save-dev webpack-merge
    </code>
    </pre>
    </div> 
    <br/>
    
    <div>
    我们需要这个工具，把分散的文件，整合起来。
    <br/><br/>
    工作原理如下：
    </div>
    <br />
    <div>
    <img src={pic12} alt="merge 工作原理" className={styles.img}/>
    </div>
    <br />
    
    <h3 name="header03">03-src 文件夹</h3>
    
    <div>
    我们任务是，让webpack，
    用<span className={styles.code}>html-webpack-plugin</span>生成一个HTML文件。<br/>
    然后这个HTML文件会使用到<span className={styles.code}>src</span>文件夹中的一<span className={styles.code}>js</span>和
    <span className={styles.code}>css</span>文件。<br/><br/>
    
    新建<span className={styles.code}>src</span>文件夹；<br />
    新建<span className={styles.code}>index.js</span>和
    <span className={styles.code}>style.css</span>。<br /><br />
    
    <span className={styles.code}>js</span>代码如下：
    </div>
    
    <br />
    <div>
    <img src={pic13} alt="JS代码" className={styles.img}/>
    </div>
    <br />
    
    <div>
    <span className={styles.code}>css</span>代码：
    </div>
    
    <br />
    <div>
    <img src={pic14} alt="css代码" className={styles.img}/>
    </div>
    <br />
    
    <h3 name="header04">04-安装其他loader/plugin</h3>
    
    <div>
    我们需要npm 安装以下资源：
    </div>
    <br/>
    
    <div className={styles.codeblock}>
    <pre className={styles.pre}>
    <code data-lang="javascript">
    npm i -D html-webpack-plugin webpack-dev-server css-loader style-loader
    </code>
    </pre>
    </div> 
    <br/>
  
    <h3 name="header05">05-写配置文件</h3>
    
    <br />
    <div>
    <img src={pic15} alt="写配置文件01" className={styles.img}/>
    </div>
    <br />
    
    <br />
    <div>
    <img src={pic16} alt="写配置文件02" className={styles.img}/>
    </div>
    <br />
    
    <br />
    <div>
    <img src={pic17} alt="写配置文件03" className={styles.img}/>
    </div>
    <br />
    
    <h3 name="header06">06-调整 package.json</h3>
    
    <div>
    调整<span className={styles.code}>package.json</span>也是很重要的步骤：
    </div>
    <br/>
    
    <br />
    <div>
    <img src={pic18} alt="调整package.json文件夹" className={styles.img}/>
    </div>
    <br />
    
    <h3 name="header07">07跑起来</h3>
    
    <div>
    运行以下代码：
    </div>
    <br/>
    
    <div className={styles.codeblock}>
    <pre className={styles.pre}>
    <code data-lang="javascript">
    npm run start<br/>
    或<br/>
    npm run build
    </code>
    </pre>
    </div> 
    
    <br />
    <div>
    <strong>会得到这样的HTML</strong>
    <img src={pic19} alt="运行结果" className={styles.img}/>
    </div>
    <br />
    
    <h3 name="header08">08-结语</h3>
    
    <div>
    本文<strong>重点</strong>是介绍webapck配置文件的写作思路。
    
    <br /><br />
    我用了两个策略来简化代码量，希望思路更加明显，简洁。<br/><br/>
    <strong>一是，</strong>loader 和 plugin 比较少。<br/>
    <strong>二是，</strong>我利用了webpack 4，在没有相关配置代码情况下会有默认值。<br/><br/>
    以上配置文件，没有提到<span className={styles.code}>entry</span>和
    <span className={styles.code}>output</span>。<br/><br/>
    
    没有<span className={styles.code}>entry</span>设置，webpack默认去<span className={styles.code}>src</span>文件夹，找<span className={styles.code}>index.js</span>。<br/><br/>
    
    没有<span className={styles.code}>output</span>设置，webpack默认会新建一个<span className={styles.code}>dist</span>文件夹，将输出文件<span className={styles.code}>main.js</span>放在里面。
    <br/><br/>
    
    <span className={styles.code}>html-webpack-plugin</span>自动生成一个HTML文件，自动将<span className={styles.code}>main.js</span>与生成的HTML文件关联，然后也会把最终的文件放在<span className={styles.code}>dist</span>文件夹。<br/><br/>
    
    理解并熟练应用以上模板代码，相信会很容易对配置文件进行个性化调整。
    </div>
    <br/>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    <div>
    正文
    </div>
    <br/>
    
    关键词
    <span className={styles.code}>js</span>和
    <span className={styles.code}>css</span>
    
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
    
    </code>
    </pre>
    </div> 
    
    
    
    
    链接
    
    <a href='https://www.netlify.com/blog/2016/02/24/a-step-by-step-guide-gatsby-on-netlify/' target='_blank' rel="noopener noreferrer">具体操作可点击这里</a>
   
    </article>
)