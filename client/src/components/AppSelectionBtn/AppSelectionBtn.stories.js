import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import AppSelectionBtn from './AppSelectionBtn';

const stories = storiesOf('Start.AppSelectionBtn', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(withKnobs);

stories
  .add('Button for choosing an App', () => (
    <AppSelectionBtn 
    caption={ text('caption', "3D-Transformation") }
    description= { "7 Parameters" }
  />))