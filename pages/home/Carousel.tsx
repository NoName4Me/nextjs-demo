import { useState } from "react";
import styles from "./Home.module.scss";
import clx from 'classnames'

const items = ['1','2','3']
export default function Carousel() {
  const [activeIndex] = useState(0);
  return (
    <>
      <div className={styles.carousel}>
        <div className={styles.carouselItem}>1</div>
        <div className={styles.carouselItem}>2</div>
        <div className={styles.carouselItem}>3</div>
      </div>
      <div className={styles.carouselIndicator}>
        {items.map((_, index) => {
          return <div key={index} className={clx(styles.indicatorItem, index === activeIndex && styles.active)}>{activeIndex}</div>
        })}
      </div>
      <div className={styles.carouselItem}>1</div>
    </>
  );
}
