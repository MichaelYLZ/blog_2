import React from "react"
import styles from "./article01.js.module.css"
import pic01 from "./imgs/01.png"

import pic65 from "./imgs/65.png"



export default () => (
	<article className={styles.container}>
    
    <h1 className={styles.h1}>
    学习 PostCSS
    </h1>
    
    <div className={styles.date}>
    2018-11-26
    </div>
    
    <div>
    <span className={styles.code}>Sass</span>学得差不多了，可以比较熟练使用，最近再了解一下<span className={styles.code}>PostCSS</span>。
    </div>
    <br/>
    
    <ol>
    
    <a href="#header01">
    <li>学习网站链接</li>
    </a>
    
    <a href="#header02">
    <li>PostCSS简介(摘抄)</li>
    </a>
    
    <a href="#header03">
    <li>安装和使用PostCSS</li>
    </a>
    </ol>
    
    <h2 name='header01'>学习网站链接</h2>



    <a href='https://postcss.org/' target='_blank' rel="noopener noreferrer">官网</a>
    
    <br />
    
    <a href='https://www.sitepoint.com/an-introduction-to-postcss/' target='_blank' rel="noopener noreferrer">其他资料</a>
    
    <h2 name='header02'>PostCSS简介(摘抄)</h2>
    

    <div>
    PostCSS is not a preprocessor; 
it doesn’t transform CSS. As a matter of fact, it doesn’t do much by itself at all. 
What it does is provide a CSS parser and a framework for creating plugins that can analyse, lint, handle assets, optimise, create fallbacks, and otherwise transform parsed CSS. 

PostCSS parses CSS into an abstract syntax tree (AST), passes it through a series of plugins, and then concatenates back into a string. 
<br/>
If you’re familiar with JavaScript tooling, then you can think of PostCSS as <span className={styles.code}>Babel</span> for CSS.
</div>
    <br/>
    <div>
    <strong>Each plugin is installed separately.</strong> This means you choose which ones you need and in what order they should be applied. Usually, plugins can be additionally configured using some set of options.
    </div>
    <br/>
        
    <div>
    <strong>You can write your own plugins.</strong> Each PostCSS plugin receives parsed CSS as an input parameter, analyses or modifies it, and returns it in the same manner. This means that plugins don’t need to handle parsing CSS and converting it back into a string. So the ability to build your own plugins is not as difficult as you might think.
    </div>
    <br/>
        
    <div>
    <strong>PostCSS can be used to polyfill real W3C features.</strong> There are a lot of plugins that aim to implement features from new W3C specifications. This will enable you to write code that respects standards and is likely to be compatible with future versions of CSS.
    </div>
    <br/> 
        
    <h2 name='header03'>安装和使用PostCSS</h2>
      
    <div>
    安装PostCSS，电脑上需要安装好<span className={styles.code}>Node</span>和<span className={styles.code}>npm</span>。
    <br/>
    全局安装，安装后检查：
    </div>
    <br/>

    <div className={styles.codeblock}>
    <pre className={styles.pre}>
    <code data-lang="javascript">
    npm install -g postcss-cli<br/>
    postcss --help
    </code>
    </pre>
    </div> 

    <div>
    创建<span className={styles.code}>style.css</span>。<br/>
    加入以下样式：
    </div>
    <br/>
        
    <div>
    <img src={pic65} alt="CSS样式" className={styles.img}/>
    </div>
    <br />

    <div>
    并不是所有浏览器都支持<span className={styles.code}>display: flex;</span>。<br/>
    需要加特定浏览器前缀，这样能保证浏览器的兼容。自己手动添加前缀是比较麻烦，而且很容易漏。<br/>
    <span className={styles.code}>Autoprefixer</span>来帮忙。<br/>
    安装 Autoprefixer：
    </div>
    <br/>
        
    <div className={styles.codeblock}>
    <pre className={styles.pre}>
    <code data-lang="javascript">
    npm install -g autoprefixer
    </code>
    </pre>
    </div> 
        
    <div>
    假设刚才CSS文件在<span className={styles.code}>css</span>文件夹中。<br/>
    执行以下操作：
    </div>
    <br/>
        
    <div className={styles.codeblock}>
    <pre className={styles.pre}>
    <code data-lang="javascript">
    cd css<br/>
    // template: postcss [some-options] --output output-file input-file

postcss --output src/css/styles.css dist/css/styles.css
    </code>
    </pre>
    </div>   
        
        
        
        
    关键词
    <span className={styles.code}></span>
    
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