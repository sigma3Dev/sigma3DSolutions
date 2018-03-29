import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import ApplyTrafoInput from './ApplyTrafoInput';

const StoryRouter = require('storybook-router');

const stories = storiesOf('Start.ApplyTrafoInput', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(withKnobs);
stories.addDecorator(StoryRouter.default());

const values = {
  params: {
    tx: 1380.49,
    ty: 9336.54,
    tz: -3796.40,
    q0: -0.9951,
    q1: -0.0048,
    q2: -0.0006,
    q3: 0.0990,
    m: 1.00000,
  },
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

stories
  .add('Page for inputting data for applyTransformation - DontTest', () => (
    <ApplyTrafoInput
      points={values.points}
      params={values.params}
      handleDrop={() => {}}
    />));
