import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import FitPlaneGaussErrorBarGraph from './FitPlaneGaussErrorBarGraph';

const stories = storiesOf('Start.FitPlaneGaussErrorBarGraph', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(withKnobs);

stories.add('Bar graph to display fitting errors for fit plane - DontTest', () => {
  const errors = [1, 5, 4, 5.1, 4.9, 0.1, 3.4, 3.2];
  return <FitPlaneGaussErrorBarGraph errors={errors} />;
});
