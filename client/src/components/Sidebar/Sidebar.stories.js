import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import Sidebar from './Sidebar';

const StoryRouter = require('storybook-router');

const stories = storiesOf('Start.Sidebar', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(withKnobs);
stories.addDecorator(StoryRouter.default());

stories.add('Sidebar for selecting App category', () => <Sidebar />);
