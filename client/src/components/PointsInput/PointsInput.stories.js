import PointsInput from './PointsInput';
import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

const stories = storiesOf('Start.PointsInput', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));

stories
  .add('Input zone for .txt files - DontTest', () => (
    <PointsInput 
      onDrop={() => {}}
    />))