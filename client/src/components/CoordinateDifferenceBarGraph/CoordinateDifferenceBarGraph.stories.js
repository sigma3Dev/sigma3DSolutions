import CoordinateDifferenceBarGraph from './CoordinateDifferenceBarGraph';
import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';


const stories = storiesOf('Start.CoordinateDifferenceBarGraph', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(withKnobs);

stories
  .add('Bar graph to display difference between calculated and measured points, 2 points - DontTest', () => {
    const values = [
      {
        "vx": number('vx', 1.0204),
        "vy": 0.6337,
        "vz": -0.2936,
        "v": 1.2366
      }, {
        "vx": 0.3393,
        "vy": -0.3454,
        "vz": 0.2966,
        "v": 0.5678
      }
    ];
    return(
      <CoordinateDifferenceBarGraph
        values={values}
      />
    )
  })

stories
  .add('Bar graph wrapped in div (400px x 400px) - DontTest', () => {
    const values2 = [
      {
        "vx": number('vx', 1.0204),
        "vy": 0.6337,
        "vz": -0.2936,
        "v": 1.2366
      }, {
        "vx": 0.3393,
        "vy": -0.3454,
        "vz": 0.2966,
        "v": 0.5678
      }
    ];
    return(
      <div style={{width:400, height: 400}}>
        <CoordinateDifferenceBarGraph
          values={values2}
        />
    </div>)
  })

stories
  .add('Bar graph to display difference between calculated and measured points, 100 points - DontTest', () => {
    const values100 = [
      {
        "vx": 1.0204,
        "vy": 0.6337,
        "vz": -0.2936,
        "v": 1.2366
      }, {
        "vx": 0.3393,
        "vy": -0.3454,
        "vz": 0.2966,
        "v": 0.5678
      }, {
        "vx": 1.0204,
        "vy": 0.6337,
        "vz": -0.2936,
        "v": 1.2366
      }, {
        "vx": 0.3393,
        "vy": -0.3454,
        "vz": 0.2966,
        "v": 0.5678
      }, {
        "vx": 1.0204,
        "vy": 0.6337,
        "vz": -0.2936,
        "v": 1.2366
      }, {
        "vx": 0.3393,
        "vy": -0.3454,
        "vz": 0.2966,
        "v": 0.5678
      }, {
        "vx": 1.0204,
        "vy": 0.6337,
        "vz": -0.2936,
        "v": 1.2366
      }, {
        "vx": 0.3393,
        "vy": -0.3454,
        "vz": 0.2966,
        "v": 0.5678
      }, {
        "vx": 1.0204,
        "vy": 0.6337,
        "vz": -0.2936,
        "v": 1.2366
      }, {
        "vx": 0.3393,
        "vy": -0.3454,
        "vz": 0.2966,
        "v": 0.5678
      }, {
        "vx": 1.0204,
        "vy": 0.6337,
        "vz": -0.2936,
        "v": 1.2366
      }, {
        "vx": 0.3393,
        "vy": -0.3454,
        "vz": 0.2966,
        "v": 0.5678
      }, {
        "vx": 1.0204,
        "vy": 0.6337,
        "vz": -0.2936,
        "v": 1.2366
      }, {
        "vx": 0.3393,
        "vy": -0.3454,
        "vz": 0.2966,
        "v": 0.5678
      }, {
        "vx": 1.0204,
        "vy": 0.6337,
        "vz": -0.2936,
        "v": 1.2366
      }, {
        "vx": 0.3393,
        "vy": -0.3454,
        "vz": 0.2966,
        "v": 0.5678
      }, {
        "vx": 1.0204,
        "vy": 0.6337,
        "vz": -0.2936,
        "v": 1.2366
      }, {
        "vx": 0.3393,
        "vy": -0.3454,
        "vz": 0.2966,
        "v": 0.5678
      }, {
        "vx": 1.0204,
        "vy": 0.6337,
        "vz": -0.2936,
        "v": 1.2366
      }, {
        "vx": 0.3393,
        "vy": -0.3454,
        "vz": 0.2966,
        "v": 0.5678
      }, {
        "vx": 1.0204,
        "vy": 0.6337,
        "vz": -0.2936,
        "v": 1.2366
      }, {
        "vx": 0.3393,
        "vy": -0.3454,
        "vz": 0.2966,
        "v": 0.5678
      }, {
        "vx": 1.0204,
        "vy": 0.6337,
        "vz": -0.2936,
        "v": 1.2366
      }, {
        "vx": 0.3393,
        "vy": -0.3454,
        "vz": 0.2966,
        "v": 0.5678
      }, {
        "vx": 1.0204,
        "vy": 0.6337,
        "vz": -0.2936,
        "v": 1.2366
      }, {
        "vx": 0.3393,
        "vy": -0.3454,
        "vz": 0.2966,
        "v": 0.5678
      }, {
        "vx": 1.0204,
        "vy": 0.6337,
        "vz": -0.2936,
        "v": 1.2366
      }, {
        "vx": 0.3393,
        "vy": -0.3454,
        "vz": 0.2966,
        "v": 0.5678
      }, {
        "vx": 1.0204,
        "vy": 0.6337,
        "vz": -0.2936,
        "v": 1.2366
      }, {
        "vx": 0.3393,
        "vy": -0.3454,
        "vz": 0.2966,
        "v": 0.5678
      }, {
        "vx": 1.0204,
        "vy": 0.6337,
        "vz": -0.2936,
        "v": 1.2366
      }, {
        "vx": 0.3393,
        "vy": -0.3454,
        "vz": 0.2966,
        "v": 0.5678
      }, {
        "vx": 1.0204,
        "vy": 0.6337,
        "vz": -0.2936,
        "v": 1.2366
      }, {
        "vx": 0.3393,
        "vy": -0.3454,
        "vz": 0.2966,
        "v": 0.5678
      }, {
        "vx": 1.0204,
        "vy": 0.6337,
        "vz": -0.2936,
        "v": 1.2366
      }, {
        "vx": 0.3393,
        "vy": -0.3454,
        "vz": 0.2966,
        "v": 0.5678
      }, {
        "vx": 1.0204,
        "vy": 0.6337,
        "vz": -0.2936,
        "v": 1.2366
      }, {
        "vx": 0.3393,
        "vy": -0.3454,
        "vz": 0.2966,
        "v": 0.5678
      }, {
        "vx": 1.0204,
        "vy": 0.6337,
        "vz": -0.2936,
        "v": 1.2366
      }, {
        "vx": 0.3393,
        "vy": -0.3454,
        "vz": 0.2966,
        "v": 0.5678
      },       {
        "vx": 1.0204,
        "vy": 0.6337,
        "vz": -0.2936,
        "v": 1.2366
      }, {
        "vx": 0.3393,
        "vy": -0.3454,
        "vz": 0.2966,
        "v": 0.5678
      }, {
        "vx": 1.0204,
        "vy": 0.6337,
        "vz": -0.2936,
        "v": 1.2366
      }, {
        "vx": 0.3393,
        "vy": -0.3454,
        "vz": 0.2966,
        "v": 0.5678
      }, {
        "vx": 1.0204,
        "vy": 0.6337,
        "vz": -0.2936,
        "v": 1.2366
      }, {
        "vx": 0.3393,
        "vy": -0.3454,
        "vz": 0.2966,
        "v": 0.5678
      }, {
        "vx": 1.0204,
        "vy": 0.6337,
        "vz": -0.2936,
        "v": 1.2366
      }, {
        "vx": 0.3393,
        "vy": -0.3454,
        "vz": 0.2966,
        "v": 0.5678
      }, {
        "vx": 1.0204,
        "vy": 0.6337,
        "vz": -0.2936,
        "v": 1.2366
      }, {
        "vx": 0.3393,
        "vy": -0.3454,
        "vz": 0.2966,
        "v": 0.5678
      }, {
        "vx": 1.0204,
        "vy": 0.6337,
        "vz": -0.2936,
        "v": 1.2366
      }, {
        "vx": 0.3393,
        "vy": -0.3454,
        "vz": 0.2966,
        "v": 0.5678
      }, {
        "vx": 1.0204,
        "vy": 0.6337,
        "vz": -0.2936,
        "v": 1.2366
      }, {
        "vx": 0.3393,
        "vy": -0.3454,
        "vz": 0.2966,
        "v": 0.5678
      }, {
        "vx": 1.0204,
        "vy": 0.6337,
        "vz": -0.2936,
        "v": 1.2366
      }, {
        "vx": 0.3393,
        "vy": -0.3454,
        "vz": 0.2966,
        "v": 0.5678
      }, {
        "vx": 1.0204,
        "vy": 0.6337,
        "vz": -0.2936,
        "v": 1.2366
      }, {
        "vx": 0.3393,
        "vy": -0.3454,
        "vz": 0.2966,
        "v": 0.5678
      }, {
        "vx": 1.0204,
        "vy": 0.6337,
        "vz": -0.2936,
        "v": 1.2366
      }, {
        "vx": 0.3393,
        "vy": -0.3454,
        "vz": 0.2966,
        "v": 0.5678
      }, {
        "vx": 1.0204,
        "vy": 0.6337,
        "vz": -0.2936,
        "v": 1.2366
      }, {
        "vx": 0.3393,
        "vy": -0.3454,
        "vz": 0.2966,
        "v": 0.5678
      }, {
        "vx": 1.0204,
        "vy": 0.6337,
        "vz": -0.2936,
        "v": 1.2366
      }, {
        "vx": 0.3393,
        "vy": -0.3454,
        "vz": 0.2966,
        "v": 0.5678
      }, {
        "vx": 1.0204,
        "vy": 0.6337,
        "vz": -0.2936,
        "v": 1.2366
      }, {
        "vx": 0.3393,
        "vy": -0.3454,
        "vz": 0.2966,
        "v": 0.5678
      }, {
        "vx": 1.0204,
        "vy": 0.6337,
        "vz": -0.2936,
        "v": 1.2366
      }, {
        "vx": 0.3393,
        "vy": -0.3454,
        "vz": 0.2966,
        "v": 0.5678
      }, {
        "vx": 1.0204,
        "vy": 0.6337,
        "vz": -0.2936,
        "v": 1.2366
      }, {
        "vx": 0.3393,
        "vy": -0.3454,
        "vz": 0.2966,
        "v": 0.5678
      }, {
        "vx": 1.0204,
        "vy": 0.6337,
        "vz": -0.2936,
        "v": 1.2366
      }, {
        "vx": 0.3393,
        "vy": -0.3454,
        "vz": 0.2966,
        "v": 0.5678
      }, {
        "vx": 1.0204,
        "vy": 0.6337,
        "vz": -0.2936,
        "v": 1.2366
      }, {
        "vx": 0.3393,
        "vy": -0.3454,
        "vz": 0.2966,
        "v": 0.5678
      }, {
        "vx": 1.0204,
        "vy": 0.6337,
        "vz": -0.2936,
        "v": 1.2366
      }, {
        "vx": 0.3393,
        "vy": -0.3454,
        "vz": 0.2966,
        "v": 0.5678
      }, {
        "vx": 1.0204,
        "vy": 0.6337,
        "vz": -0.2936,
        "v": 1.2366
      }, {
        "vx": 0.3393,
        "vy": -0.3454,
        "vz": 0.2966,
        "v": 0.5678
      }, {
        "vx": 1.0204,
        "vy": 0.6337,
        "vz": -0.2936,
        "v": 1.2366
      }, {
        "vx": 0.3393,
        "vy": -0.3454,
        "vz": 0.2966,
        "v": 0.5678
      },       {
        "vx": 1.0204,
        "vy": 0.6337,
        "vz": -0.2936,
        "v": 1.2366
      }, {
        "vx": 0.3393,
        "vy": -0.3454,
        "vz": 0.2966,
        "v": 0.5678
      }, {
        "vx": 1.0204,
        "vy": 0.6337,
        "vz": -0.2936,
        "v": 1.2366
      }, {
        "vx": 0.3393,
        "vy": -0.3454,
        "vz": 0.2966,
        "v": 0.5678
      }, {
        "vx": 1.0204,
        "vy": 0.6337,
        "vz": -0.2936,
        "v": 1.2366
      }, {
        "vx": 0.3393,
        "vy": -0.3454,
        "vz": 0.2966,
        "v": 0.5678
      }, {
        "vx": 1.0204,
        "vy": 0.6337,
        "vz": -0.2936,
        "v": 1.2366
      }, {
        "vx": 0.3393,
        "vy": -0.3454,
        "vz": 0.2966,
        "v": 0.5678
      }, {
        "vx": 1.0204,
        "vy": 0.6337,
        "vz": -0.2936,
        "v": 1.2366
      }, {
        "vx": 0.3393,
        "vy": -0.3454,
        "vz": 0.2966,
        "v": 0.5678
      }, {
        "vx": 1.0204,
        "vy": 0.6337,
        "vz": -0.2936,
        "v": 1.2366
      }, {
        "vx": 0.3393,
        "vy": -0.3454,
        "vz": 0.2966,
        "v": 0.5678
      }, {
        "vx": 1.0204,
        "vy": 0.6337,
        "vz": -0.2936,
        "v": 1.2366
      }, {
        "vx": 0.3393,
        "vy": -0.3454,
        "vz": 0.2966,
        "v": 0.5678
      }, {
        "vx": 1.0204,
        "vy": 0.6337,
        "vz": -0.2936,
        "v": 1.2366
      }, {
        "vx": 0.3393,
        "vy": -0.3454,
        "vz": 0.2966,
        "v": 0.5678
      }, {
        "vx": 1.0204,
        "vy": 0.6337,
        "vz": -0.2936,
        "v": 1.2366
      }, {
        "vx": 0.3393,
        "vy": -0.3454,
        "vz": 0.2966,
        "v": 0.5678
      }, {
        "vx": 1.0204,
        "vy": 0.6337,
        "vz": -0.2936,
        "v": 1.2366
      }, {
        "vx": 1.0204,
        "vy": 0.6337,
        "vz": -0.2936,
        "v": 1.2366
      }
    ];
    return(
    <CoordinateDifferenceBarGraph
      values={values100}
    />)
  })