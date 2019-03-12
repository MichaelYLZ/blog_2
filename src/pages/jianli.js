import React from "react"
import "./cssForCV.css"

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
    随时到岗<br />
    177-1289-6753 <br />liyang_shifan@163.com
    <br />
    <a href='https://liyang2019.netlify.com/' className="link" target='_blank'>个人博客</a>
    </p>
    
    <h2 className="head extra">
    求职意向
    </h2>
                               
    <p className="data">
    Web前端<br /><br />
    希望加入使用<code>React</code>和<code>Redux</code>技术栈的团队。
    </p>
    
    <h2 className="head extra">
    技能介绍
    </h2>
                               
    <p className="data">
    无障碍阅读英文技术博客/文档<br /><br />
    
    理解<code>代码可读性</code>重要性<br /><br />
    
    对<code>原生JavaScript</code>有很好的理解，熟练使用 <code>ES6</code><br /><br />
    
    熟悉原生<code>Ajax</code>，熟练使用<code>Axios</code><br /><br />
    
    熟练使用<code>React</code><br /><br />
    
    熟悉<code>Redux</code>，<code>react-redux</code>核心API源码<br /><br />
    我自己整理了<a href='https://github.com/MichaelYLZ/redux_src_code' className="link" target='_blank'>一套demo</a>，分别使用Redux和react-redux核心API源码，结合DOM，实现一些简单效果，从而可以更好理解Redux，react-redux<br /><br />
    
    掌握<code>Webpack 4</code>的使用，会打包构建基于react框架的web前端应用，熟悉常见loader和plugin<br /><br />
    
    
    可以用<code>Express</code>框架搭配<code>MongoDB</code>实现<code>CRUD</code>功能<br /><br />
    
    熟悉<code>SQL</code>基础语句，熟悉<code>MySQL</code>基础命令行操作
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
    待遇：4k-5k<br />
    这是一个菲律宾房地产项目。我负责翻译老板和菲律宾同事的来往邮件。各项许可证于2016年11份上半旬下来。2017年1月4号至2017年1月14号陪同老板赴菲出差。工作后期需要长期驻菲律宾工作，个人对菲律宾气候不是很适应，后来提出了离职。
    </div>
    </div>
    
    <div className="flexParent">
    <div className="flex1 time">
    2015年1月-2016年5月
    </div>
    
    <div className="flex2">
    华辉国际运输服务有限公司江苏分公司<br />
    职位：英语翻译<br />
    待遇：4k-5k<br />
    公司做私人物品的国际运输业务，其中以海外出口为主，服务客户主要是省内的欧美外企。内勤发来工作指令后，我和打包工人，司机一齐准时去客人家。我主要负责和客人的沟通，做出口物品明细清单。这个清单很重要，国内国外海关都会看。后来因江苏分公司业绩不理想，被公司裁员。
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