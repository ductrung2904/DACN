import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header';
import HomePage from './components/HomePage';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <script src="./js/bootstrap.bundle.min.js"></script>
      <Footer />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
