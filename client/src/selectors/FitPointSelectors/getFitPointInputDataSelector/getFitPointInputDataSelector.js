import { createSelector } from 'reselect';

const getPointsSelector = state => state.geometry.fitPoint.input.points;

export const getPoints = createSelector(getPointsSelector, points => points);
