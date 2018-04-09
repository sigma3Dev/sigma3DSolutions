import {
  UPDATE_FIT_PLANE_RANSAC_TOLERANCE,
  updateFitPlaneRansacTolerance,
} from './changeFitPlaneRansacInputFieldActions';

describe('changeApplyTrafoParamInputFieldActions', () => {
  it('should create a CHANGE_APPLY_TRAFO_PARAM_INPUT_FIELD action', () => {
    const newTolerance = 0.3;
    const expected = {
      type: UPDATE_FIT_PLANE_RANSAC_TOLERANCE,
      newTolerance,
    };
    const result = updateFitPlaneRansacTolerance(newTolerance);
    expect(result.type).toEqual(expected.type);
    expect(result.newTolerance).toEqual(expected.newTolerance);
    expect(result.receivedAt).toBeDefined();
  });
});
