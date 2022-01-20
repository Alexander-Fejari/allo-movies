import { createSelector } from 'reselect';

export const favorisSelector = (state) => state.favoris;

export const favorisListSelector = createSelector(
  [favorisSelector],
  (favoris) => favoris.data
);

export const favorisIsLoadingSelector = createSelector(
  [favorisSelector],
  (favoris) => favoris.isLoading
);

export const favorisListNameSelector = createSelector(
  [favorisListSelector],
  (favorisData) => favorisData.map((f) => f.title)
);
