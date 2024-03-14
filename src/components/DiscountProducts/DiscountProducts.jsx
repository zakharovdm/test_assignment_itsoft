import Container from '../UI/Container';
import styles from './DiscountProducts.module.css';

const DiscountProducts = (props) => {
  const products = props.data;

  return (
    <div className={styles.discountProducts}>
      <Container>
        <h2 className={styles.discountProducts__title}>Акционные товары</h2>
        <ul className={styles.discountProducts__list}>
          {products.map((item) => {
            const price = item.priceWithoutDiscount ? (
              <>
                <div className={styles.discountProducts__innerPrice}>
                  <p className={styles.discountProducts__price}>{item.price}</p>
                  <p className={styles.discountProducts__priceWithoutDiscount}>
                    {item.priceWithoutDiscount}
                  </p>
                </div>
                <div className={styles.discountProducts__amountDiscount}>
                  {item.amountDiscount}
                </div>
              </>
            ) : (
              <p className={styles.discountProducts__price}>{item.price}</p>
            );
            return (
              <li className={styles.discountProducts__item} key={item.id}>
                <a className={styles.discountProducts__link} href={`#product-${item.id}`}>
                  <img className={styles.discountProducts__img} src={item.img} alt="discount product" />
                  <h3 className={styles.discountProducts__productTitle}>
                    {item.title}
                  </h3>
                  {price}
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </div>
  );
};

export default DiscountProducts;
