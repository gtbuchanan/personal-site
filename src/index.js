import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactGA.initialize('UA-60694538-1');
ReactGA.pageview(window.location.pathname + window.location.search);
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
