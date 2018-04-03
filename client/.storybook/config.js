import { addDecorator, configure } from '@storybook/react';
import { setIntlConfig, withIntl } from 'storybook-addon-intl';

// Load the locale data for all your defined locales
import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import deLocaleData from 'react-intl/locale-data/de';

addLocaleData(enLocaleData);
addLocaleData(deLocaleData);

// Provide your messages
const messages = {
  'en': require('../src/translations/en.json'),
  'de': require('../src/translations/de.json'),
};

// Get messages
const getMessages = locale => messages[locale];

// Set intl configuration
setIntlConfig({
  locales: ['en', 'de'],
  defaultLocale: 'de',
  getMessages,
});

// Register decorator
addDecorator(withIntl);

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);