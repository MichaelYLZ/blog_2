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
import pic66 from "./imgs/66.png"
import pic67 from "./imgs/67.png"
import pic68 from "./imgs/68.png"
import pic69 from "./imgs/69.png"
import pic70 from "./imgs/70.png"
import pic71 from "./imgs/71.png"
import pic72 from "./imgs/72.png"
import pic73 from "./imgs/73.png"
import pic74 from "./imgs/74.png"
import pic75 from "./imgs/75.png"
import pic76 from "./imgs/76.png"
import pic77 from "./imgs/77.png"
import pic78 from "./imgs/78.png"
import pic79 from "./imgs/79.png"
import pic80 from "./imgs/80.png"
import pic81 from "./imgs/81.png"
import pic82 from "./imgs/82.png"
import pic83 from "./imgs/83.png"
import pic84 from "./imgs/84.png"
import pic85 from "./imgs/85.png"
import pic86 from "./imgs/86.png"
import pic87 from "./imgs/87.png"
import pic88 from "./imgs/88.png"

export default () => (
    <article className={styles.container}>
    
    <h1 className={styles.h1}>
    webpack 4 官网摘抄 01
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
    
    <div>
    2018-11-27更新<br/>
    感觉好难。不少知乎网友也觉得难。<br/>
    其实webpack 4学习体验有点像今天五六月份在<span className={styles.code}>codewars</span>上面刷JS题一样。<br/>
    简单点的，可以自己搞定。<br/>
    复杂点的，有答案看，也看不懂。<br/>
    其实都是有规律，有逻辑可循的，得需要耐心去实践，积累，阅读官网指导。<br/>
    昨天晚上开始阅读官网，觉得还是官网讲的最好。<br/>
    2018-11-27-更新结束
    </div>
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
    
    <a href="#header05">
    <li>webpack 4 处理HTML文件--配置步骤--完整版</li>
    </a>
    
    <a href="#header06">
    <li>官网-Entry Points 摘抄</li>
    </a>
    
    <a href="#header07">
    <li>官网-Output 摘抄</li>
    </a>
    
    <a href="#header08">
    <li>官网-Mode 摘抄</li>
    </a>
    
    <a href="#header09">
    <li>官网-Plugins 摘抄</li>
    </a>
    
    <a href="#header10">
    <li>官网-配置指南 摘抄</li>
    </a>
    
    <a href="#header11">
    <li>官网-Dependency Graph 摘抄</li>
    </a>
    
    <a href="#header12">
    <li>官网-Manifest Graph 摘抄</li>
    </a>
    
    <a href="#header13">
    <li>官网-Hot Module Replacement 摘抄</li>
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
    
    <h2 name='header05'>5-webpack 4 处理HTML--配置步骤</h2>
    
    <div>
    为了能处理HTML文件，webpack需要额外两个组件：<span className={styles.code}>html-webpack-plugin</span>和<span className={styles.code}>html-loader</span>。<br/>
    运行：
    </div>
    <br/>
    
    <div className={styles.codeblock}>
    <pre className={styles.pre}>
    <code>
    cd 相应文件夹<br/>
    npm i html-webpack-plugin html-loader --save-dev
    </code>
    </pre>
    </div> 
    <br />
    
    <div>
    创建<span className={styles.code}>webpack.config.js</span>。<br/>
    加入以下基本配置：
    </div>
    <br/>
    
    <br />
    <div>
    01/02
    <img src={pic66} alt="配置文件01" className={styles.img}/>
    </div>
    <br />
    
    <br />
    <div>
    02/02
    <img src={pic67} alt="配置文件02" className={styles.img}/>
    </div>
    <br />
    
    <div>
    <span className={styles.code}>module and rules</span><br />
    配置<span className={styles.code}>loader</span>的地方。
    <br/>
    <span className={styles.code}>plugins</span>
    配置Webpack将用到的plugin的地方。<br/>
    创建HTML文件：
    </div>
    <br/>
    
    <br/>
    <div className={styles.codeblock}>
    <pre className={styles.pre}>
    <code data-lang="javascript">
    ./scr/index.html<br />
    ./scr/index.js
    </code>
    </pre>
    </div> 
    
    <br />
    <div>
    <img src={pic68} alt="HTML文件" className={styles.img}/>
    </div>
    <br />
    
    <br />
    <div>
    <img src={pic69} alt="JS文件" className={styles.img}/>
    </div>
    <br />
    
    <div>
    运行：
    <span className={styles.code}>npm run build</span>
    <br/>
    很会你会发现<span className={styles.code}>dist/index.html</span>。而且这个文件经过压缩处理。
    </div>
    <br/>
    
    <br />
    <div>
    <img src={pic70} alt="压缩后的HTML" className={styles.img}/>
    </div>
    <br />
    
    <h2 name='header06'>06-官网-Entry Points 摘抄</h2>
    
    <a href='https://webpack.js.org/concepts/entry-points/' target='_blank' rel="noopener noreferrer">摘抄网址</a>
    <br />
    
    <br />
    <div>
    multiple ways to define the entry property in your webpack configuration
    <br />
    <br />
    We will show you the ways you can configure the entry property, in addition to explaining why it may be useful to you.
    <br />
    <br />
    <strong>01-Single Entry (Shorthand) Syntax</strong> 
    </div>
    <br/>
    
    <br />
    <div>
    <img src={pic71} alt="官网讲解01" className={styles.img}/>
    </div>
    <br />
        
    <br />
    <div>
    <img src={pic72} alt="官网讲解02" className={styles.img}/>
    </div>
    <br />
        
    <div>
    <strong>What happens when you pass an array to entry? </strong>
    <br/>
    开始-Passing an array of file paths to the entry property <br/>
    creates what is known <br/>
    as a "multi-main entry".<br/>
    This is useful 
when you would like to inject multiple dependent files together and graph their dependencies into one "chunk".
-结束
    </div>
    <br/>
        
    <div>
    <strong>single entry syntax 适用场景</strong><br/>
    This is a great choice when you are looking to quickly setup a webpack configuration for an application or tool with one entry point (i.e., a library).
    <br/>
    <br/>
    <strong>single entry syntax 局限</strong><br/>
    there is not much flexibility in extending or scaling your configuration with this syntax.
    </div>
    <br/>
        
    <div>
    <strong>02-Object Syntax</strong>
    </div>
    <br/>

    <div>
    <img src={pic73} alt="Object Syntax 讲解01" className={styles.img}/>
    </div>
   
    <div>
    <img src={pic74} alt="Object Syntax 讲解02" className={styles.img}/>
    </div>
    <br />
        
    <div>
    <strong>Object Syntax优点</strong><br />
    The object syntax is more verbose. <br />However, this is the most scalable way of defining entry/entries in your application.
    </div>
    <br/>
        
    <div>
    额外讲解-开始<br/>
    "Scalable webpack configurations" are ones that can be reused and combined with other partial configurations. This is a popular technique used to separate concerns by environment, build target and runtime. They are then merged using specialized tools like webpack-merge.
    额外讲解-结束<br/>
    </div>
    <br/>
      
    <div>
    <strong>现实应用场景</strong><br/>
    <br/>
    Multi Page Application
    </div>
   
    <div>
    <img src={pic75} alt="配置代码" className={styles.img}/>
    </div>
    <br />
   
    <div>
    讲解之-以上代码做了什么<br />
    We are telling webpack that <br />we would like 3 separate dependency graphs <br />(like the above example).
      
    <br />
    讲解之-为什么<br />
    In a multi-page application, the server is going to fetch a new HTML document for you. The page reloads this new document and assets are redownloaded. However, this gives us the unique opportunity to do multiple things:
<br />
Use optimization.splitChunks to create bundles of shared application code between each page. Multi-page applications that reuse a lot of code/modules between entry points can greatly benefit from these techniques, as the amount of entry points increase.
    <br />
    <br />
    <strong>官网推荐</strong><br/>
    for each HTML document<br/> use exactly one entry point.
    </div>
    <br/>
        
    <h2 name='header07'>07-官网-Output 摘抄</h2>
        
    <a href='https://webpack.js.org/concepts/output/' target='_blank' rel="noopener noreferrer">摘抄网址</a>
    <br />
    
    <br />
    <div>
    <strong>综述-干货</strong><br />
    Configuring the output configuration options <br />tells webpack how to write the compiled files to disk. <br />Note that, while there can be multiple entry points,<br /> only one output configuration is specified.
    <br />
    <strong>使用讲解-只有一个Entry Points</strong><br />  
    最起码包含以下。The minimum requirements for the output property in your webpack config 
    <br />is to set its value to an object 
    <br />including the following thing:
    </div>
    
    <div>
    <strong>01/02</strong>
    <img src={pic76} alt="官网讲解" className={styles.img}/>
    </div>
   
    <div>
    <strong>02/02</strong>
    <img src={pic77} alt="官网讲解" className={styles.img}/>
    </div>
    <br />
        
    <div>
    <strong>多 Entry Points 情况讲解</strong><br/> 
    If your configuration creates more than a single "chunk" <br/> (as with multiple entry points <br/> or when using plugins like CommonsChunkPlugin), <br/> you should use substitutions <br/> <strong>to ensure that each file has a unique name.</strong>
    </div>
    <br/>  
        
    <div>
    <img src={pic78} alt="官网demo" className={styles.img}/>
    </div>
    <br />  
      
    <a href='https://webpack.js.org/configuration/output/#output-filename' target='_blank' rel="noopener noreferrer">更多操作讲解链接</a>
    <br />
        
    <h2 name='header08'>08-官网-Mode 摘抄</h2>
        
    <a href='https://webpack.js.org/concepts/mode/' target='_blank' rel="noopener noreferrer">摘抄链接</a>
    <br />   
      
    <br /> 
    <div>
    <span className={styles.code}>mode</span> configuration option <br /> tells webpack to use its built-in optimizations accordingly.
    </div>
    <br />
    <div>
    可以用的几个值
    <img src={pic79} alt="mode官网讲解" className={styles.img}/>
    </div>
    <br />
     
    <br />
    <div>
    使用格式01/02
    <img src={pic80} alt="mode如何使用" className={styles.img}/>
    </div>
    <br />
        
    <br />
    <div>
    使用格式02/02
    <img src={pic81} alt="mode如何使用" className={styles.img}/>
    </div>
    <br />
       
    <br />
    <div>
    <img src={pic82} alt="官网讲解" className={styles.img}/>
    </div>
    <br />
        
    <h2 name='header09'>09-官网-Plugins 摘抄</h2>

    <a href='https://webpack.js.org/concepts/plugins/' target='_blank' rel="noopener noreferrer">摘抄链接</a>
    <br />   
    <br />
        
    <div>
    <strong>综述</strong><br/> 
    Plugins are the backbone of webpack. 
    <br/> <br/> 
    webpack itself is built on the same plugin system that you use in your webpack configuration!
    <br/> 
    They also serve the purpose of doing anything else that a loader cannot do.
    </div>
    <br/>  
        
    <div>
    <strong>Anatomy</strong><br/>
    干货-<span className={styles.code}>A webpack plugin</span> is <br/><strong>a JavaScript object that has an <span className={styles.code}>apply </span> method.</strong>
    <br/><br/>
    <span className={styles.code}>apply </span> is called by the webpack compiler, <br/>giving access to the entire compilation lifecycle.
    </div>
    <br/>
      
    <div>
    <img src={pic83} alt="官网讲解" className={styles.img}/>
    </div>
    <br />
        
    <div>
    以上图片讲解-开始<br/>
    The first parameter of the tap method of the compiler hook <br/>should be a camelized version of the plugin name.
    <br/>
    It is advisable <br/>to use a constant for this so it can be reused in all hooks.
    </div>
    <br/>  
        
    <div>
    <strong>使用指南-大概的讲解</strong><br/>
    Since plugins can take arguments/options,<br/> 
    <strong>you must pass a new instance to the plugins property </strong><br/>in your webpack configuration.
    <br/>
    Depending on how you are using webpack, <br/>there are multiple ways to use plugins.
    <br/><br/>
    配置DEMO-无讲解：
    </div>
    <br/>
        
    <br />
    <div>
    01/02
    <img src={pic84} alt="官网DEMO" className={styles.img}/>
    </div>
    <br />
     
    <div>
    02/02
    <img src={pic85} alt="官网DEMO" className={styles.img}/>
    </div>
    <br />
       
    <h2 name='header10'>10-官网-配置指南 摘抄</h2>

    <div>
    综述<br/><br/>
    You may have noticed that <br/>few webpack configurations look exactly alike. <br/><br/>This is because webpack's configuration file is <br/>a JavaScript file <br/>that exports a webpack configuration. <br/><br/>This configuration is then processed by webpack <br/>based upon its defined properties.<br/>
    it's a standard Node.js CommonJS module。<br/><br/>
    可以使用-建议使用以下：
    </div>
    <br/>
  
    <div>
    <img src={pic86} alt="可以使用-建议使用这些" className={styles.img}/>
    </div>
    <br />
        
    <div>
    谨慎使用或不用使用：
    </div>

    <div>
    <img src={pic87} alt="谨慎使用或不用使用" className={styles.img}/>
    </div>
    <br />
        
    <h2 name='header11'>11-官网-Dependency Graph 摘抄</h2>

    <a href='https://webpack.js.org/concepts/dependency-graph/' target='_blank' rel="noopener noreferrer">摘抄链接</a>
    <br />   
    <br />
      
    <div>
    Any time <br />one file depends on another,<br /> 
    webpack treats this as a <strong>dependency</strong>. 
    <br />
    This allows webpack to take non-code assets, <br />
    such as images or web fonts, <br />
    and also provide them <strong>as dependencies </strong>for your application.
    <br /><br />
    When webpack processes your application, <br />
    it <strong>starts from</strong> a list of modules <br />defined on the command line or in its config file. 
    <br />
    Starting from these entry points, <br />
    webpack recursively builds a dependency graph <br />that includes every module your application needs, <br />then bundles all of those modules into a small number of bundles - <br />often, just one - <br />to be loaded by the browser.
    <br /><br />
    Bundling your application is especially powerful for HTTP/1.1 clients, as it minimizes the number of times your app has to wait while the browser starts a new request. For HTTP/2, you can also use Code Splitting to achieve best results. 
    </div>
    <br/>
        
    <h2 name='header12'>12-官网-Manifest Graph 摘抄</h2>
        
    <a href='https://webpack.js.org/concepts/manifest/' target='_blank' rel="noopener noreferrer">摘抄链接</a>
    <br />   
    <br />  
    
    <div>
    In a typical application or site built with webpack, <br />there are <strong>three main types of code:</strong>
    </div>
    <br/>
     
    <div>
    <img src={pic88} alt="官网讲解" className={styles.img}/>
    </div>
    <br />
        
    <div>
    本篇文章重点讲解runtime和manifest.<br /><br />
    <strong>Runtime 讲解</strong><br />
    The runtime, <br />along with the manifest data, 
    <br />is basically all the code webpack needs to connect your modularized application <br />while it's running in the browser. <br />
    It contains the loading and resolving logic <br />needed to connect your modules as they interact. <br />This includes connecting modules <br />that have already been loaded into the browser as well as logic to lazy-load the ones that haven't.<br /><br />

    <strong>Manifest 讲解</strong><br /> 
    Once your application hits the browser in the form of <span className={styles.code}>index.html</span> file, 
    <br />     
    some bundles and a variety of other assets required by your application <br /> 
    must be loaded and linked somehow. 
    <br /> 
    That <span className={styles.code}>/src </span> directory you meticulously laid out 
    <br /> 
    is now bundled, minified and maybe even split into smaller chunks for lazy-loading 
    <br /> by webpack's optimization. <br /> 
    So how does webpack manage the interaction <br /> between all of your required modules? <br /> This is where the <strong>manifest data </strong>comes in...
    <br />
     <br />
    As the compiler enters, resolves, and maps out your application, <br />
    it keeps detailed notes on all your modules. <br />
    <strong>
    This collection of data is <br />called the <span className={styles.code}>"Manifest"</span> and <br />it's what the runtime will use to resolve and load modules <br />once they've been bundled and shipped to the browser. 
    </strong> 
    <br /><br />
    No matter which module syntax you have chosen, <br />
    those import or require statements have now become __webpack_require__ methods that point to module identifiers. 
    <br /><br />
    Using the data in the manifest, <br />
    <strong>the runtime</strong> will be able to <br />
    find out where to retrieve the modules behind the identifiers.<br /><br /> 
        
    <strong>The Problem 讲解</strong><br />  
    So now you have a little bit of insight about how webpack works behind the scenes. <br /><br />
    "But, how does this affect me?", you might ask. 
    <br /><br />
    The simple answer is that most of the time it doesn't.
    <br /><br />
    The <strong>runtime</strong> will do its thing,<br /> utilizing the manifest, <br />and everything will appear to just magically work <br />once your application hits the browser. <br /><br />
    <strong>However</strong>
    , if you decide to improve your projects performance <br />by utilizing browser caching, <br />this process will all of a sudden become an <strong>important</strong> thing to understand.  
     <br/><br/>   
    By using <span className={styles.code}>content hashes</span> within your bundle file names, 
    <br/> you can indicate to the browser <br/>
    when the contents of a file has changed 
    <br/>thus invalidating the cache. 
    <br/><br/>
    Once you start doing this though, <br/>
    you'll immediately notice some funny behavior. <br/>
    Certain hashes change <br/>
    even when their contents apparently do not. <br/>
    This is caused <br/>
    by the injection of the runtime and manifest which changes every build.
    <br/><br/> 
    See the manifest section of our Output management guide to learn how to extract the manifest, and read the guides below to learn more about the intricacies of long term caching.
    </div>
    <br/>
        
    <h2 name='header13'>13-官网-Hot Module Replacement 摘抄</h2>  
    
    <a href='https://webpack.js.org/concepts/hot-module-replacement/' target='_blank' rel="noopener noreferrer">摘抄链接</a>
    <br /> 
     
    <div>
    <strong>作用讲解</strong><br />
    <span className={styles.code}>Hot Module Replacement (HMR)</span> exchanges, adds, or removes modules<br /> 
    while an application is running,<br /> 
    without a full reload. <br />
    This can significantly speed up development <br />
    in a few ways:
    <br /><br />
    <strong>01</strong><br />
    Retain application state <br />which is lost during a full reload.    
    
    <br /><strong>02</strong><br />
    Save valuable development time <br />by only updating what's changed  
        
    <br /><strong>03</strong><br />
    Modifications made to CSS/JS in the source code <br />
    results in an instant browser update <br />
    which is almost comparable to changing styles <br />
    directly in the browser's dev tools.<br />
    </div>
    <br/>
       
        
        
        
     
    </article>
)