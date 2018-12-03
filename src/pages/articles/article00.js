import React from "react"
import styles from "./article01.js.module.css"
import pic97 from "./imgs/97.png"
import pic98 from "./imgs/98.png"
import pic99 from "./imgs/99.png"
import pic100 from "./imgs/100.png"
import pic101 from "./imgs/101.png"
import pic102 from "./imgs/102.png"
import pic103 from "./imgs/103.png"
import pic104 from "./imgs/104.png"
import pic105 from "./imgs/105.png"
import pic106 from "./imgs/106.png"
import pic107 from "./imgs/107.png"


export default () => (
	<article className={styles.container}>
    
    <h1 className={styles.h1}>
    00-JS 那些事儿
    </h1>
 
    <div className={styles.date}>
    2018-11-30
    </div>
    
    <div>
    仅以此文，表达我对JS的爱。
    </div>
    <br/>
    
    <ol>
    <a href="#header01">
    <li>JS官网</li>
    </a>
    
    <a href="#header02">
    <li>JS和Java</li>
    </a>
    
    <a href="#header03">
    <li>JS名字</li>
    </a>
    
    <a href="#header04">
    <li>JS最重点的特点是这个</li>
    </a>
    
    <a href="#header05">
    <li>JS创始人</li>
    </a>
    
    <a href="#header06">
    <li>JS借鉴这些语言</li>
    </a>
    
    <a href="#header07">
    <li>单线程</li>
    </a>
    
    <a href="#header08">
    <li>JS异步编程</li>
    </a>
    
    <a href="#header09">
    <li>ES5/ES6</li>
    </a>
    
    <a href="#header10">
    <li>JS最新版本</li>
    </a>
    
    <a href="#header11">
    <li>弱型</li>
    </a>
    
    <a href="#header12">
    <li>严格模式</li>
    </a>
    
    </ol>
    
    <h2 name="header01">
    01-JS官网
    </h2>
    
    <div>
    先上官网。<br/>
    https://developer.mozilla.org/en-US/docs/Web/JavaScript
    
    <br/><br/>
    我一开始就是跟着官网学习。现在想想，其实是个错误的选择。<br/><br/>
    
    JS官网不适合非计算机科班的人。<br/><br/>
    
    比如，官网教程中，完全没有提到常用数据结构的工作机制。
    <br/><br/>
    
    第一次见到recursion/递归代码的时候，我的头，晕了好久。<br/><br/>
    
    后来才知道，call stack，LIFO，是理解递归函数的关键。<br/><br/>
    
    我读过一本o'reilly 教材，上面提到，这些写官网教材的程序员，他们时间精力也有限，教材不可能详细到方方面面，每个细节。<br/><br/>
    
    这个网站的话，其实不只有JS讲解，例子。<br/>
    还有HTML讲解，CSS讲解，HTTP讲解，,DOM API，等等。
    </div>
    <br/>
    
    <h2 name="header02">
    02-JS和Java
    </h2>
    
    <div>
    先来看下知乎网友的讨论。
    </div>
    <br/>
    
    <br />
    <div>
    01/02<br />
    <img src={pic97} alt="知乎网友讨论" className={styles.img}/>
    </div>
    <br />
    
    <br />
    <div>
    02/02<br />
    <img src={pic98} alt="知乎网友讨论" className={styles.img}/>
    </div>
    <br />
    
    <div>
    有的网友在认真答题。<br/>
    有的网友在<strong>开玩笑</strong>。<br/><br/>
    在这里，谈下我理解。<br/><br/>
    
    <a href='https://en.wikipedia.org/wiki/Main_Page' target='_blank' rel="noopener noreferrer">参考资料维基百科。</a>
    <br/><br/>
    
    
    JS和Java在当代IT界，都是很强势的存在，有极广泛的应用。<br/><br/>
    JS和Java都有C语言的影子。<br/><br/>
    2009-5-27以后，随着<span className={styles.code}>Node.js</span>的出现，他们都可以在服务器环境下运行。<br/><br/>
    
    Java于1995-5-23正式面世。<br/>
    JS于1995-12-4正式面世。<br/>
    Java是JS哥哥。<br/><br/>
    
    JS有借鉴Java。<br/>
    JS的Date 对象就是借鉴了Java。<br/>
    (这里参考资料是<a href='https://www.amazon.com/Learning-JavaScript-Essentials-Application-Development/dp/1491914912/ref=sr_1_1?s=books&ie=UTF8&qid=1543630806&sr=1-1' target='_blank' rel="noopener noreferrer"> Ethan Brown的<span className={styles.code}>Learning JavaScript</span></a>一书)
    </div>
    <br/>
    
    <div>
    <img src={pic99} alt="Learning JavaScript一书截图" className={styles.img}/>
    </div>
    <br />
      
    <div>
    虽然借鉴不多，但是还是有。<br /><br />
    </div>
    <br/>
        
    <h2 name="header03">
    03-JS名字
    </h2>  
        
    <div>
    大家熟悉的名字有这两个：<br/>
    01-<strong>JavaScript (JS)</strong> <br/>
    02-<strong>ECMAScript</strong> <br/>
      <br/><br/>  
    1995年五月份， Brendan Eich，JS创始人，花了10天时间写了JS。
    <br/><br/>
    开发阶段的时候，JS是叫<span className={styles.code}>Mocha</span>。<br/><br/>
    1995年九月份，正式发布的时候，是叫<span className={styles.code}>LiveScript</span>。<br /><br />
    1995年十二月份，改成了<span className={styles.code}>JavaScript</span>。<br /><br />
    通俗的讲，当时<strong>Netscape 公司</strong>就是想蹭Java的热度。
    </div>
    <br/>
        
    <h2 name="header04">JS最重点的特点</h2>
      
    <br />
    <div>
    <img src={pic100} alt="JS官网" className={styles.img}/>
    </div>
    <br />
        
    <div>
    以上截图来自JS官网。<br/>  <br/>  
    这个陈述句很简洁的介绍了JS。用了三个形容词来修饰：<br/> 
    <strong>01-基于原型的</strong><br/> 
    <strong>02-多范式的</strong><br/> 
    <strong>03-动态的</strong><br/> <br/> 
    在我理解中，第一点，<strong>基于原型</strong>，是JS语言最重要的特点。<br/><br/>
    再来一点官网截图，感受一些无处不在的原型：
    </div>
    <br/>  
        
    <br />
    <div>
    <strong>01/03</strong>
    <img src={pic101} alt="JS官网" className={styles.img}/>
    </div>
    <br />
        
    <br />
    <div>
    <strong>02/03</strong>
    <img src={pic102} alt="JS官网" className={styles.img}/>
    </div>
    <br />
        
    <br />
    <div>
    <strong>03/03</strong>
    <img src={pic103} alt="JS官网" className={styles.img}/>
    </div>
    <br />
        
    <div>
    使用chrome浏览器控制台，更加具体得看看原型链工作：
    </div>
    <br/>  
        
    <br />
    <div>
    <strong>01/04</strong>
    <img src={pic104} alt="谷歌浏览器截图" className={styles.img}/>
    </div>
    <br />
        
    <br />
    <div>
    <strong>02/04</strong>
    <img src={pic105} alt="谷歌浏览器截图" className={styles.img}/>
    </div>
    <br />
        
    <br />
    <div>
    <strong>03/04</strong>
    <img src={pic106} alt="谷歌浏览器截图" className={styles.img}/>
    </div>
    <br />
        
    <br />
    <div>
    <strong>04/04</strong>
    <img src={pic107} alt="谷歌浏览器截图" className={styles.img}/>
    </div>
    <br />
        
    
    关键词
    <span className={styles.code}>Gatsby</span>
    
    图片
    <br />
    <div>
    <img src={pic97} alt="Gatsby大量使用无状态组件" className={styles.img}/>
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
   
    
    链接
    
    <a href='https://www.netlify.com/blog/2016/02/24/a-step-by-step-guide-gatsby-on-netlify/' target='_blank' rel="noopener noreferrer">具体操作可点击这里</a>
   
    </article>
)