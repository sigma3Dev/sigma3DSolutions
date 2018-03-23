import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import ErrorScreen from './ErrorScreen';

const StoryRouter = require('storybook-router');

const stories = storiesOf('Start.ErrorScreen', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(withKnobs);
stories.addDecorator(StoryRouter.default());

stories
  .add('Screen to display if there is an error in the calculation', () => (
    <ErrorScreen error="" handleClick={() => {}} />))