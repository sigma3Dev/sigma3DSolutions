import PointsInputTable3D6W from './PointsInputTable3D6W';
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

const systemPoints = [
  {x: -5051.23, y: -9416.32, z: -1474.56, x0: true, y0: true, z0: true},
  {x: -4714.79, y: 339.32, z: -1573.92, x1: true, y1: true, z1: true}, 
  {x: 3334.13, y: 1151.07, z: -1554.7, x2: true, y2: true, z2: true},
  {x: 16026.49, y: 1584.36, z: 110.73, x3: true, y3: true, z3: true}
];

const stories = storiesOf('Start.PointsInputTable3D6W', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(withKnobs);

stories
  .add('Table to display start and target system points input', () => (
    <PointsInputTable3D6W systemPoints={systemPoints} />))