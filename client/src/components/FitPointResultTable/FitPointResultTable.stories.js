import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import FitPointResultTable from './FitPointResultTable';

const params = [11.833, 8.633, 11.6, 1.0];

const stories = storiesOf('Start.FitPointResultTable - DontTest', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(withKnobs);

stories.add('Table to display calculated params of point fit', () => (
  <FitPointResultTable params={params} />
));
