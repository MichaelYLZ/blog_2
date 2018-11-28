import React from "react"
import styles from "./article01.js.module.css"
import pic89 from "./imgs/89.png"
import pic90 from "./imgs/90.png"
import pic91 from "./imgs/91.png"
import pic92 from "./imgs/92.png"
import pic93 from "./imgs/93.png"
import pic94 from "./imgs/94.png"
import pic95 from "./imgs/95.png"

export default () => (
    <article className={styles.container}>
    
    <h1 className={styles.h1}>
    webpack 4 汇总 02
    </h1>
    
    <div className={styles.date}>
    2018-11-27
    </div>
    
    <div>
    <strong>webpack 4 汇总 01</strong>做了一些官网摘抄，偏理论方面。还详细记录其他网站的一些实际操作步骤。<br/>
    这篇博客，我是一边跟着官网实际操作部分，一边写代码，使用webpack，一边简要的把流程，讲的一些干货记录下来。<br/>
    具体网址在下面。<br/><br/>
    2018-11-28更新<br/>
    这里整理了一二讲知识点。<br/>
    webpack从初级到高级，一共有21讲。感觉在本地电脑做word笔记会快一点。
    等看得差不多了，也许再写个相关博客。<br/>
    2018-11-28更新-结束
    </div>
    <br/>
    
    <ol>
    
    <a href="#header01">
    <li>参考网址</li>
    </a>
    
    <a href="#header02">
    <li>Getting Started--第一课</li>
    </a>
    
    <a href="#header03">
    <li>Using a Configuration--第一课</li>
    </a>
    
    <a href="#header04">
    <li>NPM Scripts--第一课</li>
    </a>
    
    <a href="#header05">
    <li>Asset Management--第二课</li>
    </a>
    
    <a href="#header06">
    <li>Setup--第二课</li>
    </a>
    
    <a href="#header07">
    <li>Loading CSS--第二课</li>
    </a>
    
    <a href="#header08">
    <li>Loading images--第二课</li>
    </a>
    
    <a href="#header09">
    <li>Loading fonts--第二课</li>
    </a>
    
    <a href="#header10">
    <li>Loading data--第二课</li>
    </a>
    
    <a href="#header11">
    <li>Global Assets--第二课</li>
    </a>
    
    </ol>
    

    
    
   <h2 name="header01">01-参考网址</h2>
    
   <a href='https://webpack.js.org/guides/getting-started/#basic-setup' target='_blank' rel="noopener noreferrer">官网操作模块</a><br/><br/>
    
   <h2 name="header02">02-Getting Started--第一课</h2>
    
   <div>
   Webpack is used to compile JavaScript modules. <br/>Once installed, you can interface with webpack either from its CLI or API. <br/><br/>
   First let's <strong><br/>01-</strong>create a directory, 
   <br/><strong>02-</strong>initialize npm, <br/>
   <strong>03-</strong>install webpack locally, <br/>
   <strong>04-</strong>and install the webpack-cli <br/>
   (the tool used to run webpack on the command line):
   </div>
   <br/>
    
    <div className={styles.codeblock}>
    <pre className={styles.pre}>
    <code data-lang="javascript">
    mkdir webpack-demo && cd webpack-demo<br/>
    npm init -y<br/>
    npm install webpack webpack-cli --save-dev
    </code>
    </pre>
    </div>
    
    <div>
    然后创建相关文件。请参考官网。
    </div>
    <br />
   
    <br />
    <div>
    <img src={pic89} alt="官网例子" className={styles.img}/>
    </div>
    <br />
    
    <div>
    <strong>package.json</strong>调整-讲解<br/>
    We also need to adjust our package.json file in order to <br/>
    make sure we mark our <strong>package as private</strong>, <br/>
    as well as <strong>removing the main entry</strong>. <br/>
    This is to prevent an accidental publish of your code. 
    <br/><br/>
    <strong>以上代码分析</strong><br/>
    </div>
    <br/>
   
    <div>
    
    there are implicit dependencies <br/>between the <span className={styles.code}>script</span> tags. 
    <br/><br/>Our index.js file depends on <span className={styles.code}>lodash</span> being included in the page <br/>before it runs. 
    <br/><br/>
    This is because index.js never explicitly declared a need for lodash; <br/>
    it just assumes that the global variable _ exists.
    <br/><br/>
    There are problems with managing JavaScript projects this way:<br/>
    <strong>01</strong><br/> 
    It is not immediately apparent that <br/>the script depends on an external library. <br/>  
        
    <strong>02</strong><br/> 
    If a dependency is missing, <br/>or included in the wrong order, <br/>the application will not function properly.  <br/>
        
    <strong>03</strong><br/> 
    If a dependency is included but not used, <br/> 
    the browser will be forced to download unnecessary code.   
    <br/> <br/> 
    <strong>用webpack重构</strong> <br/> <br/>   
     
    <strong>01-Creating a Bundle</strong><br/> 
    首先，需要调整文件夹结构。<br/>
    separating the "source" code (/src) from our "distribution" code (/dist). 
                                                                                                         
                                                                                                                                                                                                          
    <br/>The <span className={styles.code}>source code</span> is the code that we'll write and edit. 
    <br/><br/>
                                                                                                                                                                                                   
    The <span className={styles.code}>distribution code</span> is the minimized and optimized <strong>output of our build process</strong> <br/>that will eventually be loaded in the browser.<br/> <br/> 
        
    <strong>To bundle the lodash dependency with index.js,</strong><br/> 
    we'll need to install the library locally:   
    </div>
    <br/> 
        
    <div className={styles.codeblock}>
    <pre className={styles.pre}>
    <code data-lang="javascript">
    npm install --save lodash
    </code>
    </pre>
    </div>    
     
    <br/>  
    <div>
    <span className={styles.code}>npm install --save</span>讲解
    <br/>  
    
    When installing a package <br/>  that will be bundled into your <strong>production bundle</strong>, <br/>
    you should use <strong>npm install --save</strong>. 
    <br/><br/>
    If you're installing a package for <strong>development purposes</strong>
    <br/>
    (e.g. a linter, testing libraries, etc.)<br/>
    then you should use <strong>npm install --save-dev</strong>.

    </div>
    <br/>  

    <div>
    现在来使用<strong>lodash</strong>。<br />
    <strong>src/index.js</strong>和<strong>dist/index.html</strong>需要调整。见官网
    </div>
    
    <br />
    <div>
    <img src={pic90} alt="index.js调整-部分" className={styles.img}/>
    </div>
    <br /> 
      
    <div>
    <strong>对于调整的讲解</strong><br/>
        
    <strong>index.js</strong> explicitly requires lodash to be present, <br/>
    and binds it as _ (no global scope pollution). <br/><br/>
    By stating what dependencies a module needs,<br/> 
    webpack can use this information to build a dependency graph. <br/><br/>
    It then uses the graph to generate an optimized bundle <br/>where scripts will be executed in the correct order.
    <br/><br/>
    运行：
    </div>
        
    <div className={styles.codeblock}>
    <pre className={styles.pre}>
    <code data-lang="javascript">
    npx webpack
    </code>
    </pre>
    </div>   
    
    <div>
    
    <strong>npx webpack</strong>讲解<br/>
    <strong>npx webpack</strong> will take our script at<span className={styles.code}>src/index.js</span>  as the <span className={styles.code}>entry point</span>, 
    <br/>
    and will generate dist/main.js as the <strong>output</strong>. 
    <br/><br/>
    The npx command, <br/>
    which ships with Node 8.2/npm 5.2.0 or higher, <br/>
    runs the webpack binary (./node_modules/.bin/webpack) of the webpack package <br/>
    we installed in the beginning.   
    </div>
    <br/>

    <h2 name="header03">03-Using a Configuration--第一课</h2>

    <div>
    <strong>添加配置文件</strong><br/>
    A configuration file is much more efficient <br/>than having to manually type in a lot of commands in the terminal, <br/>so let's create one。
    </div>
    <br/>
  
    <br />
    <div>
    <img src={pic91} alt="配置文件代码" className={styles.img}/>
    </div>
    <br /> 
        
    <div>
    运行以下。效果与之前一样。<br/> 
    </div>
        
    <div className={styles.codeblock}>
    <pre className={styles.pre}>
    <code data-lang="javascript">
    npx webpack --config webpack.config.js
    </code>
    </pre>
    </div>   
    
    <br/>
    <div>
    
    <strong>额外讲解-开始</strong> <br/><br/>
      
    If a <span className={styles.code}>webpack.config.js</span> is present, 
    <br/>
    the webpack command picks it up by default. <br/><br/>


    We use the <strong>--config</strong> option here only to show that <br/>you can pass a config of any name. <br/><br/>

    This will be <strong>useful</strong> for more complex configurations <br/>that need to be split into multiple files. <br/><br/>

    <a href='https://webpack.js.org/configuration/' target='_blank' rel="noopener noreferrer">配置额外链接资源</a><br/><br/>

    <strong>额外讲解-结束</strong> <br/><br/>  
    </div>
    <br/>

    <h2 name="header04">04-NPM Scripts--第一课</h2>

    <div>
    Given it's not particularly fun to run a local copy of webpack <br/>from the CLI, <br/>we can set up a little <strong>shortcut</strong>. <br/>
    Let's adjust our package.json by adding an npm script:
    </div>
    <br/>

    <br />
    <div>
    <img src={pic92} alt="package.json调整" className={styles.img}/>
    </div>
    <br /> 

    <div>
    Now the <strong>npm run build</strong> command can be used in place of the <strong>npx</strong> command we used earlier. Note that <strong>within scripts</strong> we can reference locally installed npm packages by name the same way we did with npx. This convention is the standard in most npm-based projects because it allows all contributors to use the same set of common scripts (each with flags like --config if necessary).<br/> <br/> 

    <strong>额外知识点-开始</strong><br/> 
    <span className={styles.code}>Custom parameters</span> can be passed to webpack <br/> 
    by adding two dashes between the <strong>npm run build</strong> command and <span className={styles.code}>your parameters</span>, 
    <br/> e.g. <strong>npm run build -- --colors</strong>. <br/>
    <strong>额外知识点-结束</strong><br/>
    </div>
    <br/> 

    <h2 name="header05">05-Asset Management--第二课</h2>

    <div>
    这一讲是基于第一课。这一讲介绍webpack如何对其他资源，如图片，进行优化。<br/><br/>

    <strong>webpack 特点介绍</strong><br/><br/>
    webpack will dynamically bundle all dependencies <br/>(creating what's known as a dependency graph). <br/>
    This is great <br/>
    because every module now explicitly states its dependencies <br/>
    and we'll avoid bundling modules <br/>
    that aren't in use.<br/><br/>

    <strong>One of the coolest webpack features</strong> is that <br/>
    you can also include any other type of file, <br/>
    besides JavaScript, <br/>
    for which there is a loader. <br/><br/>
    This means that <br/>
    <strong>
    the same benefits listed above for JavaScript (e.g. explicit dependencies) can be applied to everything <br/>used in building a website or web app.
    </strong><br/><br/>
    Let's start with CSS, as you may already be familiar with that setup.
    </div>
    <br/>

    <h2 name="header06">06-Setup--第二课</h2>

    <div>
    准备工作。需要对index.html和配置文件做修改。<br/>
    参考官网。
    </div>
    <br/>

    <h2 name="header07">07-Loading CSS--第二课</h2>

    <div>
    
    In order to import a CSS file from within a JavaScript module, <br/>you need to install and add the <strong>style-loader</strong> and <strong>css-loader</strong> to your module configuration:
    </div>
    <br/>

    <div className={styles.codeblock}>
    <pre className={styles.pre}>
    <code data-lang="javascript">
    npm install --save-dev style-loader css-loader
    </code>
    </pre>
    </div>

    <br />
    <div>
    <img src={pic93} alt="配置文件需要调整" className={styles.img}/>
    </div>
    <br /> 

    <div>
        
    <strong>以上代码讲解</strong><br /><br />
    This enables you to <span className={styles.code}>import './style.css'</span> into the file <br />that depends on that styling. <br />
    Now, when that module is run, <br />
    a <span className={styles.code}>style</span> tag with the stringified css <br />
    will be inserted into <br />
    the <span className={styles.code}>head</span> of your html file.<br /><br />
    Let's try it out <br/>
    by adding a new <span className={styles.code}>style.css</span> file to our project <br/>and import it in our index.js。<br/>
    需要添加一些文件，调整配置，见官网。<br/><br/>
    Open up index.html in your browser again and 
    <br/>you should see that 
    <br/>Hello webpack is now styled in red. <br/><br/>
    To see what webpack did, <br/>
    inspect the page <br/>(don't view the page source, as it won't show you the result) <br/>and look at the page's head tags. <br/><br/>
    Note that you can, and in most cases should, minimize css for better load times in production. On top of that, loaders exist for pretty much any flavor of CSS you can think of -- postcss, sass, and less to name a few.
    </div>
    <br/>

    <h2 name="header08">08-Loading images--第二课</h2> 
        
    <div>
    what about our images like backgrounds and icons? <br/> Using the <span className={styles.code}>file-loader</span> 
    <br/> we can easily incorporate those in our system as well:
    </div>
    <br/>  
        
    <div className={styles.codeblock}>
    <pre className={styles.pre}>
    <code data-lang="javascript">
    npm install --save-dev file-loader
    </code>
    </pre>
    </div>  
       
    <div>
    配置文件也需要调整。
    </div>
    <br/>
        
    <br />
    <div>
    <img src={pic94} alt="配置文件调整" className={styles.img}/>
    </div>
    <br />  
        
    <div>
    
    Now, when you <span className={styles.code}>import MyImage from './my-image.png'</span>, 
    <br />that image will be processed and 
    <br />added to your output directory and 
    <br />the <span className={styles.code}>MyImage variable</span> will contain the final url of that image  <br />after processing. 
    <br /><br />
    When using the <span className={styles.code}>css-loader</span>, <br />
    as shown above, <br />
    a similar process will occur for url('./my-image.png') within your CSS. <br /><br />
    The loader will recognize this is a local file, 
    <br />and replace the './my-image.png' path <br />with the final path to the image <br />in your output directory.
    <br /><br />  
        
    The <span className={styles.code}>html-loader</span> handles <strong>&lt;img src="./my-image.png" /&gt; </strong><br />in the same manner.
     <br/><br/>   

    Let's add an image to our project and see how this works, you can use any image you like。<br/><br/>
    需添加文件，参考官网。<br/><br/>
    If you inspect this element, <br/>you'll see that the actual filename has changed to something like 5c999da72346a995e7e2718865d019c8.png. 
    <br/>This means webpack found our file in the src folder and <br/>processed it!<br/><br/>
        
    <strong>建议</strong><br/>
    <strong>A logical next step from here</strong> is minifying and optimizing your images. <br/>
    Check out the <strong>image-webpack-loader</strong> and <strong>url-loader</strong> 
    <br/>for more on how you can enhance your image loading process. 
    </div>
    <br/>
        
    <h2 name="header09">09-Loading fonts--第二课</h2>
      
    <div>
    what about other assets like fonts? <br/><br/>
    <strong>干货</strong><br/><br/>    
    The <strong>file loaders</strong> and <strong>url loaders 
    </strong><br/>will take any file you load through them 
    <br/>and output it to your build directory. 
    <br/>This means 
    <br/>we can use them for any kind of file, <br/>
    including fonts. <br/><br/>
    Let's update our <span className={styles.code}>webpack.config.js</span> to handle font files。<br/>
    文件夹需修改。见官网。<br/><br/>
        
    With the loader configured and fonts in place, 
    <br/>you can incorporate them 
    <br/>via an <strong>@font-face</strong> declaration. 
    <br/><br/>
    The local <strong>url(...)</strong> directive will be picked up <br/>
    by webpack 
    <br/>just as it was with the image: 
    </div>
    <br/>
      
    <h2 name="header10">10-Loading data--第二课</h2>

    <div>
    Another useful asset that can be loaded is data, 
    <br/>
    like JSON files, CSVs, TSVs, and XML. <br/><br/>
    <strong>Support for JSON is actually built-in</strong>, 
    <br/>similar to NodeJS, 
    <br/>meaning <span className={styles.code}>import Data from './data.json'</span> will work by default. 
    <br/><br/>
    To import CSVs, TSVs, and XML 
    <br/>you could use the 
    <strong>csv-loader</strong> and <strong>xml-loader</strong>. 
    <br/><br/>Let's handle loading all three:
    </div>
    <br/>

    <div className={styles.codeblock}>
    <pre className={styles.pre}>
    <code data-lang="javascript">
    npm install --save-dev csv-loader xml-loader
    </code>
    </pre>
    </div> 

    <div>
    文件夹需要调整。具体见官网。<br/><br/>
    Now you can import any one of those four types of data <br/>(JSON, CSV, TSV, XML) <br/>and the <strong>Data variable</strong> you import it to <br/>will contain parsed JSON for easy consumption.<br/><br/>   
    <strong>使用场景介绍</strong><br/>
    This can be especially helpful 
    <br/>when implementing some sort of data visualization <br/>using a tool like <span className={styles.code}>d3</span>. 
    <br/><br/>Instead of making an ajax request and parsing the data at runtime 
    <br/>you can load it into your module 
    <br/>during the build process 
    <br/>so that the parsed data is ready to go 
    <br/>as soon as the module hits the browser.    
    </div>
    <br/>

    <h2 name="header11">11-Global Assets--第二课</h2>

    <div>
    The coolest part of everything mentioned above, 
    <br/>is that loading assets this way <br/>allows you to group modules and assets together <br/>in a more intuitive way. 
    
    <br/><br/>Instead of relying on a global <strong>/assets</strong> directory <br/>that contains everything, 
    <br/>you can group assets with the code <br/>that uses them.
    
    <br/><br/>For example, a structure like this can be very useful:
    </div>
    <br/>

    <br />
    <div>
    <img src={pic95} alt="官网DEMO" className={styles.img}/>
    </div>
    <br /> 
    
    <div>
    
    This setup makes your code a lot more portable 
    <br/>as everything that is closely coupled now lives together. 
    <br/><br/>Let's say 
    <br/>you want to use /my-component in another project, <br/>simply copy or move it into the /components directory over there. 
    <br/><br/>As long as you've installed any external dependencies and your configuration has the same loaders defined, 
    <br/>you should be good to go.<br/><br/>
    However, let's say you're locked into your old ways or you have some assets that are shared between multiple components (views, templates, modules, etc.). 
    <br/>It's still possible to store these assets in a base directory and even use aliasing to make them easier to import.
        
    </div>
    <br/>
   
    </article>
)