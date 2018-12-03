import React from "react"
import styles from "./article01.js.module.css"
import pic118 from "./imgs/118.png"
import pic119 from "./imgs/119.jpg"
import pic120 from "./imgs/120.png"
import pic121 from "./imgs/121.jpg"
import pic122 from "./imgs/122.jpg"
import pic123 from "./imgs/123.jpg"

export default () => (
	<article className={styles.container}>
    
    <h1 className={styles.h1}>
    关于博主
    </h1>
    
    <div className={styles.date}>
    2018-12-2
    </div>
    
    <div>
    本篇简要介绍下我的编程学习之路和之前的翻译工作经历。
    </div>
    <br/>
    
    <ol>
    
    <a href="#header01">
    <li>先上个人照片</li>
    </a>
    
    <a href="#header02">
    <li>编程学习</li>
    </a>
    
    <a href="#header03">
    <li>物流公司翻译经历</li>
    </a>
    
     <a href="#header04">
    <li>菲律宾房地产项目翻译经历</li>
    </a>
    
    </ol>
    
    <h2 name="header01">先上个人照片</h2>
    
    <br />
    <div>
    <img src={pic118} alt="自己照片" className={styles.img}/>
    </div>
    <br />
    
    <h2 name="header02">编程学习</h2>
    
    <div>
    我最初是通过知乎了解到编程这个行业。<br/>
    我记得有篇知乎文章讲，编程行业是需要实实在在的兴趣。<br/>
    如果没有兴趣，不能持续学习，做这个行业是走不远的。<br/><br/>
    
    我就抱着<strong>试试看的心态</strong>学习了<span className={styles.code}>C语言</span>。<br/><br/>
    
    我个人，非常不喜欢葡萄酒。闻到那个味道就觉得很难受。<br/><br/>
    
    我当时想，如果在学习中，对编程学习也是对葡萄酒一样的态度，那就放弃。
    <br/><br/>
    当时用的教材是知乎网友推荐的一本教材。当时还是用XP电脑在学C语言。
    <br/><br/>
    我当时用的<strong>C语言编译器</strong>：
    </div>
    
    <br />
    <div>
    <img src={pic119} alt="C语言编译器" className={styles.img}/>
    </div>
    <br />
    
    <div>
    安装好之后，编译器不能正常工作。<br /><br />
    然后我就知乎。还好，知乎上有篇专门介绍安装此编译器步骤的文章。
    <br /><br />
    如何也是花了一点时间，才编译了一个"hello world"。
    <br /><br />
    当时就觉得<strong>很神奇</strong>。<br /><br />
    后来就看教材讲解，把教材代码看一遍，自己裸写一遍。<br /><br />
    我甚至，有时候还能挑出教材里面代码错误。<br /><br />
    反正就觉得很有趣，对自己<strong>有信心</strong>。
    <br /><br />
    2017-10份以后，开始学习<span className={styles.code}>HTML</span>，<span className={styles.code}>CSS</span>。<br /><br />
    我当时用的教材是<span className={styles.code}>MDN</span>上面的在线教材。
    <br /><br />
    当时还在西餐厅兼职。<br />
    有时候，其他一些学生兼职有事情，或全职服务员有事情，我工时会多些。
    <br /><br />
    所有就是，断断续续的在学习。<br /><br />
    
    <strong>
    2017-12下半旬，从西餐厅离职。<br />
    正式开始了我的全职编程学习生活。
    </strong><br /><br />
    
    我是2018年以后，才开始学习<span className={styles.code}>JS</span>。<br /><br />
    
    早就听知乎网友说了，原生JS不好学，但是很重要。现在想想，确实是的，需要耐心和毅力。<br /><br />
    开始学习JS，得到这样的信息。
    </div>
    <br/>
    
    <div className={styles.codeblock}>
    <pre className={styles.pre}>
    <code data-lang="javascript">
    var a = "abcd";<br/>
    a = 1234;<br/>
    a = true;<br/>
    </code>
    </pre>
    </div> 
    <br/>
    <strong>想怎么改就怎么改。</strong><br/><br/>
    
    <div>
    当时印象就是，跟C语言，不太一样。<br/><br/>
    后来知道了一个编程刷题网站<a href='https://www.codewars.com' target='_blank' rel="noopener noreferrer">codewars</a>。
    <br/>
    知乎网友很推荐用这个刷JS题，巩固JS语法学习。
    </div>
    <br/>
    
    <br />
    <div>
    <img src={pic120} alt="JS刷题网站" className={styles.img}/>
    </div>
    <br />
    
    <div>
    在这个网站上，见识了一些厉害的代码。<br/>
    有些解答，很简洁，很利索。<br/><br/>
    反正，这一路，最多的时间是花在了原生JS学习。<br/><br/>
    <span className={styles.code}>F.prototype</span><br/>
    <span className={styles.code}>__proto__</span><br/>
    <span className={styles.code}>Class</span><br/>
    <span className={styles.code}>遗传</span><br/>
    这些以及和这些相关知识点，花点时间，可以理解，自己会有个思路。
    <br/><br/>
    
    <span className={styles.code}>闭包</span><br/>
    <span className={styles.code}>Recursion and stack</span><br/>
    <span className={styles.code}>Currying</span><br/>
    这些JS函数编程相关知识点，我感觉比原型和遗传知识点，要难，需要花更多的时间。<br/><br/>
    也花了不少时间学习，练习了<span className={styles.code}>原生DOM API</span>。<br/><br/>
    最近一直忙着学习<span className={styles.code}>react</span>和
    <span className={styles.code}>webpack</span>,这些原生DOM API用的不是那么熟了。<br/><br/>
    但是有几个印象蛮深，觉得很实用：
    </div>
    <br/>
    
    <div className={styles.codeblock}>
    <pre className={styles.pre}>
    <code data-lang="javascript">
    document.documentElement.clientWidth<br/>
    window.getComputedStyle(element[, pseudoElt])<br/>
    window.scrollTo(x-coord, y-coord)<br/>
    Element.getBoundingClientRect()
    </code>
    </pre>
    </div> 
    
    <br/>
    <div>
    这一路走来，肯定是有焦虑，困惑。<br/>
    不过我很幸运，我都会找到很棒的教材。
    <br/><br/>
    学习编程和学习任何其他技能一样。<br/>
    需要的资源和素质，我觉得，排第一的是<strong>好的/合适的教材</strong>。<br/>
    因为只有好的教材，会激发学习者的兴趣和潜力。<br/><br/>
    然后，需要耐心，积累，把学到的东西用起来。<br/>
    这样，一定会<strong>量变引起质变</strong>。
    </div>
    <br/>
    <h2 name="header03">物流公司翻译经历</h2>

    <div>
    这是一家搬家公司，主要为外企服务。<br/><br/>
    由于公司北京总部有比较大的人事变动，然后南京部门业务量确实不给力，先是南京部门人事变动， 
        <br/>
    后来江苏分公司已经解散，有活的话，可能派个销售来看下，然后其他全都外包。<br/>
    北京上海的业务是正常做的，生意应该还可以。<br/><br/>
    我所在的江苏分公司主要业务是：<br/>
    <strong>海运出口</strong><br/>
    <strong>海运进口</strong><br/>
    <strong>空运出口</strong><br/>
    <strong>客运进口</strong><br/><br/>
      
    空运费用要贵好多。所以海运业务多一些。<br/>
    海运业务的话，基本都是出口。<br/>
    暑假前后是旺季，经常需要加班。
    <br/><br/>
        
    假设，爱立信有位外籍员工任期满，要回国。这位员工住仙林一小区，他屋子里所有东西要带回瑞典。<br/><br/>
    爱立信公司会有人联系我们内勤销售。<br/>
    我们销售跟他们确认好后，会给外勤经理发类似任务书的文件，上面会提到，什么时间，什么地点，有多少东西，需不需要外包车辆，需不需要由外勤人员收费。<br/><br/>
    然后我要打印标签，写材料单，和工人一起装打包材料上车。
    </div>
    <br/>
        
    <br />
    <div>
    <img src={pic121} alt="标签" className={styles.img}/>
    </div>
    <br />
    <div>
    标签中<strong>SO</strong>是两个英语单词首字母：<br/>
    Sea Outbound/海运出口<br/><br/>
    上面还有时间，始发地，终点这些信息。<br/><br/>
    到了打包当天。<br/>
    我，一个人，先去客人家里。<br/>
    我要跟客人讲解我们工作流程，作息时间，海关一些要求。如果需要见海关，我要用告知他具体地点，时间。<br/><br/>
    原则上，他们需要去海关，见海关科长。(但是有时候，有的客人不需要见海关，我也不知道为神马。)<br/><br/>
    客人也会跟我讲，哪些是房东物品，哪些东西要小心。<br/><br/>
    沟通好了，工人开始打包。<br/><br/>
    <strong>我最重要的工作来了。</strong><br/><br/>
    工人一边打包，我要及时贴上标签，在明细清单上面登记。<br/><br/>
    活儿结束的时候，会很具体得有个数字，一共多少件货。<br/><br/>
    我和客人需要签字确认。<br/><br/>
    <strong>南京海关，目的地海关工作人员会看这个清单。</strong>
    <br/><br/>
    因为这个工作，我去过的南京外企有：<br/>
    六合-巴斯夫(安保最严)，<br/>
    江宁-福特，<br/>
    仙林-南京国际学校<br/>
    新街口-德勤<br/><br/>
        
    几乎每周都要去龙潭港。
    </div>
    <br/>
    <div>
    <img src={pic122} alt="南京龙潭港" className={styles.img}/>
    </div>
    <br />
    
    <h2 name="header04">菲律宾房地产项目翻译经历</h2>
    
    <div>
    这个工作经历比较有意思。<br/>
    半年的时间，<strong>我主要做了两件事情</strong>：<br/>
    01-跟踪，反馈菲律宾同事申请建筑许可证<br/>
    02-许可证下来后，陪老板菲律宾出差。<br/><br/>
    那位菲律宾同事，<br/>
    <strong>既是菲律宾人，也是美国人</strong><br/>
    双重国籍。
    </div>
    <br/>
    <br/>
    <div>
    <img src={pic123} alt="菲律宾同事" className={styles.img}/>
    </div>
    <br />
    
    <div>
    菲律宾和我们国家很不一样，整体节奏比较慢。<br/>
    菲律宾是宗教国家。周六或周日，他们都要去教堂。<br/><br/>
    我所在的项目地，<strong>一下雨，就没有网</strong>。<br/><br/>
    下雨天在菲律宾其实很正常。<br/>
    所以，有时候，一周都没有邮件，进度比较慢。<br/><br/>
    菲律宾首都，马尼拉，那里的网要好很多。<br/><br/>
    国内的翻译，就是邮件翻译。<br/>
    英翻中，中翻英。<br/><br/>
    在国外的话，除了现场面对面翻译，还需要处理电话。<br/><br/>
    因为之前一份工作，也经常需要跟外国人通电话，所以，我适用的还可以。<br/><br/>
    菲律宾人很好，东西很好吃。
    <br/><br/>
    <strong>有一点比较困扰我。</strong><br/>
    我们是2017年1月去的，那里相对是不会有什么恶劣天气的季节。
    有一天晚上睡觉，听到外面很吓人的风。<br/>
    第二天早上起来，发现并没有什么破坏。<br/>
    类似这样的恶劣天气，对我困扰比较大。<br/><br/>
        
    这里是结尾。谢谢你的阅读。
    </div>
    <br/>  
    </article>
)