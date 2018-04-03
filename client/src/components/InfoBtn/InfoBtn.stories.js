import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import InfoBtn from './InfoBtn';

const stories = storiesOf('Start.InfoBtn', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(withKnobs);

stories.add('Button to open data input information', () => <InfoBtn handleClick={() => {}} />);
