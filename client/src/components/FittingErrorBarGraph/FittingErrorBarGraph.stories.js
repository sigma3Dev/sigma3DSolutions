import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import FittingErrorBarGraph from './FittingErrorBarGraph';

const stories = storiesOf('Start.FittingErrorBarGraph', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(withKnobs);

stories.add('Bar graph to display fitting errors for fit plane - DontTest', () => {
  const errors = [1, 5, 4, 5.1, 4.9, 0.1, 3.4, 3.2];
  return <FittingErrorBarGraph errors={errors} />;
});
