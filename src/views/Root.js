import MainTemplate from '../templates/MainTemplate';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Home from './Home';
import Job from './Job';

const Root = () => {
  return (
    <Router>
      <Switch>
        <MainTemplate>
          <Route exact path="/" component={Home} />
          <Route exact path="/job/:id" component={Job} />
          <Redirect to="/" />
        </MainTemplate>
      </Switch>
    </Router>
  );
};

export default Root;
