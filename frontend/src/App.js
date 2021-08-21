import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/nha-sach-tiki/:id/:metatitle" component={ProductDetail} />
        </Switch>
      </Router>
      <script src="./js/bootstrap.bundle.min.js"></script>
      <Footer />
    </div>
  );
}

export default App;
