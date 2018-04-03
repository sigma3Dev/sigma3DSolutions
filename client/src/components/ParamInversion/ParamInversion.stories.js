import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import ParamInversion from './ParamInversion';

const StoryRouter = require('storybook-router');

const values = {
  tx: 10,
  ty: 10,
  tz: 10,
  q0: 1,
  q1: 0,
  q2: 0,
  q3: 0,
  m: 1,
};

const stories = storiesOf('Start.ParamInversion', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(withKnobs);
stories.addDecorator(StoryRouter.default());

stories.add('Screen to display if there is an error in the calculation', () => (
  <ParamInversion values={values} />
));
