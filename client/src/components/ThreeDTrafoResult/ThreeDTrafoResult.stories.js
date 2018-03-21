import ThreeDTrafoResult from './ThreeDTrafoResult';
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

const StoryRouter = require('storybook-router');

const trafoParams = [1380.49, 9336.54, -3796.40, -0.9951, -0.0048, -0.0006, 0.0990];

const trafoDifference = [
  {
    "vx": 1.0204,
    "vy": 0.6337,
    "vz": -0.2936,
    "v": 1.2366
  }, {
    "vx": 0.3393,
    "vy": -0.3454,
    "vz": 0.2966,
    "v": 0.5678
  }
];

const stories = storiesOf('Start.ThreeDTrafoResult', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(StoryRouter.default());

stories
  .add('Table to display the result of the calculated transformation', () => (
    <ThreeDTrafoResult
      trafoParams={trafoParams}
      trafoDifference={trafoDifference}
    />))