
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import DetailRoute from './Router/detailRoute';

const Home = React.lazy(() => import('./Router/home'))
const FromRoute = React.lazy(() => import('./Router/from'))
const Cart = React.lazy(() => import('./components/cart'))
const BuyNowRoute = React.lazy(() => import('./Router/buyNow'))

function App() {
  return (
    <Router>
      <Header />
      <React.Suspense>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/login">
            <FromRoute />
          </Route>
          <Route path="/buy_now">
            <BuyNowRoute />
          </Route>
          <Route path="/:id">
            <DetailRoute />
          </Route>
        </Switch>
      </React.Suspense>



    </Router>
  );
}

export default App;
