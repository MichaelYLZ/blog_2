import React from "react"
import "./cssForCV.css"
import pic01 from "./01.png";
import pic02 from "./02.png";
import pic03 from "./03.png";
import pic04 from "./04.png";
import pic05 from "./05.png";
import pic06 from "./06.png";

export default () => (
  <article>
    <h1 className="welcome">
    欢迎阅读我的简历
    </h1>
    
    <h2 className="head">
    李杨 
    </h2>
    
    <p className="intro data">
    28周岁<br />
    本科/学士学位<br />
    来自江苏高邮<br />
    可以随时到岗<br />
    177-1289-6753 <br />liyang_shifan@163.com
    <br />
    <a href='https://liyang2019.netlify.com/' className="link" target='_blank'>个人React博客</a>
    </p>
    
    <h2 className="head extra">
    求职意向
    </h2>
                               
    <p className="data">
    WebAssembly/JavaScript 前端开发
    </p>
    
    <h2 className="head extra">
    技能介绍
    </h2>
                               
    <p className="data">
    热爱IT行业，热爱新技术<br /><br />
    
    无障碍阅读英文技术博客/文档<br /><br />
    
    <code>谷歌</code>重度使用者<br /><br />
     
    理解<code>代码可读性</code>重要性<br /><br />
    
    <strong>01 WebAssembly相关</strong><br /><br />
    
    熟练使用<code>C语言</code>写函数；<br /><br />
    
    理解WebAssembly核心概念，如<code>Module</code>，<code>Instance</code>，<code>export</code>，<code>import</code>；<br /><br />
    
    参考谷歌上面的一些博客，整理并熟悉两种具体使用WebAssembly方式：<br /><br />
    <br /><br /><br />
    <strong>方式一</strong><br /><br />
    <img src={pic01} alt="WA 01" /><br /><br />
    <img src={pic02} alt="WA 02" /><br /><br />
    <img src={pic03} alt="WA 02" /><br /><br />
    <br /><br />
    <strong>方式二</strong><br /><br />
    
    <img src={pic04} alt="WA 02" /><br /><br />
    <img src={pic05} alt="WA 02" /><br /><br />
    <img src={pic06} alt="WA 02" /><br /><br />
    <br /><br />
    
    <strong>02 前端其他</strong><br /><br />
    
    对<code>原生JavaScript</code>有很好的理解，熟练使用 <code>ES6</code><br /><br />
    
    对原生<code>DOM API</code>，<code>BOM API</code>有很好的理解<br /><br />
    
    熟练使用<code>React</code><br /><br />
    
    熟悉<code>webpack</code>使用，搭配常用loader和plugin，压缩以及优化JS和CSS代码，优化图片，解决浏览器兼容性<br /><br />
    
    熟悉原生<code>Ajax</code>，<code>HTTP</code>协议，对前后端交互有很好的理解<br /><br />
    
    <strong>03 后端</strong><br /><br />
    
    暂时后端技能还是<code>Node</code>，<code>Express</code>相关<br /><br />
    
    熟悉<code>SQL</code>基础语句，熟悉<code>MySQL</code>基础命令行操作<br /><br />
    
    愿意去了解，学习<code>C&#35;</code>，<code>.net</code>,<code>visual studio</code>,<code>SQL Server</code><br /><br />
    
    <strong>04 股票/基金知识</strong><br /><br />
    
    对股票和基金有基本的了解，愿意更多关注和了解客户相关的股票/基金业务
    </p>
    
    <h2 className="head extra">
    工作经历
    </h2>
    
    <div className="flexParent">
    <div className="flex1 time">
    2016年6月-2017年3月
    </div>
    
    <div className="flex2">
    菲律宾福乐威房地产有限公司<br />
    职位：英语翻译<br />
    这是一个菲律宾房地产项目。<br />
    我负责翻译老板和菲律宾同事的来往邮件。<br />
    各项许可证于2016年11份上半旬下来。<br />
    2017年1月4号至2017年1月14号陪同老板赴菲出差。<br />
    工作后期需要长期驻菲律宾工作，<br />
    个人对菲律宾气候不是很适应，后来提出了离职。
    </div>
    </div>
    
    <div className="flexParent">
    <div className="flex1 time">
    2015年1月-2016年5月
    </div>
    
    <div className="flex2">
    华辉国际运输服务有限公司江苏分公司<br />
    职位：英语翻译<br />
    公司做私人物品的国际运输业务，<br />
    其中以海外出口为主，<br />
    德国客户比多。

    <br /><br />
    我主要负责和客人的沟通，讲解我们工作流程，一些海关要求，做出口物品明细清单。<br />
    这个清单很重要，国内国外海关都会看。<br />
    后来因江苏分公司业绩不理想，被公司裁员。
    </div>
    </div>
    
    <h2 className="head extra">
    教育背景
    </h2>
    
    <div className="flexParent">
    <div className="flex1 time">
    2007年9月-2012年6月
    </div>
    
    <div className="flex2">
    扬州科技学院高邮学院<br />
    专业：英语专业<br />
    学历：专科<br />
    </div>
    </div>
    
    <div className="flexParent">
    <div className="flex1 time">
    2012年9月-2014年6月
    </div>
    
    <div className="flex2">
    江苏第二师范学院<br />
    专业：汉语言文学<br />
    学历：本科
    </div>
    </div>
  </article>
)