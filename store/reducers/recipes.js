import { RECIPES } from "../../data/dummy-data";
import { TOGGLE_FAVOURITE, SET_FILTERS } from "../actions/recipes";

const initialState = {
    recipes: RECIPES,
    filteredRecipes: RECIPES,
    favouriteRecipes: []
}

const recipeReducer = (state = initialState, action) => {
    switch (action.type) { 
        case TOGGLE_FAVOURITE: 
        const existingIndex = state.favouriteRecipes.findIndex(recipe => recipe.id === action.recipeId);
        if (existingIndex >= 0) {
            const updatedFavouriteRecipes = [...state.favouriteRecipes];
            updatedFavouriteRecipes.splice(existingIndex, 1);
            return { ...state, favouriteRecipes: updatedFavouriteRecipes };
        }else {
            const recipeToAdd = state.recipes.find(recipe => recipe.id === action.recipeId);
            return { ...state, favouriteRecipes: state.favouriteRecipes.concat(recipeToAdd) };
        }
        case SET_FILTERS:
            const appliedFilters = action.filters;
            const updatedFilteredRecipes = state.recipes.filter(recipe => {
                if (appliedFilters.glutenFree && !recipe.isGlutenFree) {
                    return false;
                }
                if (appliedFilters.lactoseFree && !recipe.isLactoseFree) {
                    return false;
                }
                if (appliedFilters.vegetarian && !recipe.isVegetarian) {
                    return false;
                }
                if (appliedFilters.vegan && !recipe.isVegan) {
                    return false;
                }
                return true;
            });
            return { ...state, filteredRecipes: updatedFilteredRecipes }
        default:
            return state;
    }
}

export default recipeReducer;