import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import FitCircleChebyshevResult from './FitCircleChebyshevResult';

const StoryRouter = require('storybook-router');

const chebyshevParams = [0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0];

const stories = storiesOf('Start.FitCircleChebyshevResult', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(withKnobs);
stories.addDecorator(StoryRouter.default());

stories.add('Table to display the result of the calculated chebyshev circle fit adjustment', () => (
  <FitCircleChebyshevResult
    isCalculating={boolean('isCalculating', false)}
    chebyshevParams={chebyshevParams}
    handleClick={action('handleClick', () => {})}
  />
));
