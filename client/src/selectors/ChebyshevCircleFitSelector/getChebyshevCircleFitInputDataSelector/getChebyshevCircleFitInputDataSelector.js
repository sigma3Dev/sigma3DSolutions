import { createSelector } from 'reselect';

const getFitCircleChebyshevInputDataSelector = state =>
  state.geometry.fitCircleChebyshev.input.circlePoints;

export const getCirclePoints = createSelector(
  getFitCircleChebyshevInputDataSelector,
  points => points,
);
