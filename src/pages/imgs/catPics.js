import React from "react"
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import pic01 from "./cat/01.jpg"
import pic02 from "./cat/02.jpg"
import pic03 from "./cat/03.jpg"
import pic04 from "./cat/04.jpg"
import pic05 from "./cat/05.jpg"
import pic06 from "./cat/06.jpg"

import styles from './books.module.css'

export default () => (
	<Slider>
	<img src={pic01} className={styles.con} alt="猫咪照片--01/06" />
    <img src={pic02} className={styles.con} alt="猫咪照片--02/06" />
    
    <img src={pic03} className={styles.con} alt="猫咪照片--03/06" />
    <img src={pic04} className={styles.con} alt="猫咪照片--04/06" />
    
    <img src={pic05} className={styles.con} alt="猫咪照片--05/06" />
    <img src={pic06} className={styles.con} alt="猫咪照片--06/06" />
    
</Slider>
)