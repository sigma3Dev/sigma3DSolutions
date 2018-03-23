import {
  getTrafoParams,
  getIsCalculating,
  getTrafoDifference,
  getTransformedStartPoints,
} from './getTrafoResultDataSelector';

describe('getTrafoResultDataSelector Used By ThreeDTrafoResultContainer', () => {
  it('getTrafoParams', () => {
    const state = {
      trafoResult: {
        tx: 1380.4859742435729,
        ty: 9336.536415479428,
        tz: -3796.3960642844177,
        q0: -0.9950785875879063,
        q1: -0.004830151859800749,
        q2: -0.0006079507786298357,
        q3: 0.09896921012577276,
      }
    };
    const expected = [
      1380.4859742435729,
      9336.536415479428,
      -3796.3960642844177,
      -0.9950785875879063,
      -0.004830151859800749,
      -0.0006079507786298357,
      0.09896921012577276,
    ];
    const result = getTrafoParams(state);
    expect(result).toEqual(expected);
  });
  it('getTrafoDifference', () => {
    const state = {
      trafoResultDifference: {
        difference: [
          {
            vx: 0.15,
            vy: 0.21,
            vz: 0.11,
            v: 0.16
          }
        ]
      }
    };
    const expected = [
      {
        vx: 0.15,
        vy: 0.21,
        vz: 0.11,
        v: 0.16
      }
    ];
    const result = getTrafoDifference(state);
    expect(result).toEqual(expected);
  });
  it('getIsCalculating', () => {
    const state = {
      calculationStatus: {
        isCalculating: false
      }
    }
    const expected = false;
    const result = getIsCalculating(state);
    expect(result).toEqual(expected);
  });
  it('getTransformedStartPoints', () => {
    const state = {
      trafoResultDifference: {
        difference: [
          {
            vx: 0.15,
            vy: 0.21,
            vz: 0.11,
            v: 0.16
          }, {
            vx: 0.15,
            vy: 0.21,
            vz: 0.11,
            v: 0.16
          }
        ]
      },
      trafoDataInput: {
        targetSystemPoints: [
          {
            x: 1.0,
            y: 2.0,
            z: 3.0,
            useX: true,
            useY: true,
            useZ: true,
          },
          {
            x: 6.0,
            y: 8.0,
            z: 5.0,
            useX: true,
            useY: true,
            useZ: true,
          }
        ]
      }
    };
    const expected = [
      [
        1.15,
        2.21,
        3.11,
      ], [
        6.15,
        8.21,
        5.11,
      ], 
    ];
    const result = getTransformedStartPoints(state);
    expect(result).toEqual(expected);
  });
  it('getTransformedStartPoints', () => {
    const state = {
      trafoResultDifference: {
        difference: []
      },
      trafoDataInput: {
        targetSystemPoints: [
          {
            x: 1.0,
            y: 2.0,
            z: 3.0,
            useX: true,
            useY: true,
            useZ: true,
          },
          {
            x: 6.0,
            y: 8.0,
            z: 5.0,
            useX: true,
            useY: true,
            useZ: true,
          }
        ]
      }
    };
    const expected = [];
    const result = getTransformedStartPoints(state);
    expect(result).toEqual(expected);
  });
});