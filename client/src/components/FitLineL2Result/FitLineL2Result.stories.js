import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import FitLineL2Result from './FitLineL2Result';

const StoryRouter = require('storybook-router');

const params = [11.833, 8.633, 11.6, 0, 0, 1, 1];

const stories = storiesOf('Start.FitLineL2Result', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(StoryRouter.default());

stories.add('Table to display the result of the calculated lineL2 fit - DontTest', () => (
  <FitLineL2Result params={params} />
));
