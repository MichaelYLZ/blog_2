import React from "react"
import styles from "./article01.js.module.css"
import pic49 from "./imgs/49.png"
import pic50 from "./imgs/50.png"
import pic51 from "./imgs/51.png"
import pic52 from "./imgs/52.jpg"
import pic53 from "./imgs/53.png"
import pic54 from "./imgs/54.png"
import pic55 from "./imgs/55.png"
import pic56 from "./imgs/56.png"
import pic57 from "./imgs/57.jpg"
import pic58 from "./imgs/58.jpg"

export default () => (
	<article className={styles.container}>
    
    <h1 className={styles.h1}>
    我的博客性能报告-未优化前
    </h1>
    
    <div className={styles.date}>
    2018-11-23
    </div>
    
    <div>
    本文主要把现在这个博客，使用谷歌浏览器相关工具，未优化之前情况下，记录几个不同页面首次加载时间。后面陆续会跟着教材，学习优化，然后做对比。
    </div>
    <br/>
    
    <ol>
    
    <a href="#header01">
    <li>先上数据</li>
    </a>
    
    <a href="#header02">
    <li>浏览器的必要设置及简要介绍</li>
    </a>
    
    <a href="#header03">
    <li>写这篇文章原因</li>
    </a>
    </ol>
    
    <h2 name='header01'>
    先上数据
    </h2>
    
    <div>
    测试时间是下午5-40。测试在笔记本电脑上进行。<br/>
    首页测试：
    </div>
    
    <br />
    <div>
    <img src={pic49} alt="首页测试报告" className={styles.img}/>
    </div>
    <br />
    
    <div>
    文章目录测试：
    </div>
    
    <br />
    <div>
    <img src={pic50} alt="文章目录测试报告" className={styles.img}/>
    </div>
    <br />
    
    
    <div>
    第五篇文章-测试，图片比较多：
    </div>
    
    <br />
    <div>
    <img src={pic51} alt="第五篇文章-测试" className={styles.img}/>
    </div>
    <br />
    
    
    <div>
    测试相册列表中，第4个相册，图片稍多：
    </div>
    
    <br />
    <div>
    <img src={pic52} alt="第4个相册测试报告" className={styles.img}/>
    </div>
    <br />
    
    <div>
    测试相册列表中，第5个相册，图片少些：
    </div>
    
    <br />
    <div>
    <img src={pic53} alt="第5个相册测试报告" className={styles.img}/>
    </div>
    <br />
    
    <h2 name='header02'>
    浏览器的必要设置及简要介绍
    </h2>
    
    <br />
    <div>
    测试前浏览器的必要设置：
    <br />
    注意：测试以后，记得取消<span className={styles.code}>Disable cache 选项</span>
    <img src={pic54} alt="测试前浏览器的必要设置讲解" className={styles.img}/>
    </div>
    
    <br />
    <div>
    报告的一些解释01
    <img src={pic55} alt="报告解释" className={styles.img}/>
    </div>
    
    <br />
    <div>
    <br />
    报告的一些解释02：
    <img src={pic56} alt="报告解释" className={styles.img}/>
    </div>
    
    <h2 name='header03'>
    写这篇文章原因
    </h2>
    
    <div>
    上午在知乎看到关于网络性能的评论：
    </div>
    <br/>

    <div>
    <img src={pic57} alt="知乎截图" className={styles.img}/>
    </div>
    
    <div>
    觉得很有启发，如何找了这样一教材。觉得讲的很好。
    </div>
    <br/>
    
    <div>
    <img src={pic58} alt="book cover" className={styles.img}/>
    </div>
    
    <div>
    今天暂时写到这里。
    </div>
    <br/>
    </article>
)