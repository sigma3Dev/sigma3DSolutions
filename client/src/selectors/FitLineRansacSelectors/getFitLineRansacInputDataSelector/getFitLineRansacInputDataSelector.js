import { createSelector } from 'reselect';

const getLineRansacPointsSelector = state => state.geometry.fitLineRansac.input.params.points;
const getLineRansacToleranceSelector = state => state.geometry.fitLineRansac.input.params.tolerance;

export const getLineRansacPoints = createSelector(getLineRansacPointsSelector, points => points);
export const getLineRansacTolerance = createSelector(
  getLineRansacToleranceSelector,
  tolerance => tolerance,
);
