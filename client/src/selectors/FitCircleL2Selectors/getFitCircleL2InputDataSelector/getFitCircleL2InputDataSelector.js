import { createSelector } from 'reselect';

const getCircleL2PointsSelector = state => state.geometry.fitCircleL2.input.points;

export const getCircleL2Points = createSelector(getCircleL2PointsSelector, points => points);
