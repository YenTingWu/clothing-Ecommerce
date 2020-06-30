import { createSelector } from 'reselect';

const selectShop = state => state.shop;
// selectShop is a non-memorized selector, which is also an input selector

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
    );
    
export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.values(collections)
);

export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections], 
    collections => collections[collectionUrlParam]
);