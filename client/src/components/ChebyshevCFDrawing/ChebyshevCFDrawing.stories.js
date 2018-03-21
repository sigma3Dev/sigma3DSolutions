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
    const radius = 81.06;
    const chebyDist = 3.88;
    return(
      <ChebyshevCFDrawing radius={radius} chebyDist={chebyDist} />
    )
  })

stories
  .add('chebyshev circle with high radius or chebyDist', () => {
    const radius = number('radius', 1081.06);
    const chebyDist = number('chebyDist', 13.88);
    return(
      <ChebyshevCFDrawing radius={radius} chebyDist={chebyDist} />
    )
  })