import React from 'react';
import { Router, browserHistory } from 'react-router';
import { render } from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import routes from './routes';

render(<Router history={browserHistory}>{routes}</Router>, document.getElementById("app"));
