import React from "react"
import cssA from "./container.module.css"

export default ({
	children
}) => (
	<div className={cssA.header}>{children}</div>
)