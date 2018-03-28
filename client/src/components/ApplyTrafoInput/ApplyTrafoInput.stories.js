import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import ApplyTrafoInput from './ApplyTrafoInput';

const StoryRouter = require('storybook-router');

const stories = storiesOf('Start.ApplyTrafoInput', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(withKnobs);
stories.addDecorator(StoryRouter.default());

const values = {
  params: {
    tx: 0,
    ty: 0,
    tz: 0,
    q0: 0,
    q1: 0,
    q2: 0,
    q3: 0,
    m: 1,
  },
  point: {
    x: 0,
    y: 0,
    z: 0,
  }
};

stories
  .add('Page for inputting data for applyTransformation - DontTest', () => (
    <ApplyTrafoInput
      values={values}
    />))