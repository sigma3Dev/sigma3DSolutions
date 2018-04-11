import {
  createSelectorWithDependencies as createSelector,
  registerSelectors,
} from 'reselect-tools';

const getPlaneRansacPointsSelector = state => state.geometry.fitPlaneRansac.input.params.points;
const getPlaneRansacToleranceSelector = state =>
  state.geometry.fitPlaneRansac.input.params.tolerance;

export const getPlaneRansacPoints = createSelector(getPlaneRansacPointsSelector, points => points);

export const getPlaneRansacTolerance = createSelector(
  getPlaneRansacToleranceSelector,
  tolerance => tolerance,
);

registerSelectors({ getPlaneRansacPoints, getPlaneRansacTolerance });
