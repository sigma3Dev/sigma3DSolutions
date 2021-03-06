import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import ThreeDTrafoResult from './ThreeDTrafoResult';

const StoryRouter = require('storybook-router');

const trafoParams = [1380.49, 9336.54, -3796.4, -0.9951, -0.0048, -0.0006, 0.099];

const trafoDifference = [
  {
    vx: 1.0204,
    vy: 0.6337,
    vz: -0.2936,
    v: 1.2366,
  },
  {
    vx: 0.3393,
    vy: -0.3454,
    vz: 0.2966,
    v: 0.5678,
  },
];

const stories = storiesOf('Start.ThreeDTrafoResult', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(StoryRouter.default());

stories.add('Table to display the result of the calculated 3D-Transformation - DontTest', () => (
  <ThreeDTrafoResult
    trafoParams={trafoParams}
    trafoDifference={trafoDifference}
    translationDecimalPlaces={2}
    rotationDecimalPlaces={4}
  />
));
