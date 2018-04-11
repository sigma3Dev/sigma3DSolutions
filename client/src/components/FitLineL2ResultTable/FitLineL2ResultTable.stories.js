import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import FitLineL2ResultTable from './FitLineL2ResultTable';

const params = [11.833, 8.633, 11.6, 0.0, 0.0, 1.0, 1.0];

const stories = storiesOf('Start.FitLineL2ResultTable - DontTest', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(withKnobs);

stories.add('Table to display calculated params of lineL2 fit', () => (
  <FitLineL2ResultTable params={params} copyText='' />
));
