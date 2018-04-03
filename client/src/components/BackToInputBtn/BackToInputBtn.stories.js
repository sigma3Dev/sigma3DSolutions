import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import BackToInputBtn from './BackToInputBtn';

const stories = storiesOf('Start.BackToInputBtn', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(withKnobs);

stories.add('Button to navigate back to previous data input page', () => (
  <BackToInputBtn handleClick={() => {}} />
));
