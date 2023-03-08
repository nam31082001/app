
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

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Content />
        </Route>
        <Route exact path="/:id">
         <Detail/>
        </Route>

      </Switch>

    </Router>
  );
}

export default App;
