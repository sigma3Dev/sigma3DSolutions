import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import FitPointInput from './FitPointInput';

const StoryRouter = require('storybook-router');

const points = [
  {
    x: 1,
    y: 2,
    z: 3,
  },
  {
    x: 4,
    y: 5,
    z: 6,
  },
  {
    x: 7,
    y: 8,
    z: 9,
  },
];

const stories = storiesOf('Start.FitPointInput', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(StoryRouter.default());

stories.add('Table to display the input for Point fit - DontTest', () => (
  <FitPointInput points={points} />
));
