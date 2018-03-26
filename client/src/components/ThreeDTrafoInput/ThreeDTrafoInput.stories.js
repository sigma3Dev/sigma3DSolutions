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

const startSystemPointsMoreDecs = [
  {x: -5051.238174, y: -9416.329914, z: -1474.562562, x0: true, y0: true, z0: true},
  {x: -4714.7923464, y: 339.327714, z: -1573.922733, x1: true, y1: true, z1: true}, 
  {x: 3334.131116, y: 1151.075273, z: -1554.712995, x2: true, y2: true, z2: true},
  {x: 16026.498322, y: 1584.362622, z: 110.731293, x3: true, y3: true, z3: true}
];

const targetSystemPoints = [
  {x: -5426.9, y: 1114.43, z: -5349.33, x0: true, y0: true, z0: true}, 
  {x: -3175.52, y: 10613.03, z: -5356.79, x1: true, y1: true, z1: true},
  {x: 4875.62, y: 9823.48, z: -5347.35, x2: true, y2: false, z2: true},
  {x: 17405.14, y: 7732.15, z: -3705.33, x3: true, y3: false, z3: false}
];

const targetSystemPointsMoreDecs = [
  {x: -5426.917725, y: 1114.433335, z: -5349.332634, x0: true, y0: true, z0: true}, 
  {x: -3175.523622, y: 10613.039447, z: -5356.797715, x1: true, y1: true, z1: true},
  {x: 4875.621622, y: 9823.485243, z: -5347.355224, x2: true, y2: false, z2: true},
  {x: 17405.141533, y: 7732.152635, z: -3705.331888, x3: true, y3: false, z3: false}
];

stories
  .add('Page for inputting data for 3D-Transformations - DontTest', () => (
    <ThreeDTrafoInput
      onStartFileDrop={() => {}}
      onTargetFileDrop={() => {}}
      startSystemPoints={startSystemPoints} 
      targetSystemPoints={targetSystemPoints}
    />))

  .add('Page for inputting data for 3D-Transformations with more decimal places - DontTest', () => (
    <ThreeDTrafoInput
      onStartFileDrop={() => {}}
      onTargetFileDrop={() => {}}
      startSystemPoints={startSystemPointsMoreDecs} 
      targetSystemPoints={targetSystemPointsMoreDecs}
    />))