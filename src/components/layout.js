import React from "react"

import titleStyle from "./layout.module.css"



export default ({
	children
}) => (
	<div>
    <h1 className={titleStyle.title}>欢迎来到小李的博客<span role='img' aria-label="a smile face">😁</span>！</h1>
    {children}
    </div>
)

