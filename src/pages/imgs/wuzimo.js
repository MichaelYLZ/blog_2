import React from "react"
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import pic00 from "./kid/00.png"
import pic01 from "./kid/01.jpg"
import pic02 from "./kid/02.jpg"
import pic03 from "./kid/03.jpg"
import pic04 from "./kid/04.jpg"
import pic05 from "./kid/05.jpg"
import pic06 from "./kid/06.jpg"
import pic07 from "./kid/07.jpg"

import styles from './books.module.css'

export default () => (
	<Slider>
    <img src={pic00} className={styles.con} alt="吴子墨小朋友--00/07" />
	<img src={pic01} className={styles.con} alt="吴子墨小朋友--01/07" />
    <img src={pic02} className={styles.con} alt="吴子墨小朋友--02/07" />
    <img src={pic03} className={styles.con} alt="吴子墨小朋友--03/07" />
    <img src={pic04} className={styles.con} alt="吴子墨小朋友--04/07" />
    <img src={pic05} className={styles.con} alt="吴子墨小朋友--05/07" />
    <img src={pic06} className={styles.con} alt="吴子墨小朋友--06/07" />
    <img src={pic07} className={styles.con} alt="吴子墨小朋友--07/07" />
    
</Slider>
)