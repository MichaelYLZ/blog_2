import React from "react"
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import pic01 from "./bestLooking/g01.jpg"
import pic02 from "./bestLooking/g02.jpg"
import pic03 from "./bestLooking/g03.png"
import pic04 from "./bestLooking/g04.jpg"
import pic05 from "./bestLooking/g05.png"
import pic06 from "./bestLooking/g06.png"
import pic07 from "./bestLooking/g07.png"
import pic08 from "./bestLooking/g08.png"
import styles from './books.module.css'

export default () => (
	<Slider>
	<img src={pic01} className={styles.con} alt="高颜值编程书籍封面--01/08" />
	<img src={pic02} className={styles.con} alt="高颜值编程书籍封面--02/08"/>
	<img src={pic03} className={styles.con} alt="高颜值编程书籍封面--03/08"/>
    <img src={pic04} className={styles.con} alt="高颜值编程书籍封面--04/08"/>
    <img src={pic05} className={styles.con} alt="高颜值编程书籍封面--05/08"/>
	<img src={pic06} className={styles.con} alt="高颜值编程书籍封面--06/08"/>
	<img src={pic07} className={styles.con} alt="高颜值编程书籍封面--07/08"/>
    <img src={pic08} className={styles.con} alt="高颜值编程书籍封面--08/08" />
</Slider>
)