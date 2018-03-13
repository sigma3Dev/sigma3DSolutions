import React from 'react';
import { FormattedMessage } from 'react-intl';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import AppSelectionBtn from './AppSelectionBtn';

const stories = storiesOf('Start.AppSelectionBtn', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(withKnobs);
const buttons = [ "chebyshev" ];

stories
  .add('Button for choosing an App', () => (
    <AppSelectionBtn 
  />))