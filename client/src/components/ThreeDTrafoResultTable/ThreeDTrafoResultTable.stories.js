import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import ThreeDTrafoResultTable from './ThreeDTrafoResultTable';

const trafoParams = [
  477.2449196367121,
  -9389.077335081724,
  3886.7391116598624,
  0.9950785875879063,
  -0.0048301518598007406,
  -0.0006079507786298184,
  0.09896921012577273,
];

const stories = storiesOf('Start.ThreeDTrafoResultTable', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(withKnobs);

stories.add('Table to display calculated transformation parameters for 3D transformation', () => (
  <ThreeDTrafoResultTable
    trafoParams={trafoParams}
    translationDecimalPlaces={2}
    rotationDecimalPlaces={4}
    copyText=''
  />
));
