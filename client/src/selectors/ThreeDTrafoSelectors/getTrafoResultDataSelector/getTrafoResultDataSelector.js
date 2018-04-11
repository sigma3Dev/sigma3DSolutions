import {
  createSelectorWithDependencies as createSelector,
  registerSelectors,
} from 'reselect-tools';
import { getTargetSystemPoints } from '../getTrafoInputDataSelector/getTrafoInputDataSelector';

const getTrafoParamsSelector = state => state.transformations.threeDTrafo.result;
const getTrafoDifferenceSelector = state => state.transformations.threeDTrafo.difference.difference;
const getIsCalculatingSelector = state => state.calculationStatus.isCalculating;

export const getTrafoParams = createSelector(getTrafoParamsSelector, params => [
  params.tx,
  params.ty,
  params.tz,
  params.q0,
  params.q1,
  params.q2,
  params.q3,
]);

export const getTrafoDifference = createSelector(
  getTrafoDifferenceSelector,
  difference => difference,
);

export const getIsCalculating = createSelector(
  getIsCalculatingSelector,
  isCalculating => isCalculating,
);

export const getTransformedStartPoints = createSelector(
  getTrafoDifference,
  getTargetSystemPoints,
  (difference, targetPoints) => {
    if (difference.length === 0 || difference.length !== targetPoints.length) return [];
    return targetPoints.map((point, i) => [
      point.x + difference[i].vx,
      point.y + difference[i].vy,
      point.z + difference[i].vz,
    ]);
  },
);

registerSelectors({
  getTrafoParams,
  getTrafoDifference,
  getIsCalculating,
  getTransformedStartPoints,
});
