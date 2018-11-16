import React from "react"
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import pic01 from "./OReilly/O01.png"
import pic02 from "./OReilly/O02.png"
import pic03 from "./OReilly/O03.png"
import pic04 from "./OReilly/O04.jpg"
import pic05 from "./OReilly/O05.png"
import pic06 from "./OReilly/O06.png"
import pic07 from "./OReilly/O07.jpg"
import pic08 from "./OReilly/O08.jpg"
import pic09 from "./OReilly/O09.png"
import pic10 from "./OReilly/O10.png"
import styles from './books.module.css'

export default () => (
	<Slider>
	<img src={pic01} className={styles.con} alt="O'Reilly Media--动物王国系列01--01/10" />
    <img src={pic02} className={styles.con} alt="O'Reilly Media--动物王国系列01--02/10" />
    <img src={pic03} className={styles.con} alt="O'Reilly Media--动物王国系列01--03/10" />
    <img src={pic04} className={styles.con} alt="O'Reilly Media--动物王国系列01--04/10" />
    <img src={pic05} className={styles.con} alt="O'Reilly Media--动物王国系列01--05/10" />
    <img src={pic06} className={styles.con} alt="O'Reilly Media--动物王国系列01--06/10" />
    <img src={pic07} className={styles.con} alt="O'Reilly Media--动物王国系列01--07/10" />
    <img src={pic08} className={styles.con} alt="O'Reilly Media--动物王国系列01--08/10" />
    <img src={pic09} className={styles.con} alt="O'Reilly Media--动物王国系列01--09/10" />
    <img src={pic10} className={styles.con} alt="O'Reilly Media--动物王国系列01--10/10" />
</Slider>
)