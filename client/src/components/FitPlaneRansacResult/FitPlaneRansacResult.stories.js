import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import FitPlaneRansacResult from './FitPlaneRansacResult';

const StoryRouter = require('storybook-router');

const params = [11.833, 8.633, 11.6, 0, 0, 1, 0, 3];

const stories = storiesOf('Start.FitPlaneRansacResult', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(StoryRouter.default());

stories.add('Table to display the result of the calculated plane fit - DontTest', () => (
  <FitPlaneRansacResult params={params} />
));
