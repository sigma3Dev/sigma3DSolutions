import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import BundleAdjustmentInput from './BundleAdjustmentInput';

const StoryRouter = require('storybook-router');

const bundlePoints = [
  {
    stationId: 1000,
    geometryId: 1,
    x: 1,
    y: 2,
    z: 3,
    stdev: 0.1,
  },
  {
    stationId: 2000,
    geometryId: 2,
    x: 4,
    y: 5,
    z: 6,
    stdev: 0.1,
  },
];

const stories = storiesOf('Start.BundleAdjustmentInput', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(StoryRouter.default());

stories.add('Table to display the input for Bundle fit - DontTest', () => (
  <BundleAdjustmentInput bundlePoints={bundlePoints} />
));
