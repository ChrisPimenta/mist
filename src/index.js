import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// CSS imports
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';

import { Link, Route } from 'react-router-dom';

//Redux imports
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import store from './store';

import App from './components/App';

const history = createHistory();

const StoreHistoryRouting = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="container">
        <h1 className="main-header">
          <Link to="/">Mist</Link>
        </h1>
        <Route path="/" component={App} />   
      </div>
    </ConnectedRouter>
  </Provider>
);

render(<StoreHistoryRouting/>, document.getElementById('root'));

registerServiceWorker();