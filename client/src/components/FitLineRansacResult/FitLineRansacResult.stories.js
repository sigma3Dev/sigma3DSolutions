import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import FitLineRansacResult from './FitLineRansacResult';

const StoryRouter = require('storybook-router');

const params = [11.833, 8.633, 11.6, 0, 0, 1, 0, 3];

const stories = storiesOf('Start.FitLineRansacResult', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(StoryRouter.default());

stories.add('Table to display the result of the calculated line fit - DontTest', () => (
  <FitLineRansacResult params={params} />
));
