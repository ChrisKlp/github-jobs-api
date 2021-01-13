import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import configureStore from '../data/store/';
import MainTemplate from '../templates/MainTemplate';
import Home from './Home';
import Job from './Job';

const store = configureStore();

const Root = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <MainTemplate>
            <Route exact path="/" component={Home} />
            <Route exact path="/job/:id" component={Job} />
            <Redirect to="/" />
          </MainTemplate>
        </Switch>
      </Router>
    </Provider>
  );
};

export default Root;
