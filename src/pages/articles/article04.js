import React from "react"
import styles from "./article01.js.module.css"
import pic27 from "./imgs/27.png"
import pic28 from "./imgs/28.png"
import pic29 from "./imgs/29.png"
import pic30 from "./imgs/30.png"
import pic31 from "./imgs/31.png"
import pic32 from "./imgs/32.png"
import pic33 from "./imgs/33.png"
import pic34 from "./imgs/34.png"
import pic35 from "./imgs/35.png"
import pic36 from "./imgs/36.png"
import pic37 from "./imgs/37.png"
import pic38 from "./imgs/38.png"
import pic39 from "./imgs/39.png"
import pic40 from "./imgs/40.png"
import pic41 from "./imgs/41.png"

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
    <li>webpack 4 无配置文件</li>
    </a>
    
    <a href="#header02">
    <li>无配置状态下默认值以及对对默认值的更改</li>
    </a>
    
    <a href="#header03">
    <li>无配置文件对有配置文件影响</li>
    </a>
    
    <a href="#header04">
    <li>webpack 4 配置文件的基本结构</li>
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
    
    <div>
    黄色字体部分有一个<span className={styles.code}>warning</span>，这和webpack 4<span className={styles.code}>mode</span>相关。 
    <br/>
    mode分两种情况。
    <br/>
    01-<span className={styles.code}>development mode</span>。为开发阶段，提供相应的服务，比如，会提供dev server，hot module replacement。
    <br/>
    02-<span className={styles.code}>production mode</span>。生成上线版本的代码，最典型的就是minification，去除源码中的空格，备注。当然webpack的优化不止这些。
    <br/>
    换以下代码。
    </div>
    
    <br />
    <div>
    <img src={pic29} alt="mode相关代码" className={styles.img}/>
    </div>
    <br />
    
    <div>
    package.json调整好以后，运行以下代码。
    </div>
    <br/>
    
    <br />
    <div className={styles.codeblock}>
    <pre className={styles.pre}>
    <code>
    npm run dev 
    </code>
    </pre>
    </div> 
    <br />
    
    <br />
    <div>
    <img src={pic30} alt="dev模式webpack生成的代码" className={styles.img}/>
    </div>
    <br />
    
    <br />
    <div>
    <img src={pic31} alt="命令行信息" className={styles.img}/>
    </div>
    <br />
    
    <div>
    运行后，命令行界面不再有<span className={styles.code}>warning</span>提示。
    <br/>
    <span className={styles.code}>dist
    </span>文件夹中，不同于production阶段的代码，是仍然有空格的。
    <br />
    运行以下：
    </div>
    
    <br />
    <div className={styles.codeblock}>
    <pre className={styles.pre}>
    <code>
    npm run build
    </code>
    </pre>
    </div> 
    <br />
    
    <div>
    <img src={pic32} alt="production code" className={styles.img}/>
    </div>
    <br />
    
    <h2 name='header02'>02-无配置状态下默认值以及对对默认值的更改</h2>
    
    <div>
    没有配置文件情况下，<span className={styles.code}>entry point</span>的默认值是<span className={styles.code}>./src/index.js</span>。
    <br />
    webpack去<span className={styles.code}>src</span>文件夹中寻找<span className={styles.code}>./src/index.js</span>，进行处理，
    <br/>
    产出是<span className={styles.code}>./dist/main.js</span>。
    <br/>
    在配置文件<span className={styles.code}>webpack.config.js</span>，相应的代码是这样：
    </div>
    <br/>
    
    <div>
    <img src={pic33} alt="配置文件相应代码" className={styles.img}/>
    </div>
    <br />
    
    <div>
    无配置状态文件下，可以通过修改package.json来实现对默认值的更改：
    </div>
    <br/>
   
    <div>
    <img src={pic34} alt="Gatsby大量使用无状态组件" className={styles.img}/>
    </div>
    <br />
    
    <div>
    需要你动手实验一下。
    </div>
    <br/>
    
    <h2 name='header03'>03-无配置文件对有配置文件影响</h2>
    
    <div>
    以上的这些规则都是官网看来了。
    <br/>
    无配置文件状态下，是有默认值的。
    <br/>
    所以有配置文件时候，<span className={styles.code}>entry</span>和<span className={styles.code}>output</span>，可以不用写。
    </div>
    <br/>
    
    <h2 name='header04'>04-webpack 4 配置文件的基本结构</h2>
    
    <br />
    <div>
    插播:对于entry的额外讲解
    <img src={pic35} alt="entry讲解" className={styles.img}/>
    </div>
    <br />
    
    <br />
    <div>
    插播:自己实验
    <img src={pic36} alt="entry讲解" className={styles.img}/>
    </div>
    <br />
    
    <br />
    <div>
    插播:额外讲解
    <img src={pic37} alt="output讲解" className={styles.img}/>
    </div>
    <br />
    
    <br />
    <div>
    <span className={styles.code}>webpack.config.js</span>基本结构01
    <img src={pic38} alt="配置文件demo" className={styles.img}/>
    </div>
    <br />
    
    <br />
    <div>
    <span className={styles.code}>webpack.config.js</span>基本结构02
    <img src={pic39} alt="配置文件demo" className={styles.img}/>
    </div>
    <br />
    
    <br />
    <div>
    <span className={styles.code}>webpack.config.js</span>基本结构03
    <img src={pic40} alt="配置文件demo" className={styles.img}/>
    </div>
    <br />
    
    <br />
    <div>
    <span className={styles.code}>webpack.config.js</span>基本结构04
    <img src={pic41} alt="配置文件demo" className={styles.img}/>
    </div>
    <br />
    
    关键词000
    <span className={styles.code}></span>
    
    
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
    npm run dev 
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
   
   
    </article>
)