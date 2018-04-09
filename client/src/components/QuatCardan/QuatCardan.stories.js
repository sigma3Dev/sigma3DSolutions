import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import QuatCardan from './QuatCardan';

const StoryRouter = require('storybook-router');

const quat = ['2.15000', '0.85000', '1.50000', '1.05000'];

const cardan = ['10.00000', '4.00000', '12.00000'];

const stories = storiesOf('Start.QuatCardan', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(withKnobs);
stories.addDecorator(StoryRouter.default());

stories.add('Shows input and results for QuatCardan', () => (
  <QuatCardan quat={quat} cardan={cardan} />
));
