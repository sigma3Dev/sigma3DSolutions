import { createSelector } from 'reselect';

const getTranslatePointAlongAxisSelector = state =>
  state.transformations.translatePointAlongAxis.translatePointAlongAxis;

export const getTranslatePointAlongAxis = createSelector(
  getTranslatePointAlongAxisSelector,
  params => [params.x.toFixed(2), params.y.toFixed(2), params.z.toFixed(2)],
);
