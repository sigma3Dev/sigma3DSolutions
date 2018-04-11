import {
  createSelectorWithDependencies as createSelector,
  registerSelectors,
} from 'reselect-tools';

const getChebyshevCircleFitInputDataSelector = state =>
  state.geometry.chebyshevCircleFit.input.circlePoints;

export const getCirclePoints = createSelector(
  getChebyshevCircleFitInputDataSelector,
  points => points,
);

registerSelectors({ getCirclePoints });
