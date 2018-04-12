import { createSelector } from 'reselect';

const getSpherePointsSelector = state => state.geometry.fitSphere.input.points;

export const getSpherePoints = createSelector(getSpherePointsSelector, points => points);
