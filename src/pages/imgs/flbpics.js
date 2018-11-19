import React from "react"
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import pic01 from "./flb/01.jpg"
import pic02 from "./flb/02.jpg"
import pic03 from "./flb/03.jpg"
import pic04 from "./flb/04.jpg"
import pic05 from "./flb/05.jpg"
import pic07 from "./flb/07.jpg"
import pic08 from "./flb/08.jpg"
import pic09 from "./flb/09.jpg"
import pic10 from "./flb/10.jpg"
import pic11 from "./flb/11.jpg"
import pic12 from "./flb/12.jpg"
import pic13 from "./flb/13.jpg"
import pic14 from "./flb/14.png"
import styles from './books.module.css'

export default () => (
	<Slider>
	<img src={pic01} className={styles.con} alt="菲律宾出差点滴--01/14" />
    <img src={pic02} className={styles.con} alt="菲律宾出差点滴--02/14" />
    <img src={pic03} className={styles.con} alt="菲律宾出差点滴--03/14" />
    <img src={pic04} className={styles.con} alt="菲律宾出差点滴--04/14" />
    <img src={pic05} className={styles.con} alt="菲律宾出差点滴--05/14" />
    <img src={pic07} className={styles.con} alt="菲律宾出差点滴--07/14" />
    <img src={pic08} className={styles.con} alt="菲律宾出差点滴--08/14" />
    <img src={pic09} className={styles.con} alt="菲律宾出差点滴--09/14" />
    <img src={pic10} className={styles.con} alt="菲律宾出差点滴--10/14" />
    <img src={pic11} className={styles.con} alt="菲律宾出差点滴--11/14" />
    <img src={pic12} className={styles.con} alt="菲律宾出差点滴--12/14" />
    <img src={pic13} className={styles.con} alt="菲律宾出差点滴--13/14" />
    <img src={pic14} className={styles.con} alt="菲律宾出差点滴--14/14" /> 
</Slider>
)