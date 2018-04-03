import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import ApplyTrafoResult from './ApplyTrafoResult';

const StoryRouter = require('storybook-router');

const points = {
  points: [
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
  ],
};

const stories = storiesOf('Start.ApplyTrafoResult', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(StoryRouter.default());

stories.add('Table to display the result of the calculated transformation - DontTest', () => (
  <ApplyTrafoResult result={points} />
));
