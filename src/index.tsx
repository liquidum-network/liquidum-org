import React from 'react';
import { hydrate, render} from 'react-dom';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import 'src/index.css';


const renderApp = (): void => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const App = require('./app/App').default;
  const rootElement = document.getElementById('root');
  if (rootElement && rootElement.hasChildNodes()) {
    render(<Router><App /></Router>, rootElement);
  } else {
    hydrate(<Router><App /></Router>, rootElement);
  }
};
renderApp();


if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./app/App', renderApp);
}
