import React from "react"
import styles from "./article01.js.module.css"
import pic130 from "./imgs/130.jpg"
import pic131 from "./imgs/131.png"
import pic132 from "./imgs/132.png"
import pic133 from "./imgs/133.png"
import pic134 from "./imgs/134.png"
import pic135 from "./imgs/135.png"
import pic136 from "./imgs/136.png"
import pic137 from "./imgs/137.jpg"
import pic138 from "./imgs/138.png"
import pic139 from "./imgs/139.png"
import pic140 from "./imgs/140.png"
import pic141 from "./imgs/141.png"
import pic142 from "./imgs/142.png"
import pic143 from "./imgs/143.png"
import pic144 from "./imgs/144.png"
import pic145 from "./imgs/145.png"

export default () => (
	<article className={styles.container}>
    
    <h1 className={styles.h1}>
    解释 [hash]-[chunkhash]-[contenthash]
    </h1>
    
    <div className={styles.date}>
    2018-12-9
    </div>
    
    <div>
    这几天基本都在学习<span className={styles.code}>webpack</span>。<br/><br/>
    
    跟着官网教程走，现在对webpack 的基本功能和运行逻辑有比较好的了解。<br/>也接触了其他与webpack密切相关的技术，比如<span className={styles.code}>Babel 7</span>。<br/><br/>
    
    本篇博客我将解释[hash]-[chunkhash]-[contenthash]
    。
    </div>
    <br/>
    
    <ol>
    
    <a href="#header01">
    <li>不只以上三个placeholder</li>
    </a>
    
    <a href="#header02">
    <li>我对这三个hash的整体理解</li>
    </a>
    
    <a href="#header03">
    <li>本讲-相关配置</li>
    </a>
    
    <a href="#header04">
    <li>[hash] 讲解</li>
    </a>
    
    <a href="#header05">
    <li>[chunkhash] 讲解</li>
    </a>
    
    <a href="#header06">
    <li>[contenthash] 讲解</li>
    </a>
    </ol>
    
    <h2 name="header01">
    01-不只以上三个placeholder
    </h2>
    
    <div>
    除了以上三个，还有这些：<br/><br/>
    
    <strong>[id]</strong><br/>
    
    <strong>[path]</strong><br/>
    
    <strong>[name]</strong><br/>
    
    <strong>[ext]</strong><br/>
    </div>
    <br/>
    
    <h2 name="header02">
    02-我对这三个hash的整体理解
    </h2>
    
    <div>
    我感觉这这三个hash，跟<span className={styles.code}>HTTP协议</span>中<span className={styles.code}>ETag</span>response header 形式和功能很像。
    </div>
    <br/>
    
    <div>
    <img src={pic130} alt="ETag MDN讲解" className={styles.img}/>
    </div>
    <br />
    
    <div>
    <img src={pic131} alt="ETag MDN讲解" className={styles.img}/>
    </div>
    <br />
    
    <div>
    目的都是充分利用<strong>缓存</strong>机制，<br />
    这样，既可以节省带宽，又可以提高网站/应用性能。
    </div>
    <br/>
  
    <h2 name="header03">
    03-本讲-相关配置
    </h2>
    
    <div>
    <strong>01</strong><br/>
    下面配置文件中我有用<span className={styles.code}>ES6</span>语法写配置文件。<br/>如果你想了解更多，请点击<a href='/../articles/article07/' target='_blank' rel="noopener noreferrer">此链接</a>。<br/><br/>
    
    <strong>02</strong><br/>
    在开发阶段，建议不要使用这些hash。<br/>
    开发阶段如果使用这些hash，渲染速度会比较慢，不利于快速开发。<br/><br/>
    
    <strong>03</strong><br/>
    使用到的plugin/loader不多：<br/>
    <strong>node-sass</strong><br/>
    <strong>sass-loader</strong><br/>
    <strong>style-loader</strong><br/>
    <strong>mini-css-extract-plugin</strong> 将生成一个CSS文件<br/>
    <strong>html-webpack-plugin</strong> 将生成一个HTML文件<br/><br/>
    <strong>04</strong><br/>
    一开始配置文件中没有<span className={styles.code}>entry</span>。(后面会调整)<br/>
    这样，webpack会按照其默认流程走：<br/>
    去<span className={styles.code}>src</span>文件夹中，寻找<span className={styles.code}>index.js</span>这样一个文件。<br/><br/>
    <strong>05</strong><br/>
    以下为具体配置：
    </div>
    <br/>
    
  
    <div>
    <img src={pic132} alt="配置文件" className={styles.img}/>
    </div>
    <br />
    
    <div>
    <img src={pic133} alt="配置文件" className={styles.img}/>
    </div>
    <br />
    
    <div>
    <img src={pic134} alt="配置文件" className={styles.img}/>
    </div>
    <br />
    
    <div>
    <strong>06</strong><br/>
    <span className={styles.code}>src</span>中文件一共两个文件：
    </div>
    <br />
    
    <div>
    <img src={pic136} alt="src文件" className={styles.img}/>
    </div>
    <br />
    
   
    <br />
    

    <h2 name="header04">
    04-[hash] 讲解
    </h2>
    
    <div>
    [hash]逻辑相对简单。<br/>
    有以下三个结论。<br/><br/>
    <strong>结论一</strong><br/>
    在同一次构建中，生成的文件基于同源文件，生成的文件的hash值是一样的。<br/>
    生成的文件基于不同源文件，hash值不一样。<br/>
    <strong>比如：</strong>本例中，webpack首先会找<span className={styles.code}>index.js</span>这样一个文件。<br/>
    然后在同一<span className={styles.code}>index.js</span>文件中，webpack会发现<span className={styles.code}>style.scss</span>。
    <br/>
    生成的JS文件和CSS文件会是一样的hash值。<br/><br/>
    HTML文件由<span className={styles.code}>html-webpack-plugin</span>自动生成，<br/>其hash值与以上二文件不一样。<br/><br/>
    请看运行<span className={styles.code}>npm run build</span>之后的图片：
    </div>
    <br/>
    
    <div>
    <img src={pic135} alt="配置文件调整" className={styles.img}/>
    </div>
    <br />
    
    <div>
    <img src={pic137} alt="对比hash值" className={styles.img}/>
    </div>
    <br />
    
    <div>
    <strong>结论二</strong><br/>
    这三个文件不做任何改变，重新运行<span className={styles.code}>npm run build</span>后，<br/>
    其hash值不变。
    </div>
    <br />
    
    <div>
    <img src={pic138} alt="对比hash值" className={styles.img}/>
    </div>
    <br />
    
    <div>
    <strong>结论三</strong><br/>
    JS或CSS文件有任何改变，重新运行<span className={styles.code}>npm run build</span>后，<br/>
    其hash值全部改变。
    </div>
    <br />
    
    <div>
    <img src={pic139} alt="对比hash值" className={styles.img}/>
    </div>
    <br />
    
    <div>
    <img src={pic140} alt="对比hash值" className={styles.img}/>
    </div>
    <br />
    
    
    <h2 name="header05">
    05-[chunkhash] 讲解
    </h2>
    
    <div>
    关于[chunkhash]，有两个比较重要的结论。<br/><br/>
    <strong>结论一</strong><br/>
    <span className={styles.code}>src</span>文件夹中，文件名一致，其chunkhash 值一样。文件名不一致，其chunkhash 值不一样。<br/>
    看具体例子：
    </div>
    <br/>
    
     <div>
    <img src={pic141} alt="配置文件调整" className={styles.img}/>
    </div>
    <br />
    
     <div>
    <img src={pic142} alt="src文件夹调整" className={styles.img}/>
    </div>
    <br />
    
     <div>
    <img src={pic143} alt="运行结果" className={styles.img}/>
    </div>
    <br />
    
     <div>
   <strong>结论二</strong><br/>
    以上例子中，<br /><span className={styles.code}>index.js</span>或<span className={styles.code}>index.scss</span>其一文件有任何变化后，<br />这两个对应生成的chunkhash 值变化。<br/><br/>
    <span className={styles.code}>vendor.js</span>文件没有变化，之前文件的变化对<span className={styles.code}>vendor.js</span>的chunkhash没有影响。
    <br />
    请看图：
    </div>
    <br />
    
     <div>
    <img src={pic144} alt="第二次运行webpack" className={styles.img}/>
    </div>
    <br />
    
    
    <h2 name="header06">
    06-[contenthash] 讲解
    </h2>
    
    <div>
    [contenthash]值与由插件生成的文件相关。<br/><br/>
    比较常见的插件有：<br/>
    <strong>html-webpack-plugin</strong><br/>
    <strong>mini-css-extract-plugin</strong><br/>
    <strong>extract-text-webpack-plugin</strong><br/>
    (这个在<span className={styles.code}>webpack 4</span>之前比较常见)<br/><br/>
    
    用<span className={styles.code}>mini-css-extract-plugin</span>说明。<br/><br/>
    
    本例中，<span className={styles.code}>index.scss</span>文件没有变化，webpack 运行后生成的contenthash没有变化。<br/><br/>
    
    <span className={styles.code}>index.scss</span>文件变化，<strong>mini-css-extract-plugin</strong>输出的CSS文件有变化，webpack 运行后生成的contenthash会变化。
    </div>
    <br/>
    
    <div>
    <img src={pic145} alt="对比CSS不同运行结果" className={styles.img}/>
    </div>
    <br />
    
    
    
    <div>
    希望上面的讲解对你有帮助。
    </div>
    <br/>
    
    </article>
)