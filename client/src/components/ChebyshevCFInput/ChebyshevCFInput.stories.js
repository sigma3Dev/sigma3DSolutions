import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import ChebyshevCFInput from './ChebyshevCFInput';

const StoryRouter = require('storybook-router');

const stories = storiesOf('Start.ChebyshevCFInput', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(withKnobs);
stories.addDecorator(StoryRouter.default());

<<<<<<< HEAD
const systemPoints = [
  {x: -5051.23, y: -9416.32, z: -1474.56},
  {x: -4714.79, y: 339.32, z: -1573.92}, 
  {x: 3334.13, y: 1151.07, z: -1554.7},
  {x: 16026.49, y: 1584.36, z: 110.73}
=======
const startSystemPoints = [
  {x: -5051.23, y: -9416.32, z: -1474.56, x0: true, y0: true, z0: true},
  {x: -4714.79, y: 339.32, z: -1573.92, x1: true, y1: true, z1: true}, 
  {x: 3334.13, y: 1151.07, z: -1554.7, x2: true, y2: true, z2: true},
  {x: 16026.49, y: 1584.36, z: 110.73, x3: true, y3: true, z3: true}
>>>>>>> master
];

stories
  .add('Page for inputting data for chebyshev-circle-fit - DontTest', () => (
    <ChebyshevCFInput
<<<<<<< HEAD
      onFileDrop={() => {}}
      circlePoints={systemPoints} 
=======
      onStartFileDrop={() => {}}
      startSystemPoints={startSystemPoints} 
>>>>>>> master
    />))