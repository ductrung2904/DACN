import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/HomePage/Header';
import HomePage from './pages/HomePage';
import Footer from './components/HomePage/Footer';
import ProductDetail from './pages/ProductDetail';
import Cart from './components/Cart/Cart';
import Shipping from './components/Cart/Shipping';
import Payment from './components/Cart/Payment';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} title="Tiki - Mua hàng online giá tốt, hàng chuẩn, ship nhanh" />
          <Route path="/nha-sach-tiki/:id/:metatitle" component={ProductDetail} />
          <Route path="/checkout/cart" component={Cart} />
          <Route path="/checkout/shipping" component={Shipping} />
          <Route path="/checkout/payment" component={Payment} />
          <Route path="*">
            <h1 className="text-center">404 Page Not Found</h1>
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
