import React from "react"
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import pic01 from "./Manning/m01.jpg"
import pic02 from "./Manning/m02.png"
import pic03 from "./Manning/m03.png"
import pic04 from "./Manning/m04.png"
import pic05 from "./Manning/m05.png"
import pic06 from "./Manning/m06.jpg"
import pic07 from "./Manning/m07.jpg"
import pic08 from "./Manning/m08.jpg"
import pic09 from "./Manning/m09.jpg"
import pic10 from "./Manning/m10.png"
import pic11 from "./Manning/m11.jpg"
import pic12 from "./Manning/m12.png"
import styles from './books.module.css'

export default () => (
	<Slider>
	<img src={pic01} className={styles.con} alt="Manning Publications 系列--01/12" />
    <img src={pic02} className={styles.con} alt="Manning Publications 系列--02/12" />
    <img src={pic03} className={styles.con} alt="Manning Publications 系列--03/12" />
    <img src={pic04} className={styles.con} alt="Manning Publications 系列--04/12" />
    <img src={pic05} className={styles.con} alt="Manning Publications 系列--05/12" />
    <img src={pic06} className={styles.con} alt="Manning Publications 系列--06/12" />
    <img src={pic07} className={styles.con} alt="Manning Publications 系列--07/12" />
    <img src={pic08} className={styles.con} alt="Manning Publications 系列--08/12" />
    <img src={pic09} className={styles.con} alt="Manning Publications 系列--09/12" />
    <img src={pic10} className={styles.con} alt="Manning Publications 系列--10/12" />
    <img src={pic11} className={styles.con} alt="Manning Publications 系列--11/12" />
    <img src={pic12} className={styles.con} alt="Manning Publications 系列--12/12" />
</Slider>
)