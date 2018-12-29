import React from "react"
import styles from "./article01.js.module.css"
import pic01 from "./imgs/01.png"

import pic146 from "./imgs/146.png"
import pic147 from "./imgs/147.png"
import pic148 from "./imgs/148.png"
import pic149 from "./imgs/149.png"
import pic150 from "./imgs/150.png"
import pic151 from "./imgs/151.png"
import pic152 from "./imgs/152.png"
import pic153 from "./imgs/153.png"
import pic154 from "./imgs/154.png"
import pic155 from "./imgs/155.png"
import pic156 from "./imgs/156.png"
import pic157 from "./imgs/157.png"
import pic158 from "./imgs/158.png"
import pic159 from "./imgs/159.png"
import pic160 from "./imgs/160.png"
import pic161 from "./imgs/161.png"
import pic162 from "./imgs/162.png"
import pic163 from "./imgs/163.png"
import pic164 from "./imgs/164.png"
import pic165 from "./imgs/165.png"
import pic166 from "./imgs/166.png"
import pic167 from "./imgs/167.png"
import pic168 from "./imgs/168.png"
import pic169 from "./imgs/169.png"
import pic170 from "./imgs/170.png"
import pic171 from "./imgs/171.png"
import pic172 from "./imgs/172.png"



export default () => (
	<article className={styles.container}>
    
    <h1 className={styles.h1}>
    前后端交互的实践与小结
    </h1>
    
    <div className={styles.date}>
    2018-12-29
    </div>
    
    <div>
    之前用JSON文件当数据库，完成了前后端交互，数据可持续储存功能。
    <br/><br/>
    这几天看了一个完整的React+Express+MongoDB的demo。数据库部分看得不是很懂，然后谷歌了几篇MongoD数据库入门文章。
    <br/><br/>
    有点思路了以后就想自己实现一下。
    这个APP类似To Do List。暂时只实现了GET和POST功能。
    <br/><br/>
    趁热打铁，具体代码记录一下整体思路。
    </div>
    
    <ol>
    
    <a href="#header01">
    <li>Github地址</li>
    </a>
    
    <a href="#header02">
    <li>项目简介</li>
    </a>
    
    <a href="#header03">
    <li>数据库-服务器准备工作</li>
    </a>
    
    <a href="#header04">
    <li>React前端与Express服务器交互代码</li>
    </a>
    
    <a href="#header05">
    <li>GET HTTP请求-完整流程</li>
    </a>
    
    <a href="#header06">
    <li>POST HTTP请求-完整流程</li>
    </a>
 
    </ol>
    
    <h2 name='header01'>
    01-Github地址
    </h2>
    
    <div>
    访问<a href='https://github.com/MichaelYLZ/fullstack_2018' target='_blank' rel="noopener noreferrer">Github仓库</a>
    </div>
    
    <h2 name='header02'>
    02-项目简介
    </h2>
    
    <div>
    <img src={pic146} alt="APP界面" className={styles.img}/>
    </div>
    <br />
    
    <div>
    暂时的功能就是写一句话，按点击发送以后，信息会储存到数据库。页面会多出一句刚才的话，输入栏清空。
    <br /><br />
    
    <strong>所用到的相关技术</strong><br /><br />

    <strong>前端</strong><br />
    React<br />
    react-dom<br />
    axios做HTTP请求<br />
    <i>三个都用了CDN</i><br />
    用IIFE和闭包，将HTTP请求相关代码封装到window.client下。
    <br /><br />
    
    <strong>后端</strong><br />
    Express <br />
    MongoDB <br />
    Mongoose <br />
    </div>
    
    <h2 name='header03'>
    03-数据库-服务器准备工作
    </h2>
    
    <div>
    <span className={styles.code}>MongoDB</span>数据库和<span className={styles.code}>Express</span>服务器是独立的个体，需要额外的工具<span className={styles.code}>mongoose</span>把两者连接起来。
    <br /><br />
    遇到有数据库的DEMO时候，我一般会首先打开数据库服务器。这样，服务器代码运行的时候，就可以很快连接数据库。
    </div>
    
    <br />
    <div>
    <img src={pic147} alt="数据库服务器和HTTP服务器" className={styles.img}/>
    </div>
    <br />
    
    <div>
    <strong>准备工作如下：</strong>
    </div><br /><br />
    
    <div>
    <img src={pic148} alt="准备工作" className={styles.img}/>
    </div>
    <br />
    
    <div>
    <img src={pic149} alt="准备工作" className={styles.img}/>
    </div>
    <br />
    
    <div>
    <img src={pic150} alt="准备工作" className={styles.img}/>
    </div>
    <br />
    
    <div>
    <img src={pic151} alt="准备工作" className={styles.img}/>
    </div>
    <br />

    <h2 name='header04'>
    04-React前端与Express服务器交互代码
    </h2>
    
    <div>
    <img src={pic152} alt="前端与Express服务器交互代码" className={styles.img}/>
    </div>
    <br />
    
    <div>
    <img src={pic153} alt="前端与Express服务器交互代码" className={styles.img}/>
    </div>
    <br />
    
    <div>
    <img src={pic154} alt="前端与Express服务器交互代码" className={styles.img}/>
    </div>
    <br />
    
    <div>
    <img src={pic155} alt="前端与Express服务器交互代码" className={styles.img}/>
    </div>
    <br />
    
    <div>
    <img src={pic156} alt="前端与Express服务器交互代码" className={styles.img}/>
    </div>
    <br />
    
    <h2 name='header05'>
    05-GET HTTP请求-完整流程
    </h2>
    
    <div>
    访问<span className={styles.code}>http://localhost:3000</span>后，
    <br />
    <span className={styles.code}>componentDidMount</span>会很快被调用，向后端发送一个GET请求。
    <br />
    服务器会返回所有以前用户提交的句子数据。 <br />
    代码分析如下： <br /> <br />
    </div>
    
    <div>
    <img src={pic157} alt="GET HTTP请求-完整流程" className={styles.img}/>
    </div>
    <br />
    
    <div>
    <img src={pic158} alt="GET HTTP请求-完整流程" className={styles.img}/>
    </div>
    <br />
    
    <div>
    <img src={pic159} alt="GET HTTP请求-完整流程" className={styles.img}/>
    </div>
    <br />
    
    <div>
    <img src={pic160} alt="GET HTTP请求-完整流程" className={styles.img}/>
    </div>
    <br />
    
    <div>
    <img src={pic161} alt="GET HTTP请求-完整流程" className={styles.img}/>
    </div>
    <br />
    
    <div>
    <img src={pic162} alt="GET HTTP请求-完整流程" className={styles.img}/>
    </div>
    <br />
    
    <h2 name='header06'>
    06-POST HTTP请求-完整流程
    </h2>
    
    <div>
    <img src={pic163} alt="" className={styles.img}/>
    </div>
    <br />
    
    <div>
    <img src={pic164} alt="" className={styles.img}/>
    </div>
    <br />
    
    <div>
    <img src={pic165} alt="" className={styles.img}/>
    </div>
    <br />
    
    <div>
    <img src={pic166} alt="" className={styles.img}/>
    </div>
    <br />
    
    <div>
    <img src={pic167} alt="" className={styles.img}/>
    </div>
    <br />
    
    <div>
    <img src={pic168} alt="" className={styles.img}/>
    </div>
    <br />
    
    <div>
    <img src={pic169} alt="" className={styles.img}/>
    </div>
    <br />
    
    <div>
    <img src={pic170} alt="" className={styles.img}/>
    </div>
    <br />
    
    <div>
    <img src={pic171} alt="" className={styles.img}/>
    </div>
    <br />
    
    <div>
    <img src={pic172} alt="" className={styles.img}/>
    </div>
    <br />
    </article>
)