import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import FitCylinderResult from './FitCylinderResult';

const StoryRouter = require('storybook-router');

const params = [11.833, 8.633, 11.6, 0, 0, 1, 1, 0, [1, 5, 4, 5.1, 4.9, 0.1, 3.4, 3.2]];

const stories = storiesOf('Start.FitCylinderResult', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(StoryRouter.default());

stories.add('Table to display the result of the calculated cylinder fit - DontTest', () => (
  <FitCylinderResult params={params} />
));
