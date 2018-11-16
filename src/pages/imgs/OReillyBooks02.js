import React from "react"
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import pic11 from "./OReilly/O11.png"
import pic12 from "./OReilly/O12.png"
import pic13 from "./OReilly/O13.jpg"
import pic14 from "./OReilly/O14.png"
import pic15 from "./OReilly/O15.png"
import pic16 from "./OReilly/O16.jpg"
import pic17 from "./OReilly/O17.png"
import pic18 from "./OReilly/O18.png"
import pic19 from "./OReilly/O19.png"
import pic20 from "./OReilly/O20.png"
import styles from './books.module.css'

export default () => (
	<Slider>
	<img src={pic11} className={styles.con} alt="O'Reilly Media--动物王国系列02--11/20" />
    <img src={pic12} className={styles.con} alt="O'Reilly Media--动物王国系列02--12/20" />
    <img src={pic13} className={styles.con} alt="O'Reilly Media--动物王国系列02--13/20" />
    <img src={pic14} className={styles.con} alt="O'Reilly Media--动物王国系列02--14/20" />
    <img src={pic15} className={styles.con} alt="O'Reilly Media--动物王国系列02--15/20" />
    <img src={pic16} className={styles.con} alt="O'Reilly Media--动物王国系列02--16/20" />
    <img src={pic17} className={styles.con} alt="O'Reilly Media--动物王国系列02--17/20" />
    <img src={pic18} className={styles.con} alt="O'Reilly Media--动物王国系列02--18/20" />
    <img src={pic19} className={styles.con} alt="O'Reilly Media--动物王国系列02--19/20" />
    <img src={pic20} className={styles.con} alt="O'Reilly Media--动物王国系列02--20/20" />
</Slider>
)