import React from "react"
import styles from "./article01.js.module.css"
import pic12 from "./imgs/12.png"
import pic13 from "./imgs/13.png"
import pic14 from "./imgs/14.png"
import pic15 from "./imgs/15.png"
import pic16 from "./imgs/16.png"
import pic17 from "./imgs/17.png"
import pic18 from "./imgs/18.png"
import pic19 from "./imgs/19.png"
import pic20 from "./imgs/20.png"
import pic21 from "./imgs/21.png"
import pic22 from "./imgs/22.png"
import pic23 from "./imgs/23.png"
import pic24 from "./imgs/24.png"
import pic25 from "./imgs/25.png"
import pic26 from "./imgs/26.png"

export default () => (
	<article className={styles.container}>
    
    <h1 className={styles.h1}>
    webpack VS 正则
    </h1>
    
    <div className={styles.date}>
    2018-11-21
    </div>
  
	<div>
    这几天跟着谷歌到的教材学习了<span className={styles.code}>webpack 4</span>。自己跟着教材代码，实现了webpack对<span className={styles.code}>html</span>,<span className={styles.code}>css</span>,<span className={styles.code}>scss</span>,还有图片的优化。感觉webpack真的是功能强大。
    </div>
    <br/>
    
    <div>
    webpack配置文件中，使用到<span className={styles.code}>loader</span>的时候，代码中看到了<span className={styles.code}>正则</span>代码。最近有一段时间没有用正则了，借此篇博客正好复习一下。
    </div>
    <br/>
    
    <div>
    <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions' target='_blank' rel="noopener noreferrer">点击-MDN JS正则讲解</a>
    </div>
    <br/>
    
    <ol>
    <a href="#header01">
    <li>正则知识点</li>
    </a>
    <a href="#header02">
    <li>webpack中的正则demo</li>
    </a>
    </ol>
    
    <h2 name="header01">
    正则知识点
    </h2>
    
    <div>
    <strong>01</strong>-JS中正则有两种语法形式。webpack需要用到第一中，literal 形式。
    </div>
    <br/>
    
    <div>
    <img src={pic12} alt="JS中正则有两种形式" className={styles.img}/>
    </div>
    <br />
    
    <div>
    <strong>02</strong>-正则中的.是一个特殊符号。换行空格它不能匹配，其余都可以匹配，包括汉字。
    </div>
    <br/>
    
    <div>
    <img src={pic13} alt="正则中.讲解" className={styles.img}/>
    </div>
    <br />
    
    <div>
    <img src={pic14} alt="正则中.讲解" className={styles.img}/>
    </div>
    <br />
    
    <div>
    <img src={pic15} alt="正则中.讲解" className={styles.img}/>
    </div>
    <br />
    
    <div>
    <strong>03</strong>-正则中的\，英文是backslash，转意符。.单独出现，可以匹配点，数字，大小写英语字母，汉字。But，在点之前加上\，它将只能匹配点了。
    </div>
    <br/>
    
    <div>
    <img src={pic16} alt="正则中.讲解" className={styles.img}/>
    </div>
    <br />
    
    <div>
    <img src={pic17} alt="正则中.讲解" className={styles.img}/>
    </div>
    <br />
    
    <div>
    <strong>04</strong>-正则中的$。美元符号根据正则的信息，来匹配一个字符串结尾处，看结尾是否包含正则的信息。
    </div>
    <br/>
    
    <div>
    <img src={pic18} alt="正则中.讲解" className={styles.img}/>
    </div>
    <br />
    
    <div>
    <strong>05</strong>-正则中的|。x|y，'x',或'y'。被正则检查的字符串有'x'，匹配'x'，结束。没有'x'，有'y'也可以。没有'y'，就无法匹配。
    </div>
    <br/>
    
    <div>
    <img src={pic19} alt="正则中|讲解" className={styles.img}/>
    </div>
    <br />
    
    <div>
    <img src={pic20} alt="正则中|讲解" className={styles.img}/>
    </div>
    <br />
    
     <div>
    <img src={pic21} alt="正则中|讲解" className={styles.img}/>
    </div>
    <br />
    
    <div>
    <strong>06</strong>-正则中的?，配对0次或者一次。
    </div>
    <br/>
    
    <div>
    <img src={pic22} alt="正则中?讲解" className={styles.img}/>
    </div>
    <br />
    
    <div>
    <img src={pic23} alt="正则中?讲解" className={styles.img}/>
    </div>
    <br />
    
    <h2 name="header02">
    webpack中的正则demo
    </h2>
    
    <div>
    理解以上这些知识，webpack中的正则代码就很容易看懂啦。
    </div>
    <br/>
    
    <div>
    <img src={pic24} alt="webpack中的正则代码" className={styles.img}/>
    </div>
    <br />
    
    <div>
    <img src={pic25} alt="webpack中的正则代码" className={styles.img}/>
    </div>
    <br />
    
    <div>
    <img src={pic26} alt="webpack中的正则代码" className={styles.img}/>
    </div>
    <br />
    
    </article>
)