import ChebyshevCFDrawing from './ChebyshevCFDrawing';
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, boolean, number } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

const StoryRouter = require('storybook-router');

const stories = storiesOf('Start.ChebyshevCFDrawing', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(withKnobs);
stories.addDecorator(StoryRouter.default());

stories
  .add('Drawing to display the result of the calculated chebyshev circle fit adjustment especially radius and chebyshev distance', () => {
    const radius = 81.00.toFixed(2);
    const chebyDist = 3.88.toFixed(2);
    return(
      <ChebyshevCFDrawing radius={radius} chebyDist={chebyDist} />
    )
  })

stories
  .add('chebyshev circle with high radius or chebyDist', () => {
    const radius = number('radius', 1081.0.toFixed(2));
    const chebyDist = number('chebyDist', 13.88.toFixed(2));
    return(
      <ChebyshevCFDrawing radius={radius} chebyDist={chebyDist} />
    )
  })

  stories
  .add('chebyshev circle with points in svg', () => {
    const radius = number('radius', 1000.00.toFixed(2));
    const chebyDist = number('chebyDist', 20.00.toFixed(2));
    const options = {
      range: true,
      min: -1000,
      max: 1000,
      step: 500,
    };
    const defaultValue = 0;
    const points = [
      {
        x: number('x', defaultValue, options),
        y: number('x', defaultValue, options),
      },
      {
        x: 1000,
        y: 0,
      },
      {
        x: -1000,
        y: 0,
      },
      {
        x: 0,
        y: 1000,
      },
      {
        x: 0,
        y: -1000,
      },
      {
        x: 0,
        y: -1010,
      },
      {
        x: 0,
        y: 990,
      }
    ]
    return(
      <ChebyshevCFDrawing 
        radius={radius} 
        chebyDist={chebyDist} 
        points={points}
      />
    )
  })