import { Fragment } from 'react';
import Header from './components/Header/Header';
import Description from './components/Description/Description';
import Products from './components/Products/Products';
import Collections from './components/Collections/Collcetions';
import DiscountProducts from './components/DiscountProducts/DiscountProducts';
import mebelImg from './assets/discount/Omebel.jpg';
import bertiImg1 from './assets/discount/m17-021.jpg';
import bertiImg2 from './assets/discount/m17-100.jpg';
import showerImg from './assets/discount/Oshower.jpg';

function App() {
  const data = [
    {
      id: 1,
      img: mebelImg,
      title: 'O-mebel зеркальный шкаф со светом Лотос',
      price: '5 990 ₽ ',
      priceWithoutDiscount: '6 499 ₽',
      amountDiscount: '-15%',
    },
    {
      id: 2,
      img: bertiImg1,
      title: 'Orange Berti M17-021cr однорычажный смеситель для раковины без донного клапана',
      price: '4 090 ₽',
      priceWithoutDiscount: 0,
      amountDiscount: 0,
    },
    {
      id: 3,
      img: bertiImg2,
      title: 'Orange Berti M17-100cr однорычажный ванно-душевой смеситель',
      price: '5 490 ₽',
      priceWithoutDiscount: 0,
      amountDiscount: 0,
    },
    {
      id: 4,
      img: showerImg,
      title: 'Ручной душ O-Shower OS05',
      price: '1 100 ₽',
      priceWithoutDiscount: '1 990 ₽',
      amountDiscount: '-12%',
    }
  ];

  return (
    <Fragment>
      <Header />
      <Description />
      <Products />
      <Collections />
      <DiscountProducts data={data} />
    </Fragment>
  );
}

export default App;
