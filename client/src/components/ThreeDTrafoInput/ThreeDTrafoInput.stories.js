import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import ThreeDTrafoInput from './ThreeDTrafoInput';

const StoryRouter = require('storybook-router');

const stories = storiesOf('Start.ThreeDTrafoInput', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(withKnobs);
stories.addDecorator(StoryRouter.default());

const startSystemPoints = [
  {x: -5051.23, y: -9416.32, z: -1474.56, x0: true, y0: true, z0: true},
  {x: -4714.79, y: 339.32, z: -1573.92, x1: true, y1: true, z1: true}, 
  {x: 3334.13, y: 1151.07, z: -1554.7, x2: true, y2: true, z2: true},
  {x: 16026.49, y: 1584.36, z: 110.73, x3: true, y3: true, z3: true}
];

const targetSystemPoints = [
  {x: -5426.9, y: 1114.43, z: -5349.33, x0: true, y0: true, z0: true}, 
  {x: -3175.52, y: 10613.03, z: -5356.79, x1: true, y1: true, z1: true},
  {x: 4875.62, y: 9823.48, z: -5347.35, x2: true, y2: false, z2: true},
  {x: 17405.14, y: 7732.15, z: -3705.33, x3: true, y3: false, z3: false}
];

stories
  .add('Page for inputting data for 3D-Transformations - DontTest', () => (
    <ThreeDTrafoInput
      onStartFileDrop={() => {}}
      onTargetFileDrop={() => {}}
      startSystemPoints={startSystemPoints} 
      targetSystemPoints={targetSystemPoints}
    />))