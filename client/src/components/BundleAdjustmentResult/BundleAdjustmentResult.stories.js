import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import BundleAdjustmentResult from './BundleAdjustmentResult';

const StoryRouter = require('storybook-router');

const params = [
  1,
  [[1, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0], [2, 10.0, 10.0, 10.0, 1.0, 1.0, 1.0, 1.0, 1.0]],
  [[3, 23.5, 33.3, 45.7, 0.0], [2, 5.5, 3.3, 7.7, 0.0], [5, 16.5, 44.3, 34.7, 0.0]],
];

const stories = storiesOf('Start.BundleAdjustmentResult', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(StoryRouter.default());

stories.add('Table to display the result of the calculated cylinder fit - DontTest', () => (
  <BundleAdjustmentResult params={params} />
));
