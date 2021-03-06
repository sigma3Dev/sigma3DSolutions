import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import FitPlaneGaussResultTable from './FitPlaneGaussResultTable';

const params = [11.833, 8.633, 11.6, 0.0, 0.0, 1.0, 0.0];

const stories = storiesOf('Start.FitPlaneGaussResultTable - DontTest', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(withKnobs);

stories.add('Table to display calculated params of plane fit', () => (
  <FitPlaneGaussResultTable params={params} />
));
