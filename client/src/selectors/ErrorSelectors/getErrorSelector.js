import { createSelector } from 'reselect';

const getErrorSelector = state => state.error.error;

export const getError = createSelector(getErrorSelector, error => error);
