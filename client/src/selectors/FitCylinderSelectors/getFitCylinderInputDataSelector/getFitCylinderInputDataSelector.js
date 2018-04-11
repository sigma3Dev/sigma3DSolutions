import {
  createSelectorWithDependencies as createSelector,
  registerSelectors,
} from 'reselect-tools';

const getCylinderPointsSelector = state => state.geometry.fitCylinder.input.points;

export const getCylinderPoints = createSelector(getCylinderPointsSelector, points => points);

registerSelectors({ getCylinderPoints });
