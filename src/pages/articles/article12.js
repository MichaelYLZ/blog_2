import React from "react"
import styles from "./article01.js.module.css"

export default () => (
	<article className={styles.container}>
    
    <h1 className={styles.h1}>
    WebAssembly_资料/工具_链接
    </h1>
    
    <div className={styles.date}>
    2019/3/31
    </div>
    
    <div>
    <a href='https://wasdk.github.io/WasmFiddle/?q1rr6' target='_blank' rel="noopener noreferrer">01 工具</a> 把C或C++转换成wasm在线工具/神器
    </div>
    
    <div>
    <a href='https://pspdfkit.com/blog/2018/optimize-webassembly-startup-performance/' target='_blank' rel="noopener noreferrer">02 干货</a> 利用前后端资源_提高WebAssembly应用性能
    </div>
    
    <div>
    <a href='https://www.forcepoint.com/blog/security-labs/analyzing-webassembly-binaries' target='_blank' rel="noopener noreferrer">03 干货</a> 使用chrome浏览器_调试WebAssembly代码
    </div>
    
    <div>
    <a href='https://blog.mikaellundin.name/2016/06/19/creating-a-webassembly-binary-and-running-it-in-a-browser.html' target='_blank' rel="noopener noreferrer">04 干货</a> 深入讲解webassembly二进制代码
    </div>
    
    <div>
    <a href='https://github.com/guybedford/wasm-intro' target='_blank' rel="noopener noreferrer">05 代码</a> 一整套GitHub_WASM demo代码_无讲解
    </div>

    </article>
)