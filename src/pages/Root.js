import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import configureStore from '../data/store';
import MainTemplate from '../templates/MainTemplate';
import Home from './Home/Home';
import Job from './Job/Job';

const store = configureStore();

const Root = () => {
  return (
    <Provider store={store}>
      <Router>
        <MainTemplate>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/job/:id" component={Job} />
            <Redirect to="/" />
          </Switch>
        </MainTemplate>
      </Router>
    </Provider>
  );
};

export default Root;
