import { createSelector } from 'reselect';

const getChebyshevCircleFitInputDataSelector = state =>
  state.geometry.chebyshevCircleFit.input.circlePoints;

export const getCirclePoints = createSelector(
  getChebyshevCircleFitInputDataSelector,
  points => points,
);
