import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import ThreeDTrafoInput from './ThreeDTrafoInput';

const stories = storiesOf('Start.ThreeDTrafoInput', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(withKnobs);

stories
  .add('Page for inputting data for 3D-Transformations', () => (
    <ThreeDTrafoInput />))