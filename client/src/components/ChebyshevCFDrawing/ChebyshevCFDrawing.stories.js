import ChebyshevCFDrawing from './ChebyshevCFDrawing';
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, boolean, number } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

const StoryRouter = require('storybook-router');

const stories = storiesOf('Start.ChebyshevCFDrawing', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(withKnobs);
stories.addDecorator(StoryRouter.default());

stories
  .add('Drawing to display the result of the calculated chebyshev circle fit adjustment especially radius and chebyshev distance', () => {
    const radius = 81.00.toFixed(2);
    const chebyDist = 3.88.toFixed(2);
    return(
      <ChebyshevCFDrawing radius={radius} chebyDist={chebyDist} />
    )
  })

stories
  .add('chebyshev circle with high radius or chebyDist', () => {
    const radius = number('radius', 1081.0.toFixed(2));
    const chebyDist = number('chebyDist', 13.88.toFixed(2));
    return(
      <ChebyshevCFDrawing radius={radius} chebyDist={chebyDist} />
    )
  })

  stories
  .add('chebyshev circle with points which are located on the axis in svg', () => {
    const radius = number('radius', 1000.00.toFixed(2));
    const chebyDist = number('chebyDist', 20.00.toFixed(2));
    const options = {
      range: true,
      min: -1000,
      max: 1000,
      step: 500,
    };
    const defaultValue = 0;
    const points = [   
      {
        x: 0,
        y: -990,
      },
      {
        x: 1000,
        y: 0,
      },
      {
        x: 1010,
        y: 0,
      },
      {
        x: 990,
        y: 0,
      },
      {
        x: 995,
        y: 0,
      },
      {
        x: -1000,
        y: 0,
      },
      {
        x: -1010,
        y: 0,
      },
      {
        x: -990,
        y: 0,
      },
      {
        x: 0,
        y: 1010,
      },
      {
        x: 0,
        y: 990,
      },
      {
        x: 0,
        y: -1010,
      }
    ]
    return(
      <ChebyshevCFDrawing 
        radius={radius} 
        chebyDist={chebyDist} 
        points={points}
      />
    )
  })


  stories
  .add('chebyshev circle with circle points in svg (scale=1)', () => {
    const radius = 200.00.toFixed(2);
    const chebyDist = 80.00.toFixed(2);
    const points = [   
      {x:200.00	,y:0.00		,},
      {x:193.19	,y:51.76    ,},
      {x:173.21	,y:100.00   ,},
      {x:141.42	,y:141.42   ,},
      {x:100.00	,y:173.21   ,},
      {x:51.76	,y:193.19   ,},
      {x:0.00		,y:200.00   ,},
      {x:-51.76	,y:193.19   ,},
      {x:-100.00	,y:173.21   ,},
      {x:-141.42	,y:141.42   ,},
      {x:-173.21	,y:100.00   ,},
      {x:-193.19	,y:51.76    ,},
      {x:-200.00	,y:0.00     ,},
      {x:-193.19	,y:-51.76   ,},
      {x:-173.21	,y:-100.00  ,},
      {x:-141.42	,y:-141.42  ,},
      {x:-100.00	,y:-173.21  ,},
      {x:-51.76	,y:-193.19  ,},
      {x:0.00		,y:-200.00  ,},
      {x:51.76	,y:-193.19  ,},
      {x:100.00	,y:-173.21  ,},
      {x:141.42	,y:-141.42  ,},
      {x:173.21	,y:-100.00  ,},
      {x:193.19	,y:-51.76   ,}
    ]
    return(
      <ChebyshevCFDrawing 
        radius={radius} 
        chebyDist={chebyDist} 
        points={points}
      />
    )
  })


  stories
  .add('chebyshev circle with circle points in svg (scale=0.2)', () => {
    const radius = 1000.00.toFixed(2);
    const chebyDist = 20.00.toFixed(2);
    const points = [   
      {x:1010.00	,y:0.00		,},
      {x:965.93	,y:258.82	,},
      {x:866.03	,y:500.00	,},
      {x:707.11	,y:707.11	,},
      {x:500.00	,y:866.03	,},
      {x:258.82	,y:965.93	,},
      {x:0.00		,y:1010.00	,},
      {x:-258.82	,y:965.93	,},
      {x:-500.00	,y:866.03	,},
      {x:-707.11	,y:707.11	,},
      {x:-866.03	,y:500.00	,},
      {x:-965.93	,y:258.82	,},
      {x:-1010.00	,y:0.00		,},
      {x:-975.93	,y:-258.82	,},
      {x:-866.03	,y:-500.00	,},
      {x:-717.11	,y:-707.11	,},

      {x:-480.00	,y:-866.03	,},
      {x:-500.00	,y:-866.03	,},
      {x:-520.00	,y:-866.03	,},

      {x:-268.82	,y:-965.93	,},
      {x:0.00		,y:-1010.00	,},
      {x:258.82	,y:-965.93	,},
      {x:500.00	,y:-866.03	,},
      {x:707.11	,y:-707.11	,},
      {x:866.03	,y:-500.00	,},
      {x:965.93	,y:-258.82	,}
    ]
    return(
      <ChebyshevCFDrawing 
        radius={radius} 
        chebyDist={chebyDist} 
        points={points}
      />
    )
  })