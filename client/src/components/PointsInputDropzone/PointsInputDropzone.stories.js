import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import PointsInputDropzone from './PointsInputDropzone';

const stories = storiesOf('Start.PointsInputDropzone', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));

stories.add('Input zone for .txt files - DontTest', () => (
  <PointsInputDropzone onDrop={() => {}} />
));
