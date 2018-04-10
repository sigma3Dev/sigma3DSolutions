import { createSelector } from 'reselect';

const getPlaneGaussPointsSelector = state => state.geometry.fitPlaneGauss.input.points;

export const getPlaneGaussPoints = createSelector(getPlaneGaussPointsSelector, points => points);
