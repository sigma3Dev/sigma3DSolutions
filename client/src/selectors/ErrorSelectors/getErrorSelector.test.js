import { getError } from './getErrorSelector';

describe('getErrorSelector Used By ThreeDTrafoResultContainer', () => {
  it('getError', () => {
    const state = {
      error: {
        error: 'Error while trying to fit.',
      },
    };
    const expected = 'Error while trying to fit.';
    const result = getError(state);
    expect(result).toEqual(expected);
  });
});
