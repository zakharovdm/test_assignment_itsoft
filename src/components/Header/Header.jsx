import Container from '../UI/Container';
import Slider from '../Slider/Slider';
import styles from './Header.module.css';

import logo from '../../assets/logo.png';
import phoneIcon from '../../assets/phone-icon.svg';
import searchIcon from '../../assets/search-icon.svg';
import slide1 from '../../assets/sliderImg/slide1.png';
import slide2 from '../../assets/sliderImg/slide2.png';
import slide3 from '../../assets/sliderImg/slide3.png';

const Header = () => {
  const data = [
    slide1,
    slide2,
    slide3,
  ];

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__inner}>
          <div className={styles.header__logo_inner}>
            <img src={logo} alt="Логотип компании Orange" />
            <p className={styles.header__logo_text}>
              Разработано в Германии. Сделано в России.
            </p>
          </div>
          <div className={styles.header__search_inner}>
            <div className={styles.header__phone_inner}>
              <img src={phoneIcon} alt="Телефон" />
              <a className={styles.header__phone} href="tel:+79055432345">
                +7 (905) 543 23 45
              </a>
            </div>
            <button type="button" className={styles.header__search_button}>
              <img src={searchIcon} alt="Поиск" />
            </button>
          </div>
        </div>
        <div className={styles.header__description_inner}>
          <div className={styles.header__description_block}>
            <h1>Сантехника и мебель для ванной комнаты</h1>
            <nav className={styles.header__navigation}>
              <ul className={styles.header__nav_list}>
                <li>
                  <a className={styles.header__nav_link} href="#company">О компании</a>
                </li>
                <li>
                  <a className={styles.header__nav_link} href="#products">О продукции</a>
                </li>
                <li>
                  <a className={styles.header__nav_link} href="#catalog">Каталог товаров</a>
                </li>
              </ul>
            </nav>
          </div>
          <Slider data={data} />
        </div>
      </Container>
    </header>
  );
};

export default Header;
