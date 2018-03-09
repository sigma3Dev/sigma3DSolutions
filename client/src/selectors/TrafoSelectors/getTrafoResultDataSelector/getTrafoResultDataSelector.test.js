import {
  getTrafoParams,
  getIsCalculating,
  getIsEuler
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
        q3: 0.09896921012577276
      }
    };
    const expected = [
      "1380.49",
      "9336.54",
      "-3796.40",
      "-0.9951",
      "-0.0048",
      "-0.0006",
      "0.0990"
    ]
    const result = getTrafoParams(state);
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
  it('getIsEuler', () => {
    const state = {
      isEuler: {
        isEuler: false
      }
    }
    const expected = false;
    const result = getIsEuler(state);
    expect(result).toEqual(expected);
  })
});