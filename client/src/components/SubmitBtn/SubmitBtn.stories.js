import SubmitBtn from './SubmitBtn';
import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

const stories = storiesOf('Start.SubmitBtn', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(withKnobs);

stories
  .add('Button to submit data inputs', () => (
    <SubmitBtn handleClick={() => {}}/>))