import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import SelectAppsScreen from './SelectAppsScreen';

const StoryRouter = require('storybook-router');

const buttons = [ 
  {
    type: "3Dtransformation",
    link: '/transformations/three-d-transformation/data-input'
  },
  {
    type: "paramInversion",
    link: '/transformations/parameter-inversion'
  } 
];

const stories = storiesOf('Start.SelectAppsScreen', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(withKnobs);
stories.addDecorator(StoryRouter.default());

stories
  .add('Reusable Screen for different app containers', () => (
    <SelectAppsScreen buttons={buttons}/>))