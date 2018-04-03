import React from 'react';


import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import AppSelectionBtn from './AppSelectionBtn';

const label = 'Tschebyscheff-Kreis';
const link = '/geometries/chebyshev_circle_fit';


const StoryRouter = require('storybook-router');

const stories = storiesOf('Start.AppSelectionBtn', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(withKnobs);
stories.addDecorator(StoryRouter.default());

stories
  .add('Button for choosing an App', () => (
    <AppSelectionBtn
      label={label}
      link={link}
    />));
