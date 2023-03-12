
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Content />
          <Footer/>
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/login">
          <From />
          <Footer/>
        </Route>
        <Route path="/buy_now">
          <BuyNow />
        </Route>
        <Route path="/:id">
          <Detail />
          <Footer/>
        </Route>
      </Switch>
   

    </Router>
  );
}

export default App;
