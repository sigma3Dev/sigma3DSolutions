import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import FitLineL2Input from './FitLineL2Input';

const StoryRouter = require('storybook-router');

const lineL2Points = [
  {
    x: 1,
    y: 2,
    z: 3,
  },
  {
    x: 4,
    y: 5,
    z: 6,
  },
  {
    x: 7,
    y: 8,
    z: 9,
  },
];

const stories = storiesOf('Start.FitLineL2Input', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(StoryRouter.default());

stories.add('Table to display the input for LineL2 fit - DontTest', () => (
  <FitLineL2Input lineL2Points={lineL2Points} />
));
