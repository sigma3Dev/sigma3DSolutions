import { createSelector } from 'reselect';

const getChebyshevCircleFitInputDataSelector = state =>
  state.chebyshevCircleFitDataInput.circlePoints;

export const getCirclePoints = createSelector(
  getChebyshevCircleFitInputDataSelector,
  points => points,
);
