import React from "react"
import styles from "./article01.js.module.css"
import pic42 from "./imgs/42.png"
import pic43 from "./imgs/43.png"
import pic44 from "./imgs/44.png"
import pic45 from "./imgs/45.png"
import pic46 from "./imgs/46.png"
import pic47 from "./imgs/47.png"
import pic48 from "./imgs/48.png"
import pic59 from "./imgs/59.png"
import pic60 from "./imgs/60.png"
import pic61 from "./imgs/61.png"
import pic62 from "./imgs/62.png"
import pic63 from "./imgs/63.png"
import pic64 from "./imgs/64.png"

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
    
    <a href="#header05">
    <li>Nesting</li>
    </a>
    
    <a href="#header06">
    <li>Mixins</li>
    </a>
    
    <a href="#header07">
    <li>压缩CSS文件步骤和语法</li>
    </a>
    
    <a href="#header08">
    <li>合并多文件</li>
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
    打开命令行，输入<span className={styles.code}>sass ––watch SassA:SassB</span>
    <br/>
    注意：
    <br/>
    01-cd 不需要进那个sass文件夹。
    <br/>
    02-<span className={styles.code}>SassA</span>是sass文件所处的文件夹，起点。<span className={styles.code}>SassB</span>
    <br/>是输出CSS文件的文件夹。两者可以一样，可以不一样。
    <br/>
    这样文件夹会多一个新的css文件，并可以被html文件使用。
    </div>
    <br/>
    
    <div>
    Using <span className={styles.code}>–-watch</span> command, we will convert all of the .scss files on the folder Sass. It will also watch for the changes or updates on the file. Notice that there are two Sass, divided by a colon. The first one represents the current location of the .scss file while the second one represents the location of the output of the file. Make sure you link the converted CSS file to your HTML file to see this working.
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
    
    <br />
    <div>
    <img src={pic63} alt="语法demo" className={styles.img}/>
    </div>
    <br />
    
    <br />
    <div>
    <img src={pic64} alt="语法demo" className={styles.img}/>
    </div>
    <br />
    
   <h2 name="header05">
    Nesting
    </h2>

    <br />
    <div>
    <img src={pic44} alt="css code" className={styles.img}/>
    </div>
    <br />
    
    <br />
    <div>
    <img src={pic45} alt="sass code" className={styles.img}/>
    </div>
    <br />
    
    <br />
    <div>
    <img src={pic46} alt="sass code" className={styles.img}/>
    </div>
    <br />
    
    <div>
    In Sass code,we put all of the elements styles under the id container, instead of naming them one by one under the same element. If you run this code into your browser, you will have something like this.
    </div>
    <br/>
    
    <h2 name="header06">
    Mixins
    </h2>
    
    <br />
    <div>
    <img src={pic47} alt="CSS code" className={styles.img}/>
    </div>
    <br />
    
    <br />
    <div>
    <img src={pic48} alt="SASS code" className={styles.img}/>
    </div>
    <br />
    
    <h2 name="header07">
    压缩CSS文件步骤和语法
    </h2>
    
    <div>
    01-cd 文件夹。进去。
    <br/>
    02-输入<span className={styles.code}>sass A.scss B.css --style compressed</span>
    <br/>
    这里，<span className={styles.code}>A.scss</span>，是文件夹中，已经存在的sass文件。
    <br/>
    <span className={styles.code}>B.css</span>是Sass 帮我们输出的CSS文件，可以自定义。
    <br/>
    然后就OK啦。
    </div>
    <br/>
    
    <h2 name="header08">
    合并多文件
    </h2>
    
    <div>
    按照以下命名方式，创建几个sass文件。
    </div>
    
    <br />
    <div>
    <img src={pic59} alt="命名方式DEMO" className={styles.img}/>
    </div>
    <br />
    
    <div>
    文件夹中只有一个Sass文件。打开命令行，不需要进文件夹，
    <br />
    输入<span className={styles.code}>sass ––watch SassA:SassB</span>
    <br />
    如何然后文件夹中会多处一个合并后的CSS文件。
    </div>
    
    <br />
    <div>
    <img src={pic60} alt="语法参考" className={styles.img}/>
    </div>
    <br />
    
    <br />
    <div>
    注意点01<br />
    <img src={pic61} alt="额外讲解01" className={styles.img}/>
    </div>
    <br />
   
    <br />
    <div>
    注意点02<br />
    <img src={pic62} alt="额外讲解02" className={styles.img}/>
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
    <span className={styles.code}></span>
    
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