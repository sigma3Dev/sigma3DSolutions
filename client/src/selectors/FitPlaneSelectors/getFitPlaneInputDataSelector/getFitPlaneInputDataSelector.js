import { createSelector } from 'reselect';

const getPlanePointsSelector = state => state.fitPlaneDataInput.points;

export const getPlanePoints = createSelector(getPlanePointsSelector, points => points);
