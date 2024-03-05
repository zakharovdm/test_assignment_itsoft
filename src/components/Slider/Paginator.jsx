import styles from './Paginator.module.css';

const Paginator = ({ dataLength, activeIndex, handlePageChange }) => {
  let dots = [];
  let classes = '';
  for (let index = 0; index < dataLength; index++) {
    classes =
      activeIndex === index
        ? `${styles.paginator__dot} ${styles['paginator__dot--active']}`
        : `${styles.paginator__dot}`;
    dots.push(<button onClick={() => handlePageChange(index)} key={index} className={classes}></button>);
  }

  return <div className={styles.paginator}>{dots.map((dot) => dot)}</div>;
};

export default Paginator;
