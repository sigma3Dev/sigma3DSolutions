import { createSelector } from 'reselect';

const getBundleAdjustmentResultSelector = state => state.geometry.bundleAdjustment.result;
const getIsCalculatingSelector = state => state.calculationStatus.isCalculating;

export const getBundleAdjustmentResult = createSelector(
  getBundleAdjustmentResultSelector,
  params => [
    params.baseStationId,
    params.transformationParameters.map(trafoParam => ({
      stationId: trafoParam.stationId,
      tx: trafoParam.tx,
      ty: trafoParam.ty,
      tz: trafoParam.tz,
      m: trafoParam.m,
      q0: trafoParam.q0,
      q1: trafoParam.q1,
      q2: trafoParam.q2,
      q3: trafoParam.q3,
    })),
    params.geometries.map(geometry => ({
      id: geometry.id,
      x: geometry.x,
      y: geometry.y,
      z: geometry.z,
      stdev: geometry.stdev,
    })),
  ],
);

export const getIsCalculating = createSelector(
  getIsCalculatingSelector,
  isCalculating => isCalculating,
);
