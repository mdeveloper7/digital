/** External libs */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

/** Internal libs */
import store from './redux/store';
import history from '/utils/history';

/** Global style */
import './index.styles.scss'
// import 'bootstrap/dist/css/bootstrap.min.css';

/** Entry component */
import App from './app.component'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router >
    </Provider>,
  document.getElementById('root')
)
