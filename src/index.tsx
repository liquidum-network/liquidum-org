import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import 'src/index.css';


const render = (): void => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const App = require('./app/App').default;
  ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.getElementById('root')
  );
};
render();


if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./app/App', render);
}
