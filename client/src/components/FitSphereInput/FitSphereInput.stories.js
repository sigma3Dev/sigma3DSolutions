import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import FitSphereInput from './FitSphereInput';

const StoryRouter = require('storybook-router');

const spherePoints = [
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

const stories = storiesOf('Start.FitSphereInput', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(StoryRouter.default());

stories.add('Table to display the input for Sphere fit - DontTest', () => (
  <FitSphereInput spherePoints={spherePoints} />
));
