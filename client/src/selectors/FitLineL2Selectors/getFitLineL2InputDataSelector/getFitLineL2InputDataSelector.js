import { createSelector } from 'reselect';

const getLineL2PointsSelector = state => state.geometry.fitLineL2.input.points;

export const getLineL2Points = createSelector(getLineL2PointsSelector, points => points);
