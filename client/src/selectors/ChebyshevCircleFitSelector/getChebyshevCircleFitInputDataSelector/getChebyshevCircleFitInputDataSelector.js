import { createSelector } from 'reselect';
const getChebyshevCircleFitInputDataSelector = state => state.ChebyshevCircleFitDataInput.circlePoints;

export const getCirclePoints = createSelector(
  getChebyshevCircleFitInputDataSelector, points => points 
)
