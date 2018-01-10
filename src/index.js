import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

// import react router deps
import { Route, IndexRoute } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import { Provider } from 'react-redux';
import store from './store';
import createHistory from 'history/createBrowserHistory';

// import components
import App from './components/App';

const history = createHistory();

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route exact path="/" component={App} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();