import React from "react"
import styles from "./article01.js.module.css"
import pic108 from "./imgs/108.png"
import pic109 from "./imgs/109.png"
import pic110 from "./imgs/110.png"
import pic111 from "./imgs/111.png"
import pic112 from "./imgs/112.png"
import pic113 from "./imgs/113.png"
import pic114 from "./imgs/114.png"
import pic115 from "./imgs/115.png"
import pic116 from "./imgs/116.png"
import pic117 from "./imgs/117.png"

export default () => (
    <article className={styles.container}>
    
    <h1 className={styles.h1}>
    webpack-loader运行顺序及写法
    </h1>
    
    <div className={styles.date}>
    2018-12-2
    </div>
    
    <div>
    本篇博客以具体的例子介绍webpack中loader的运行顺序，以及相对应的不同写法。<br/><br/>
    为了简洁，鲜明得表现出loader 运行的内在规律，只用了
    
    <span className={styles.code}>html-webpack-plugin</span>
    ，
    <span className={styles.code}>css-loader</span>
    和
    <span className={styles.code}>style-loader</span>。
    
    </div>
    <br/>
   
    <ol>
    
    <a href="#header01">
    <li>最直观的运行顺序-从下至上</li>
    </a>
    
    <a href="#header02">
    <li>从右边到左及对应配置文件写法01</li>
    </a>
    
    <a href="#header03">
    <li>从右边到左及对应配置文件写法02</li>
    </a>
    
    <a href="#header04">
    <li>常用 loader</li>
    </a>
    
    </ol>
    
    <h2 name="header01">01-最直观的运行顺序-从下至上</h2>
    
    <div>
    准备工作(默认已经安装好相应的npm包)：
    </div>
    <br/>
    
    <br />
    <div>
    <img src={pic108} alt="准备工作代码" className={styles.img}/>
    </div>
    <br />
        
    <br />
    <div>
    <img src={pic109} alt="准备工作代码" className={styles.img}/>
    </div>
    <br />
        
    <br />
    <div>
    <img src={pic110} alt="所有配置文件代码" className={styles.img}/>
    </div>
    <br />
            
    <br />
    <div>
    <img src={pic111} alt="配置文件重点代码" className={styles.img}/>
    </div>
    <br />
    
    <br />
    <div>
    <img src={pic112} alt="运行结果" className={styles.img}/>
    </div>
    <br />
    
    <h2 name="header02">02-从右边到左及对应配置文件写法01</h2>
 
    <br />
    <div>
    <img src={pic108} alt="准备工作代码" className={styles.img}/>
    </div>
    <br />
        
    <br />
    <div>
    <img src={pic109} alt="准备工作代码" className={styles.img}/>
    </div>
    <br />
        
    <br />
    <div>
    <img src={pic113} alt="全部配置文件" className={styles.img}/>
    </div>
    <br />
        
    <br />
    <div>
    <img src={pic114} alt="全部配置文件" className={styles.img}/>
    </div>
    <br />
        
    <h2 name="header03">03-从右边到左及对应配置文件写法02</h2>
    
    <br />
    <div>
    <img src={pic115} alt="准备工作01" className={styles.img}/>
    </div>
    <br />

    <br />
    <div>
    <img src={pic109} alt="准备工作代码02" className={styles.img}/>
    </div>
    <br />

    <br />
    <div>
    <img src={pic116} alt="所有配置文件代码" className={styles.img}/>
    </div>
    <br />

    <h2 name="header04">04-常用 loader</h2>
    
    <div>
    这些应该算最基本款的webpack loader：
    </div>
    <br/>
  
    <br />
    <div>
    <img src={pic117} alt="最基本款的loader" className={styles.img}/>
    </div>
    <br />
    </article>
)