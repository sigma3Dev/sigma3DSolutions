import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import FitLineRansacInput from './FitLineRansacInput';

const StoryRouter = require('storybook-router');

const linePoints = [
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
const lineTolerance = 0.2;

const stories = storiesOf('Start.FitLineRansacInput', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(StoryRouter.default());

stories.add('Table to display the input for Ransac line fit - DontTest', () => (
  <FitLineRansacInput linePoints={linePoints} lineTolerance={lineTolerance} />
));
