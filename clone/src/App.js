
import './App.css';
import Content from './components/content';
import Header from './components/header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Detail from './components/detail';
import Cart from './components/cart';
import From from './components/from';
import BuyNow from './components/buyNow';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Content />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/login">
          <From />
        </Route>
        <Route path="/buy_now">
          <BuyNow />
        </Route>

        <Route path="/:id">
          <Detail />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
