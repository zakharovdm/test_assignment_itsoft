import { useState } from 'react';
import Paginator from './Paginator';
import styles from './Slider.module.css';
import arrow from '../../assets/arrowBtn.svg';

const Slider = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
 
  const nextSlide = () => {
    const nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex >= data.length ? 0 : nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = currentIndex - 1;
    setCurrentIndex(prevIndex < 0 ? data.length - 1 : prevIndex);
  };

  const handlePageChange = (page) => {
    let slideDifference = page - currentIndex;
    setCurrentIndex(currentIndex + slideDifference);
};

  return (
    <div className={styles.slider}>
      <div className={styles.slider__slide}>
        <img src={data[currentIndex]} alt="slide" />
      </div>
      <button className={styles.slider__prevBtn} onClick={prevSlide}>
        <img src={arrow} alt="arrow" />
      </button>
      <button className={styles.slider__nextBtn} onClick={nextSlide}>
        <img src={arrow} alt="arrow" />
      </button>
      <div className={styles.slider__innerPaginator}>
        <Paginator dataLength={data.length} activeIndex={currentIndex} handlePageChange={handlePageChange}/>
      </div>
    </div>
  );
};

export default Slider;
