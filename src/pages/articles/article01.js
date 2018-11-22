import React from "react"
import styles from "./article01.js.module.css"
import pic01 from "./imgs/01.png"
import pic02 from "./imgs/02.png"
import pic03 from "./imgs/03.png"
import pic04 from "./imgs/04.png"
import pic05 from "./imgs/05.png"
import pic06 from "./imgs/06.png"
import pic07 from "./imgs/07.png"

export default () => (
	<article className={styles.container}>
    
    <h1 className={styles.h1}>Gatsby简介</h1>
    
    <div className={styles.date}>
    2018-11-11
    </div>
    
	<div>
    一开始，我打算用<span className={styles.code}>jekyll</span>做一个静态博客。后来，在官网读到，jekyll只正式支持Mac和Linux。我的笔记本是windows的，所以放弃了。
    后来我就谷歌了关键词"static site generator"，有几篇标题类似于"2018年10个最热门的静态博客应用"都提到了<span className={styles.code}>Gatsby</span>。
    </div>
    <br/>
    <div>
    比较吸引我的是，<span className={styles.code}>Gatsby</span>是用<span className={styles.code}>react</span>写UI的。最近一直在学习<span className={styles.code}>react</span>，这正是练习巩固<span className={styles.code}>react</span>的好机会。
    </div>
    
    <ol>
    <a href="#header01">
    <li>不只react</li>
    </a>
    <a href="#header02">
    <li>Gatsby使用体验</li>
    </a>
    </ol>
    
    <h2 name="header01">不只react</h2>
    <div>
    Gatsby是基于<span className={styles.code}>Node.js</span>做的一个免费应用。官网提供了8节课来完整的介绍此应用。学习者顺着官网教材走的话，会遇到:
    </div> 
    <ul>
    <li>ES6</li><li>GraphQL</li><li>markdown</li>
    <li>CSS in JS框架 Glamor和Styled Components</li><li>CSS Module</li>
    <li>Node.js</li>
    <li>npm</li>
    </ul>
    <div>
    官网demo中大量使用了<span className={styles.code}>ES6 Module</span>，<span className={styles.code}>object destructuring assignment</span>。react组件都是用<span className={styles.code}>ES6 arrow function</span>写的无状态组件。官网demo中几乎没有用到<span className={styles.code}>class</span>定义组件。也没有<span className={styles.code}>state</span>。我觉得这也符合静态博客应用的本质逻辑。
    </div>
    <br/>
    <div>
    <img src={pic01} alt="Gatsby大量使用无状态组件" className={styles.img}/>
    </div>
    
    <div>
    <img src={pic02} alt="object destructuring assignment语法的使用" className={styles.img}/>
    </div>
    
     <div>
    官网比较推荐<span className={styles.code}>CSS Module</span>和<span className={styles.code}>CSS in JS</span>。感觉这两个都应该是国外程序员圈子中比较新的实践。最近其实新出了好多<span className={styles.code}>CSS in JS</span>框架，<a href="https://www.styled-components.com" target='_blank' rel="noopener noreferrer">Styled Components</a>应该算最热门的。
    </div>
    <br/>
    
    <div>
    这个CSS in JS框架中大量使用了ES6 Template literals
    <br />
    <img src={pic03} alt="Styled Components例子01" className={styles.img}/>
    </div>
    
    <div>
    <img src={pic04} alt="Styled Components例子02" className={styles.img}/>
    </div>
    
     <div id='a'>
    CSS Module在Gatsby中是这样使用。
    </div>
    <br/>
    
    <div>
    <img src={pic05} alt="CSS Module简介-01" className={styles.img}/>
    </div>
    
    <div>
    <img src={pic06} alt="CSS Module简介-02" className={styles.img}/>
    </div>
    
    <div>
    <img src={pic07} alt="CSS Module简介-03" className={styles.img}/>
    </div>
    
    <div>
    我明显感觉，<span className={styles.code}>CSS Module</span>跟react更搭。
    使用CSS Module好处就是，可以做到CSS同HTML分离。我的JSX中基本没有CSS。这样也可以使CSS代码很容易重复使用。虽然是用react组件写UI，但是体验还是跟传统HTML中插入link的写代码体验是一样的。
    </div>
    <br/>
     <div>
    <span className={styles.code}>Gatsby</span> hello world demo 可以在<span className={styles.code}>localhost:8000</span>正常显示后，你就可以使用以下服务上线啦，而且没有费用。
    </div>
    
    <ul>
    <li>Git</li><li>Github</li>
    <li>Netlify</li>
    </ul>
    
    <div>
    <a href='https://www.netlify.com/blog/2016/02/24/a-step-by-step-guide-gatsby-on-netlify/' target='_blank' rel="noopener noreferrer">具体操作可点击这里</a>
    </div>
    
    <h2 name="header02">Gatsby使用体验</h2>
     <div>
    该配置的，官网提供的代码都配置好了。我只需要专注于写react组件就好了。所以，假如你有ES6和react基础，你会发现用这个特别顺畅。
    </div>
    
     <div>
    Gatsby同时也跟Git，Github，Netlify这些服务无缝对接，上传文件或是做修改，都很方便。
    </div>  
    </article>
)