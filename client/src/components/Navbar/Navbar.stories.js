import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import Navbar from './Navbar';

const StoryRouter = require('storybook-router');

const stories = storiesOf('Start.Navbar', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(withKnobs);
stories.addDecorator(StoryRouter.default());

stories.add('Navbar for selecting App category', () => <Navbar />);
