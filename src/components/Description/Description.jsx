import styles from './Description.module.css';
import Container from '../UI/Container';
import productionIcon from '../../assets/iconDescript1.svg';
import ecoIcon from '../../assets/iconDescript2.svg';

const Description = () => {
  return (
    <div className={styles.description}>
      <Container>
        <div className={styles.description__inner}>
          <div className={styles.description__company}>
            <p className={styles.description__firstParagraph}>
              <span className={styles.description__firstWord}>Orange</span>
              <span className={styles.description__firstPart}>
                - немецкая торговая марка. Главный офис и основное производство
              </span>
              <span className={styles.description__secondPart}>
                расположены в Германии. Производим смесители, душевые кабины,
              </span>
              <span className={styles.description__thirdPart}>
                ванны и мебель для ванных комнат.
              </span>
            </p>
            <p>
              Мы предлагаем качественную продукцию немецкого производства,
              которая полностью адаптирована к реалиям российскиого рынка.
            </p>
          </div>
          <ul className={styles.description__list}>
            <li className={styles.description__listItem}>
              <img src={productionIcon} alt="Собственное производство" />
              <div>
                <h3 className={styles.description__itemTitle}>
                  Собственное производство
                </h3>
                <p className={styles.description__itemText}>
                  Выский уровнень технологий позволяет
                  <br /> гарантировать качество продукции на
                  <br /> протяжении 10 лет
                </p>
              </div>
            </li>
            <li className={styles.description__listItem}>
              <img src={ecoIcon} alt="Экологичность" />
              <div>
                <h3 className={styles.description__itemTitle}>
                  Экологичность и доступность
                </h3>
                <p className={styles.description__itemText}>
                  Уникальный состав сплава делает
                  <br /> продукцию Orange безопасной для
                  <br />
                  потребителя
                </p>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Description;
