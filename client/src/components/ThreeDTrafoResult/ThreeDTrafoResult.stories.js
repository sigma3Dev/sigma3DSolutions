import ThreeDTrafoResult from './ThreeDTrafoResult';
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

const StoryRouter = require('storybook-router');

const isCalculating = false;
const response = [1380.49, 9336.54, -3796.40, -0.9951, -0.0048, -0.0006, 0.0990];

const stories = storiesOf('Start.ThreeDTrafoResult', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(withKnobs);
stories.addDecorator(StoryRouter.default());

stories
  .add('Table to display start and target system points input', () => (
    <ThreeDTrafoResult isCalculating={isCalculating} response={response} />))