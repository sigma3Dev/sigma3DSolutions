import { createSelector } from 'reselect';

const getPlanePointsSelector = state => state.geometry.fitPlaneGauss.input.points;

export const getPlanePoints = createSelector(getPlanePointsSelector, points => points);
