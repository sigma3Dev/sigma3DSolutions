import React                  from 'react';
import { Provider }           from 'react-redux';
import ReactDOM               from 'react-dom';
import { BrowserRouter }      from 'react-router-dom';
import registerServiceWorker  from './registerServiceWorker';
import configureStore         from './store/configureStore';
import App                    from './App';
import './index.css';

const store = configureStore();

ReactDOM.render((
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();