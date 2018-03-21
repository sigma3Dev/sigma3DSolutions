import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import LoadingScreen from './LoadingScreen';

const StoryRouter = require('storybook-router');

const stories = storiesOf('Start.LoadingScreen', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(StoryRouter.default());

stories
  .add('Screen to display while calculation is loading', () => (
    <LoadingScreen />))