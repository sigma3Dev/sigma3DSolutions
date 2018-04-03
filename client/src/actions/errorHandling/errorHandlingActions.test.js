import {
  REMOVE_ERROR,
  removeError,
} from './errorHandlingActions';

describe('errorHandlingActions', () => {
  it('should create a REMOVE_ERROR action', () => {
    const expected = {
      type: REMOVE_ERROR,
    };
    const result = removeError();
    expect(result.type).toEqual(expected.type);
    expect(result.receivedAt).toBeDefined();
  });
});
