import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import BundleAdjustmentInputPointsTable from './BundleAdjustmentInputPointsTable';

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

const stories = storiesOf('Start.BundleAdjustmentInputPointsTable', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(withKnobs);

stories.add('Table to display bundle points input', () => (
  <BundleAdjustmentInputPointsTable bundlePoints={bundlePoints} handleDeleteDataInput={() => {}} />
));
