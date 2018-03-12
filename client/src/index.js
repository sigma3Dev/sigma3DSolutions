import React                  from 'react';
import { Provider }           from 'react-redux';
import ReactDOM               from 'react-dom';
import { BrowserRouter }      from 'react-router-dom';
import { 
  IntlProvider, 
  addLocaleData 
}                             from 'react-intl';
import registerServiceWorker  from './registerServiceWorker';
import configureStore         from './store/configureStore';
import App                    from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import en from 'react-intl/locale-data/en';
import de from 'react-intl/locale-data/de';

addLocaleData([...en, ...de]);

const store = configureStore();

const germanMessages = require('./translations/de.json');
const englishMessages = require('./translations/en.json');

ReactDOM.render((
  <Provider store={store}>
    <IntlProvider
      locale={navigator.language}
      messages={navigator.language === 'de' || navigator.language === 'de-DE' ? germanMessages : englishMessages}
    >
      <BrowserRouter>
        <App />  
      </BrowserRouter>
    </IntlProvider>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();