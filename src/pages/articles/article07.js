import React from "react"
import styles from "./article01.js.module.css"
import pic124 from "./imgs/124.png"
import pic125 from "./imgs/125.png"
import pic126 from "./imgs/126.png"
import pic127 from "./imgs/127.png"
import pic128 from "./imgs/128.png"
import pic129 from "./imgs/129.png"

export default () => (
	<article className={styles.container}>
    
    <h1 className={styles.h1}>
    介绍 webpack.config.babel.js
    </h1>
    
    <div className={styles.date}>
    2018-12-5
    </div>
    
    <div>
    本文介绍如何使用<span className={styles.code}>ES6</span>语法写webpack配置文件。
    <br />
    在文章结尾，才会提到<span className={styles.code}>webpack.config.babel.js</span>
    </div>
    <br/>
    
    <ol>
    <a href="#header01">
    <li>导言</li>
    </a>
    <a href="#header02">
    <li>ES6写webpack配置文件的小demo</li>
    </a>
     <a href="#header03">
    <li>小结</li>
    </a>
    </ol>
    
    <h2 name='header01'>01-导言</h2>

    <div>
    相信大家对以下代码都很熟悉：
    </div>
    <br/>
    
    <div>
    <img src={pic124} alt="webpack常见代码形式" className={styles.img}/>
    </div>
    <br />
    
    <div>
    大家见过webpack配置文件<strong>这样写</strong>的吗？
    </div>
    <br/>
    
    <div>
    <img src={pic125} alt="webpack代码新形式" className={styles.img}/>
    </div>
    <br />
    
    <a href='https://github.com/seetd-knowledge/es6-webpack4-babel7' target='_blank' rel="noopener noreferrer">链接-完整Demo</a>
    
    <br /><br />
    
    <h2 name='header02'>02-ES6写webpack配置文件的小demo</h2>
    <div>
    只需几步，你也可以用ES6语法写webpack配置文件。<br /><br />
    1-新建文件夹，用命令行进去。<br />
    2-命令行运输入<span className={styles.code}>npm init -y</span>。<br/>
    3-在<span className={styles.code}>package.json</span>中，加入以下内容：
    </div>
    <br/>
    
    <div>
    <img src={pic126} alt="package.json增加内容" className={styles.img}/>
    </div>
    <br />
    
    <div>
    4-命令行输入<span className={styles.code}>npm i</span>,安装。<br/>
    5-新建<span className={styles.code}>src</span>文件夹，文件夹内新建<span className={styles.code}>index.js</span>。然后写点JS代码。<br/>
    6-根目录新建<span className={styles.code}>.babelrc</span>文件，并输入以下代码来配置babel：
    </div>
    <br/>
    
    <div>
    <img src={pic127} alt=".babelrc内容" className={styles.img}/>
    </div>
    <br />
    
    <div>
    7-对<span className={styles.code}>package.json</span>进行小小的调整：
    </div>
    <br/>
   
    <div>
    <img src={pic128} alt="调整package.json" className={styles.img}/>
    </div>
    <br />
    
    <div>
    8-新建JS文件，并命名为<span className={styles.code}>webpack.config.babel.js</span>。该文件中输入以下代码：
    </div>
    <br/>
    
    <div>
    <img src={pic129} alt="配置文件内容" className={styles.img}/>
    </div>
    <br />
    
    <div>
    9-命令行输入：<span className={styles.code}>npm run build</span>。<br />
    根目录会多出一个<span className={styles.code}>dist</span>文件夹。<br />
    <span className={styles.code}>dist</span>文件夹中会有一个<span className={styles.code}>js</span>文件夹，里面有一个<span className={styles.code}>main.js</span>。
    <br /><br />
    <strong>大功告成。</strong><br /><br />
    我们可以用ES6语法来写webpack 配置文件啦。
    </div>
    <br/>
    
      <h2 name='header03'>03-小结</h2>
    
    <div>
    以上过程中，有两点比较重要。<br/><br/>
    <strong>第一点</strong><br/>
    是<span className={styles.code}>@babel/register</span>让我们可以用ES6语法写配置文件。<br/>
    然后再<strong>结合第二点</strong>，我们就可以也让Babel处理webpack配置文件。<br/><br/>
    <strong>第二点</strong><br/>
    配置文件命名为<span className={styles.code}>webpack.config.babel.js</span>。<br/><br/>
    </div>
    <br/>
    </article>
)