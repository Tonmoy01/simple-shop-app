import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ProductDetails from './products/ProductDetails';
import Cart from './cart/Cart';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/search/:keyword' component={Home} />
        <Route exact path='/' component={Home} />
        <Route exact path='/product/:id' component={ProductDetails} />
        <Route exact path='/cart' component={Cart} />
      </Switch>
    </>
  );
}

export default App;
