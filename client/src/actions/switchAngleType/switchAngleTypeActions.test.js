import {
  SWITCH_ANGLE_TYPE,
  switchAngleType,
} from './switchAngleTypeActions';

describe('switchAngleTypeActions', () => {
  it('should create a SWITCH_ANGLE_TYPE action', () => {
    const expected = {
      type: SWITCH_ANGLE_TYPE
    };
    const result = switchAngleType();
    expect(result.type).toEqual(expected.type);
    expect(result.receivedAt).toBeDefined();
  });
});