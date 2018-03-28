import ChebyshevCFResult from './ChebyshevCFResult';
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

const StoryRouter = require('storybook-router');

const chebyshevParams = [0.00.toFixed(2), 0.00.toFixed(2), 0.00.toFixed(2), 0.00000.toFixed(6), 0.0000.toFixed(6), 1.0000.toFixed(6), 1.0.toFixed(2), 0.0.toFixed(2), 0.0.toFixed(2)];


const stories = storiesOf('Start.ChebyshevCFResult', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(withKnobs);
stories.addDecorator(StoryRouter.default());

stories
  .add('Table to display the result of the calculated chebyshev circle fit adjustment', () => (
    <ChebyshevCFResult 
      isCalculating={boolean('isCalculating', false)} 
      chebyshevParams={chebyshevParams} 
      handleClick={ action('handleClick', () => {}) }  
    />))