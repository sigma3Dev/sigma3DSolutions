import { createSelector } from 'reselect';
import { getTargetSystemPoints } from '../getTrafoInputDataSelector/getTrafoInputDataSelector';

const getTrafoParamsSelector = state => state.trafoResult;
const getTrafoDifferenceSelector = state => state.trafoResultDifference.difference;
const getIsCalculatingSelector = state => state.calculationStatus.isCalculating;

export const getTrafoParams = createSelector(
  getTrafoParamsSelector, params => ([  
    params.tx,
    params.ty,
    params.tz,
    params.q0,
    params.q1,
    params.q2,
    params.q3,
  ])
);

export const getTrafoDifference = createSelector(
  getTrafoDifferenceSelector, difference => difference
);

export const getIsCalculating = createSelector(
  getIsCalculatingSelector, isCalculating => isCalculating
);

export const getTransformedStartPoints = createSelector(
  getTrafoDifference, getTargetSystemPoints, (difference, targetPoints) => {
    if (difference.length === 0) return [];
    return (
      targetPoints.map((point, i) => ([
        point.x + difference[i].vx,
        point.y + difference[i].vy,
        point.z + difference[i].vz,
      ]))
    )
  }
);