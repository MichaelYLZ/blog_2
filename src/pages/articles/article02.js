import React from "react"
import styles from "./article01.js.module.css"
import pic08 from "./imgs/08.png"
import pic09 from "./imgs/09.png"
import pic10 from "./imgs/10.png"
import pic11 from "./imgs/11.png"

export default () => (
    <article className={styles.container}>
    
    <h1 className={styles.h1}>
    webpack4初体验
    </h1>
    
    <div className={styles.date}>
    2018-11-20
    </div>
    
    <div>
     2018-11-30更新<br/>
    这几天跟着webpack官网，还有我第九篇博客推荐的网站学习，回过头想想，还是这里的资源最适合0基础学习webpack。<br/>
    这个网站，在讲解一开始，就旗帜鲜明的提到 webapck 4 不需要配置文件的特点，以及基于此特点的代码demo。<br/><br/>
    这样，就可以很直观，很具体的了解webpack 最本质功能，最基本流程。
    <br/><br/>
    有时候看那些教材，看了一下午，觉得头好晕。<br/>
    但是一旦联系上无配置状态下，webpack 工作流程，思路又来了。
    
    2018-11-30更新结束<br/><br/>
    <span className={styles.code}>webpack</span>绝对是当代前端的大热门技术。之前一直忙着博客，需要找素材，搜集照片，对照片简单处理，写样式。因为对<span className={styles.code}>GraphQL</span>很感兴趣，也花了点时间学习了前端GraphQL的语法。这几天要开始学习webpack了。
    </div>
    <br/>
    
    <div>
    昨天开始找webpack相关的学习资料。上个月，我用一个2017出版的教材，npm安装里面的webpack demo。然后就报错，说有些配置已经不支持。所以昨天找资料的时候，有特别关注那些技术博客的出版时间。2018年之前的资料，基本不会打开。
    </div>
    <br/>
    
    <div>
    谷歌搜索比较靠前，时效性有保证的，一<a href='https://webpack.js.org/guides/' target='_blank' rel="noopener noreferrer">官网</a>，二是<a href="https://www.valentinog.com/blog/webpack-tutorial/#webpack_4_getting_started_with_zero_conf" target='_blank' rel="noopener noreferrer">一个意大利人写的技术博客</a>。
    </div>
    <br/>
    
     <div>
    <img src={pic08} alt="webpack官网" className={styles.img}/>
    </div>
    <br />
    <br />
     <div>
    <img src={pic09} alt="webpack技术博客" className={styles.img}/>
    </div>
    <br />
    <br />
    <div>
    跟着意大利人写的博客的代码，我第一次用webpack，把一HTML文件所有空格全部删掉。以下是之前与之后的照片。感觉很有意思。
    </div>
    <br/>
    
    <div>
    <img src={pic10} alt="之前的HTML" className={styles.img}/>
    </div>
    <br />
    <br />
     <div>
    <img src={pic11} alt="webpack处理后的HTML" className={styles.img}/>
    </div>
    </article>
)