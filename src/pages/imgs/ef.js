import React from "react"
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import pic01 from "./EF/01.jpg"
import pic02 from "./EF/02.jpg"
import pic03 from "./EF/03.jpg"
import pic04 from "./EF/04.jpg"
import pic05 from "./EF/05.jpg"
import pic06 from "./EF/06.jpg"
import pic07 from "./EF/07.png"
import pic08 from "./EF/08.jpg"
import pic09 from "./EF/09.jpg"
import pic10 from "./EF/10.jpg"
import pic11 from "./EF/11.jpg"
import pic12 from "./EF/12.jpg"
import pic13 from "./EF/13.jpg"
import pic14 from "./EF/14.jpg"
import pic15 from "./EF/15.jpg"
import pic16 from "./EF/16.jpg"
import pic17 from "./EF/17.jpg"
import pic18 from "./EF/18.jpg"
import styles from './books.module.css'

export default () => (
    <Slider>
	<img src={pic01} className={styles.con} alt="西餐厅兼职工作点滴--01/18" />
    <img src={pic02} className={styles.con} alt="西餐厅兼职工作点滴--02/18" />
    <img src={pic03} className={styles.con} alt="西餐厅兼职工作点滴--03/18" />
    <img src={pic04} className={styles.con} alt="西餐厅兼职工作点滴--04/18" />
    <img src={pic05} className={styles.con} alt="西餐厅兼职工作点滴--05/18" />
    <img src={pic06} className={styles.con} alt="西餐厅兼职工作点滴--06/18" />
    <img src={pic07} className={styles.con} alt="西餐厅兼职工作点滴--07/18" />
    <img src={pic08} className={styles.con} alt="西餐厅兼职工作点滴--08/18" />
    <img src={pic09} className={styles.con} alt="西餐厅兼职工作点滴--09/18" />
    <img src={pic10} className={styles.con} alt="西餐厅兼职工作点滴--10/18" />
    <img src={pic11} className={styles.con} alt="西餐厅兼职工作点滴--11/18" />
    <img src={pic12} className={styles.con} alt="西餐厅兼职工作点滴--12/18" />
    <img src={pic13} className={styles.con} alt="西餐厅兼职工作点滴--13/18" />
    <img src={pic14} className={styles.con} alt="西餐厅兼职工作点滴--14/18" />
    <img src={pic15} className={styles.con} alt="西餐厅兼职工作点滴--15/18" />
    <img src={pic16} className={styles.con} alt="西餐厅兼职工作点滴--16/18" />
    <img src={pic17} className={styles.con} alt="西餐厅兼职工作点滴--17/18" />
    <img src={pic18} className={styles.con} alt="西餐厅兼职工作点滴--18/18" />
</Slider>
)