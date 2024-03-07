import Container from '../UI/Container';
import styles from './Products.module.css';

const Products = () => {
  return (
    <div className={styles.products}>
      <Container>
        <div className={styles.products__inner}>
          <h2 className={styles.products__title}>Наша продукция</h2>
          <ul className={styles.products__list}>
            <li className={styles.products__item}>
              <a className={styles.products__link} href="#mixers">Смесители</a>
            </li>
            <li className={styles.products__item}>
              <a className={styles.products__link} href="#furnitures">Мебель</a>
            </li>
            <li className={styles.products__item}>
              <a className={styles.products__link} href="#shower">Душевая программа</a>
            </li>
            <li className={styles.products__item}>
              <a className={styles.products__link} href="#fayas">Фаяс</a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Products;
