import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

const label = "Tschebyscheff-Kreis";
const link = "/geometries/chebyshev_circle_fit";

import AppSelectionBtn from './AppSelectionBtn';

const StoryRouter = require('storybook-router');
const stories = storiesOf('Start.AppSelectionBtn', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(withKnobs);
stories.addDecorator(StoryRouter.default());

stories
  .add('Button for choosing an App', () => (
     <AppSelectionBtn label={ label } link={ link }
  />))