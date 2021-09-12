import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/HomePage/Header';
import HomePage from './pages/HomePage';
import Footer from './components/HomePage/Footer';
import ProductDetail from './pages/ProductDetail';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/nha-sach-tiki/:id/:metatitle" component={ProductDetail} />
          <Route path="/checkout/cart" component={Cart} />
          <Route path="*">
            <h1>404 Page Not Found</h1>
          </Route>
        </Switch>
      </Router>
      <script src="./js/bootstrap.bundle.min.js"></script>
      <Footer />
    </div>
  );
}

export default App;
