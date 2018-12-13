import React from "react"
import styles from "./article01.js.module.css"

export default () => (
    <article className={styles.container}>
    
    <h1 className={styles.h1}>
    关于本站
    </h1>
    
    <div className={styles.date}>
    2018-12-4
    </div>
    
    <div>
    以下介绍本站上线流程和简要介绍用到的一些服务。
    </div>
    <br/>
    
    <ol>
    
    <a href="#header01">
    <li>用到的服务</li>
    </a>
    
    <a href="#header02">
    <li>上线流程</li>
    </a>
    
    <a href="#header03">
    <li>Netlify 简介</li>
    </a>
    
    </ol>
    
    <h2 name="header01">01-用到的服务</h2>
    
    <ol>
      <li>Node.js/npm</li>
      <li>Gatsby(基于Node.js和react的应用)</li>
      <li>Git</li>
      <li>Github</li>
      <li>Netlify</li>
    </ol>
    

<strong></strong><br/>
    
    <h2 name="header02">02-上线流程</h2>

    <div>
    <strong>第一步</strong><br/>
    登陆<a href='https://www.gatsbyjs.org/tutorial/' target='_blank' rel="noopener noreferrer">Gatsby</a>官网。       
    <br/>
    跟着在线文档第0讲，第一讲，安装相关应用。<br/>
    用浏览器访问<span className={styles.code}>localhost:8000</span>，输出 Hello World。<br/>
        
    <strong>第二步</strong><br/>
    在Gatsby应用文件夹，用Git创立本地仓库，将所有文件传到此本地仓库。<br/>
        
    <strong>第三步</strong><br/>
    在Github上面创立一个仓库。 <br/>
        
    <strong>第四步</strong><br/>
    使用命令行，将本地Git仓库所有文件传至Github 新创立的仓库。<br/>
    <strong><i>注：</i></strong><br/>
    从这步操作开始，包括此步骤，建议在可以访问Google环境下进行。
    <br/>
    <strong>第五步</strong><br/>
    用你的Github 账号来登陆Netlify。<br/>
    将Github 新创立的仓库与Netlify相关联。<br/>
    Netlify需要十分钟样子，自动编译并生成静态网站。<br/>  
    生成的静态网站以<span className={styles.code}>netlify.com</span>结尾。<br/>
    如果你有自己域名，也可以绑定自己域名。 
    <br/>
    netlify.com之前的网址部分，是netlify系统自动生成，可以修改的。<br/>
    用你的浏览器，或邀请你朋友，去访问这个网址。<br/>
    <strong>第六步</strong><br/>
    这样虽然上线，但是页面仍然太简单。<br/> 
    在本地Gatsby文件夹，继续修改，添加样式或照片都可以，<strong>没有流量限制</strong>。<br/>
    改好以后，<strong>只需</strong>操作以下Git 代码来更新在线Github仓库，网站会一分钟之内更新:
    </div>
    <br/>
        
    <div className={styles.codeblock}>
    <pre className={styles.pre}>
    <code data-lang="javascript">
    git add .<br/>
    git commit -m "first commit"<br/>
    git push -u origin master<br/>
    </code>
    </pre>
    </div> 
    <br/>
	<div>
    <a href='https://www.netlify.com/blog/2016/02/24/a-step-by-step-guide-gatsby-on-netlify/' target='_blank' rel="noopener noreferrer">这个网站</a>有更加详细的步骤，并且提供操作代码。
    </div>
    <br/>
        
    <h2 name="header03">03-Netlify 简介</h2>

    <div>
    专门介绍Netlify是因为这家公司大有来头，但是国内对这家公司讨论得不是很多。百度上面可以找到一些关于Netlify的介绍，知乎上面讨论的很少。
    
    </div>
    <br/>
    <div>
    我们先来看一下有哪些公司用他们的服务：
    </div>
   

    <ul>
    <li>Google</li>
    <li>Facebook</li>
    <li>Verizon</li> 
    <li><strong>Vue.js</strong></li>
    <li>Samsung</li>
    <li>Cisco</li>
    <li>Lodash</li>
    <li>Smashing Magazine</li>
    <li>NBC</li>
    </ul>

    <div>
    大家一定看到了一个中国程序员很熟悉的公司。
    </div>
    <br/>

    <div>
    Netlify公司总部在美国加州的旧金山。公司成立于2014年。Netlify提供的主要服务是hosting/网页寄存和无服务器的静态网站托管。Netlify提供收费版服务和免费版服务。国内访问速度很快。Netlify完美支持ssl、域名绑定、http/2和TLS。希望国内有更多的人认识这家公司。
    </div>
    <br/>
        
   
    </article>
)