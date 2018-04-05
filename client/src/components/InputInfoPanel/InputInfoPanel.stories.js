import React from 'react';
import { FormattedMessage } from 'react-intl';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import InputInfoPanel from './InputInfoPanel';

const StoryRouter = require('storybook-router');

const body = (
  <FormattedMessage
    id='ThreeDTrafoInputContainer.panel.infoPanelText'
    defaultMessage='
      The input should be a simple .txt file.\n

      The file should consist of one or more points, each on its own line.
      Each point should be made up of three coordinates: x, y and z. These should be simple numbers.\n

      Example:\n
      41.3 11.2 17.1\n
      24.2 33.1 19.8\n
      9.1 5.4 12.9
    '
  />
);

const stories = storiesOf('Start.InputInfoPanel', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(StoryRouter.default());

stories.add('Show informations about the input', () => (
  <InputInfoPanel body={body} isDisplayed />
));
