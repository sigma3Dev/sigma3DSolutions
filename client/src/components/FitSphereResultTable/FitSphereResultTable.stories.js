import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import FitSphereResultTable from './FitSphereResultTable';

const params = [11.833, 8.633, 11.6, 0.0, 0.0];

const stories = storiesOf('Start.FitSphereResultTable - DontTest', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(withKnobs);

stories.add('Table to display calculated params of sphere fit', () => (
  <FitSphereResultTable params={params} copyText='' />
));
