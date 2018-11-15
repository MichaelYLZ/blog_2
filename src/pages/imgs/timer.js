import React from "react"
import styles from "./timer-css-modules.module.css"



class Timer extends React.Component {
	render() {
		if (this.props.timeLeft == null || this.props.timeLeft == 0)
			return <div/>
		return (<p className={styles.letter} id='num'>{this.props.timeLeft}
      </p>)
	}
}

class Button extends React.Component {
	startTimer(event) {
		return this.props.startTimer(this.props.time)
	}

	componentDidMount() {
		this.props.startTimer(this.props.time)
	}

	render() {
		return <p
      id='elem'
      >
        
      {this.props.time} seconds
        
    </p>
	}
}

class TimerWrapper extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			timeLeft: null,
			timer: null
		}
		this.startTimer = this.startTimer.bind(this)
	}

	componentDidMount() {    
    // 清除倒计时元素
      const func = () => document.getElementById('timerContainer').remove();
      setTimeout(() => func(), 6000)
	}

	startTimer(timeLeft) {
		clearInterval(this.state.timer)
		let timer = setInterval(() => {
			console.log('2: Inside of setInterval')
			var timeLeft = this.state.timeLeft - 1
			if (timeLeft == 0) clearInterval(timer)
			this.setState({
				timeLeft: timeLeft
			})
		}, 1000)
		console.log('1: After setInterval')
		return this.setState({
			timeLeft: timeLeft,
			timer: timer
		})
	}


	render() {
		return (
			<div className={styles.container} id='timerContainer'>
        
    <Button time="5" startTimer={this.startTimer}/>
        
    <Timer timeLeft={this.state.timeLeft} className={styles.letter} />
      
   
      </div>
		)
	}
}



export default TimerWrapper;