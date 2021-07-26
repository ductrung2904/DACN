import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import ProductDetail from './pages/ProductDetail';
import { ProductContextProvider } from './context/ProductContext';

function App() {
  return (
    <ProductContextProvider>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/book/:id" component={ProductDetail} />
        </Switch>
      </Router>
      <script src="./js/bootstrap.bundle.min.js"></script>
      <Footer />
    </ProductContextProvider>
  );
}

export default App;
