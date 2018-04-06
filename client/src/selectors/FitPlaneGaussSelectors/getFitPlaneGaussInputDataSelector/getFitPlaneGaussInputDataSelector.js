import { createSelector } from 'reselect';

const getPlanePointsSelector = state => state.fitPlaneGaussDataInput.points;

export const getPlanePoints = createSelector(getPlanePointsSelector, points => points);
