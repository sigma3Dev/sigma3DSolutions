import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import FitPlaneErrorBarGraph from './FitPlaneErrorBarGraph';

const stories = storiesOf('Start.FitPlaneErrorBarGraph', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(withKnobs);

stories.add('Bar graph to display fitting errors for fit plane - DontTest', () => {
  const errors = [1, 5, 4, 5.1, 4.9, 0.1, 3.4, 3.2];
  return <FitPlaneErrorBarGraph errors={errors} />;
});
