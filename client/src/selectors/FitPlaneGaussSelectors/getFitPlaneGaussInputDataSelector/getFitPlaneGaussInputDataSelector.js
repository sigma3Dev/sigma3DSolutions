import {
  createSelectorWithDependencies as createSelector,
  registerSelectors,
} from 'reselect-tools';

const getPlaneGaussPointsSelector = state => state.geometry.fitPlaneGauss.input.points;

export const getPlaneGaussPoints = createSelector(getPlaneGaussPointsSelector, points => points);

registerSelectors({ getPlaneGaussPoints });
