import { createSelector } from 'reselect';

const getCylinderPointsSelector = state => state.geometry.fitCylinder.input.points;

export const getCylinderPoints = createSelector(getCylinderPointsSelector, points => points);
