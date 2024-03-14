import Container from '../UI/Container';
import styles from './Collections.module.css';
import imgAristo from '../../assets/imgAristo.jpg';

const Collections = () => {
  return (
    <div className={styles.collections}>
      <Container>
        <div className={styles.collections__inner}>
          <div className={styles.collections__description}>
            <div className={styles.collections__descriptionInner}>
              <h2 className={styles.collections__title}>Коллекции</h2>
              <p className={styles.collections__text}>
                Чувственность и элегантность, пуризм и эксклюзивность, а может уют и
                романтичность? Наши коллекции, разработанные лучшими дизайнерами
                отрасли, помогут создать вам именно ту атмосферу ванной комнаты,
                которую вы всегда искали.
              </p>
            </div>
            <a className={styles.collections__link} href="#colleсtions">
              Все коллекции
            </a>
          </div>
          <div className={styles.collections__product}>
            <div className={styles.collections__productInner}>
              <h3 className={styles.collections__productTitle}>ARISTO</h3>
              <div className={styles.collections__productPrice}>от 4 990 ₽</div>
            </div>
            <img className={styles.collections__productImg} src={imgAristo} alt="Коллекция ARISTO" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Collections;
