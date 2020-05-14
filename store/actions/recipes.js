export const TOGGLE_FAVOURITE = 'TOGGLE-FAVOURITE';
export const SET_FILTERS = 'SET_FILTERS';

export const toggleFavourite = (id) => {
    return { type: TOGGLE_FAVOURITE, recipeId: id}
};

export const setFilters = filterSettings => {
    return { type: SET_FILTERS, filters: filterSettings }
};