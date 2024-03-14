import { Fragment } from 'react';
import Header from './components/Header/Header';
import Description from './components/Description/Description';
import Products from './components/Products/Products';
import Collections from './components/Collections/Collcetions';

function App() {
  return (
    <Fragment>
      <Header />
      <Description />
      <Products />
      <Collections />
    </Fragment>
  );
}

export default App;
