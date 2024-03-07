import { Fragment } from 'react';
import Header from './components/Header/Header';
import Description from './components/Description/Description';
import Products from './components/Products/Products';

function App() {
  return (
    <Fragment>
      <Header />
      <Description />
      <Products/>
    </Fragment>
  );
}

export default App;
