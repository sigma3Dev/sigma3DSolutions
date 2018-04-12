import {
  UPDATE_FIT_LINE_RANSAC_TOLERANCE,
  updateFitLineRansacTolerance,
} from './changeFitLineRansacInputFieldActions';

describe('changeApplyTrafoParamInputFieldActions', () => {
  it('should create a UPDATE_FIT_LINE_RANSAC_TOLERANCE action', () => {
    const newTolerance = 0.3;
    const expected = {
      type: UPDATE_FIT_LINE_RANSAC_TOLERANCE,
      newTolerance,
    };
    const result = updateFitLineRansacTolerance(newTolerance);
    expect(result.type).toEqual(expected.type);
    expect(result.newTolerance).toEqual(expected.newTolerance);
    expect(result.receivedAt).toBeDefined();
  });
});
