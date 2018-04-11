import {
  createSelectorWithDependencies as createSelector,
  registerSelectors,
} from 'reselect-tools';

const getErrorSelector = state => state.error.error;

export const getError = createSelector(getErrorSelector, error => error);

registerSelectors({ getError });
