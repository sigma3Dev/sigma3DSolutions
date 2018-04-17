import { createSelector } from 'reselect';

const getBundleAdjustmentResultSelector = state => state.geometry.bundleAdjustment.result;
const getIsCalculatingSelector = state => state.calculationStatus.isCalculating;

export const getBundleAdjustmentResult = createSelector(
  getBundleAdjustmentResultSelector,
  params => [
    params.baseStationId,
    params.transformationParameters.map(trafoParam => [
      trafoParam.stationId,
      trafoParam.tx,
      trafoParam.ty,
      trafoParam.tz,
      trafoParam.m,
      trafoParam.q0,
      trafoParam.q1,
      trafoParam.q2,
      trafoParam.q3,
    ]),
    params.geometries.map(geometry => [
      geometry.id,
      geometry.x,
      geometry.y,
      geometry.z,
      geometry.stdev,
    ]),
  ],
);

export const getIsCalculating = createSelector(
  getIsCalculatingSelector,
  isCalculating => isCalculating,
);
